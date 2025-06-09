import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { getAllPageSections, deletePageSection, updatePageSection, PageSection } from '../../lib/supabase';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const CallToActions: React.FC = () => {
  const [ctaSections, setCtaSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadCTASections();
  }, []);

  const loadCTASections = async () => {
    try {
      const data = await getAllPageSections();
      // Filter only CTA sections
      const ctas = data?.filter(section => section.section_type === 'cta') || [];
      setCtaSections(ctas);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this CTA?')) return;

    try {
      await deletePageSection(id);
      setCtaSections(ctaSections.filter(section => section.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleToggleActive = async (section: PageSection) => {
    try {
      const updatedSection = await updatePageSection(section.id, {
        is_active: !section.is_active
      });
      setCtaSections(ctaSections.map(s => s.id === section.id ? updatedSection : s));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getCTAPreview = (content: any) => {
    if (content.cta_buttons && content.cta_buttons.length > 0) {
      return content.cta_buttons[0].text || 'CTA Button';
    }
    if (content.button_text) {
      return content.button_text;
    }
    return 'Call to Action';
  };

  const getCTALink = (content: any) => {
    if (content.cta_buttons && content.cta_buttons.length > 0) {
      return content.cta_buttons[0].link || content.cta_buttons[0].href || '#';
    }
    if (content.button_link || content.link) {
      return content.button_link || content.link;
    }
    return '#';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Call to Actions</h1>
          <p className="text-gray-600 mt-2">Manage CTA sections and redirections across your website</p>
        </div>
        <Link to="/admin/sections/new?type=cta">
          <Button variant="primary" icon={<Plus size={20} />}>
            Create CTA
          </Button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {ctaSections.length === 0 ? (
        <Card className="p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No CTAs found</h3>
          <p className="text-gray-600 mb-4">Create your first call-to-action section to get started</p>
          <Link to="/admin/sections/new?type=cta">
            <Button variant="primary">Create First CTA</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctaSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {section.title || section.section_name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {section.page_name} • Order: {section.display_order}
                    </p>
                    {section.subtitle && (
                      <p className="text-sm text-gray-600 mb-3">{section.subtitle}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleToggleActive(section)}
                    className={`p-1 rounded ${
                      section.is_active ? 'text-green-600' : 'text-gray-400'
                    }`}
                    title={section.is_active ? 'Active' : 'Inactive'}
                  >
                    {section.is_active ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                </div>

                <div className="flex-1 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <p className="text-sm font-medium text-gray-700 mb-1">CTA Preview:</p>
                    <p className="text-sm text-gray-900">{getCTAPreview(section.content)}</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <ExternalLink size={14} />
                    <span className="truncate">{getCTALink(section.content)}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    section.is_active
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {section.is_active ? 'Active' : 'Inactive'}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/admin/sections/edit/${section.id}`}
                      className="p-2 text-primary hover:text-primary-600 hover:bg-primary/10 rounded"
                      title="Edit CTA"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(section.id)}
                      className="p-2 text-red-600 hover:text-red-800 hover:bg-red/10 rounded"
                      title="Delete CTA"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* CTA Management Tips */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">CTA Management Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div>
            <h4 className="font-medium mb-2">Content Structure:</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Use "cta_buttons" array for multiple buttons</li>
              <li>• Include "text", "link", and "variant" properties</li>
              <li>• Set "target" for external links</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Best Practices:</h4>
            <ul className="space-y-1 text-blue-700">
              <li>• Use action-oriented button text</li>
              <li>• Test all links before activating</li>
              <li>• Consider mobile responsiveness</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CallToActions;