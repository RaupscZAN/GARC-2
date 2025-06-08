import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Save, ArrowLeft, AlertCircle } from 'lucide-react';
import { 
  createPageSection, 
  updatePageSection, 
  getPageSection, 
  PageSection 
} from '../../lib/supabase';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const PageSectionForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  const [formData, setFormData] = useState({
    page_name: '',
    section_name: '',
    section_type: '',
    title: '',
    subtitle: '',
    content: '{}',
    display_order: 1,
    is_active: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [jsonError, setJsonError] = useState('');

  useEffect(() => {
    if (isEditing && id) {
      loadSection(id);
    }
  }, [id, isEditing]);

  const loadSection = async (sectionId: string) => {
    try {
      setLoading(true);
      const section = await getPageSection(sectionId);
      setFormData({
        page_name: section.page_name,
        section_name: section.section_name,
        section_type: section.section_type,
        title: section.title || '',
        subtitle: section.subtitle || '',
        content: JSON.stringify(section.content, null, 2),
        display_order: section.display_order,
        is_active: section.is_active
      });
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const validateJson = (jsonString: string) => {
    try {
      JSON.parse(jsonString);
      setJsonError('');
      return true;
    } catch (error) {
      setJsonError('Invalid JSON format');
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'content') {
      validateJson(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateJson(formData.content)) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const sectionData = {
        ...formData,
        content: JSON.parse(formData.content),
        display_order: Number(formData.display_order)
      };

      if (isEditing && id) {
        await updatePageSection(id, sectionData);
      } else {
        await createPageSection(sectionData);
      }

      navigate('/admin/sections');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const sectionTypes = [
    { value: 'hero', label: 'Hero Section' },
    { value: 'card_grid', label: 'Card Grid' },
    { value: 'text_content', label: 'Text Content' },
    { value: 'image_text', label: 'Image + Text' },
    { value: 'cta', label: 'Call to Action' },
    { value: 'testimonials', label: 'Testimonials' },
    { value: 'features', label: 'Features' },
    { value: 'stats', label: 'Statistics' },
    { value: 'custom', label: 'Custom' }
  ];

  const pageNames = [
    'home',
    'about',
    'academies',
    'research-innovation',
    'partnerships',
    'venture-ecosystem',
    'contact'
  ];

  if (loading && isEditing) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={() => navigate('/admin/sections')}
          icon={<ArrowLeft size={20} />}
        >
          Back to Sections
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Edit Page Section' : 'Create Page Section'}
          </h1>
          <p className="text-gray-600 mt-2">
            {isEditing ? 'Update section content and settings' : 'Add a new dynamic content section'}
          </p>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3"
        >
          <AlertCircle size={20} className="text-red-500" />
          <span className="text-red-700">{error}</span>
        </motion.div>
      )}

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="page_name" className="block text-sm font-medium text-gray-700 mb-2">
                Page Name *
              </label>
              <select
                id="page_name"
                name="page_name"
                value={formData.page_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a page</option>
                {pageNames.map(page => (
                  <option key={page} value={page}>
                    {page.charAt(0).toUpperCase() + page.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="section_name" className="block text-sm font-medium text-gray-700 mb-2">
                Section Name *
              </label>
              <input
                type="text"
                id="section_name"
                name="section_name"
                value={formData.section_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., hero, features, testimonials"
              />
            </div>

            <div>
              <label htmlFor="section_type" className="block text-sm font-medium text-gray-700 mb-2">
                Section Type *
              </label>
              <select
                id="section_type"
                name="section_type"
                value={formData.section_type}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">Select a type</option>
                {sectionTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="display_order" className="block text-sm font-medium text-gray-700 mb-2">
                Display Order
              </label>
              <input
                type="number"
                id="display_order"
                name="display_order"
                value={formData.display_order}
                onChange={handleChange}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Section title"
            />
          </div>

          <div>
            <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700 mb-2">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Section subtitle"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Content (JSON) *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows={12}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm ${
                jsonError ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder='{"key": "value"}'
            />
            {jsonError && (
              <p className="mt-1 text-sm text-red-600">{jsonError}</p>
            )}
            <p className="mt-1 text-sm text-gray-500">
              Enter valid JSON content for this section. This will be used to render dynamic content.
            </p>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_active"
              name="is_active"
              checked={formData.is_active}
              onChange={handleChange}
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
              Active (visible on website)
            </label>
          </div>

          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/admin/sections')}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={loading || Boolean(jsonError)}
              icon={<Save size={20} />}
            >
              {loading ? 'Saving...' : isEditing ? 'Update Section' : 'Create Section'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PageSectionForm;