import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Eye, EyeOff, ArrowUp, ArrowDown } from 'lucide-react';
import { getAllPageSections, deletePageSection, updatePageSection, PageSection } from '../../lib/supabase';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const PageSections: React.FC = () => {
  const [sections, setSections] = useState<PageSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    try {
      const data = await getAllPageSections();
      setSections(data || []);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this section?')) return;

    try {
      await deletePageSection(id);
      setSections(sections.filter(section => section.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleToggleActive = async (section: PageSection) => {
    try {
      const updatedSection = await updatePageSection(section.id, {
        is_active: !section.is_active
      });
      setSections(sections.map(s => s.id === section.id ? updatedSection : s));
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleReorder = async (section: PageSection, direction: 'up' | 'down') => {
    const currentOrder = section.display_order;
    const newOrder = direction === 'up' ? currentOrder - 1 : currentOrder + 1;

    try {
      await updatePageSection(section.id, { display_order: newOrder });
      loadSections(); // Reload to get proper ordering
    } catch (error: any) {
      setError(error.message);
    }
  };

  const groupedSections = sections.reduce((acc, section) => {
    if (!acc[section.page_name]) {
      acc[section.page_name] = [];
    }
    acc[section.page_name].push(section);
    return acc;
  }, {} as Record<string, PageSection[]>);

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
          <h1 className="text-3xl font-bold text-gray-900">Page Sections</h1>
          <p className="text-gray-600 mt-2">Manage dynamic content sections across your website</p>
        </div>
        <Link to="/admin/sections/new">
          <Button variant="primary" icon={<Plus size={20} />}>
            Create Section
          </Button>
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {Object.keys(groupedSections).length === 0 ? (
        <Card className="p-8 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No sections found</h3>
          <p className="text-gray-600 mb-4">Create your first page section to get started</p>
          <Link to="/admin/sections/new">
            <Button variant="primary">Create First Section</Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedSections).map(([pageName, pageSections]) => (
            <motion.div
              key={pageName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h2 className="text-xl font-semibold text-gray-900 capitalize">
                    {pageName} Page
                  </h2>
                  <p className="text-sm text-gray-600">
                    {pageSections.length} section{pageSections.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Section
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Order
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {pageSections
                        .sort((a, b) => a.display_order - b.display_order)
                        .map((section) => (
                          <tr key={section.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  {section.section_name}
                                </div>
                                <div className="text-sm text-gray-500">
                                  ID: {section.id.slice(0, 8)}...
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                {section.section_type}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="text-sm text-gray-900">
                                {section.title || '-'}
                              </div>
                              {section.subtitle && (
                                <div className="text-sm text-gray-500">
                                  {section.subtitle}
                                </div>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-1">
                                <span className="text-sm text-gray-900">
                                  {section.display_order}
                                </span>
                                <div className="flex flex-col gap-1 ml-2">
                                  <button
                                    onClick={() => handleReorder(section, 'up')}
                                    className="p-1 text-gray-400 hover:text-gray-600"
                                    disabled={section.display_order <= 1}
                                  >
                                    <ArrowUp size={12} />
                                  </button>
                                  <button
                                    onClick={() => handleReorder(section, 'down')}
                                    className="p-1 text-gray-400 hover:text-gray-600"
                                  >
                                    <ArrowDown size={12} />
                                  </button>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <button
                                onClick={() => handleToggleActive(section)}
                                className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${
                                  section.is_active
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {section.is_active ? (
                                  <>
                                    <Eye size={12} />
                                    Active
                                  </>
                                ) : (
                                  <>
                                    <EyeOff size={12} />
                                    Inactive
                                  </>
                                )}
                              </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex items-center gap-2">
                                <Link
                                  to={`/admin/sections/edit/${section.id}`}
                                  className="text-primary hover:text-primary-600"
                                >
                                  <Edit size={16} />
                                </Link>
                                <button
                                  onClick={() => handleDelete(section.id)}
                                  className="text-red-600 hover:text-red-800"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PageSections;