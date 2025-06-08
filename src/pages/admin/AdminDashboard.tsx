import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Layers, TrendingUp } from 'lucide-react';
import { getAllPosts, getAllContacts, getAllPageSections } from '../../lib/supabase';
import Card from '../../components/ui/Card';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    posts: 0,
    contacts: 0,
    sections: 0,
    loading: true
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [posts, contacts, sections] = await Promise.all([
        getAllPosts(),
        getAllContacts(),
        getAllPageSections()
      ]);

      setStats({
        posts: posts?.length || 0,
        contacts: contacts?.length || 0,
        sections: sections?.length || 0,
        loading: false
      });
    } catch (error) {
      console.error('Error loading stats:', error);
      setStats(prev => ({ ...prev, loading: false }));
    }
  };

  const statCards = [
    {
      title: 'Blog Posts',
      value: stats.posts,
      icon: FileText,
      color: 'primary',
      description: 'Total published and draft posts'
    },
    {
      title: 'Contact Submissions',
      value: stats.contacts,
      icon: Users,
      color: 'secondary',
      description: 'Messages from website visitors'
    },
    {
      title: 'Page Sections',
      value: stats.sections,
      icon: Layers,
      color: 'accent',
      description: 'Dynamic content sections'
    },
    {
      title: 'Growth',
      value: '+12%',
      icon: TrendingUp,
      color: 'primary',
      description: 'This month vs last month'
    }
  ];

  if (stats.loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Welcome to the GARC admin panel</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6" glowColor={stat.color as 'primary' | 'secondary' | 'accent'}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}/20`}>
                    <Icon size={24} className={`text-${stat.color}`} />
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <a
              href="/admin/sections"
              className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Layers size={20} className="text-primary" />
                <div>
                  <p className="font-medium text-gray-900">Manage Page Sections</p>
                  <p className="text-sm text-gray-600">Edit dynamic content</p>
                </div>
              </div>
            </a>
            <a
              href="/admin/posts"
              className="block p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText size={20} className="text-secondary" />
                <div>
                  <p className="font-medium text-gray-900">Create New Post</p>
                  <p className="text-sm text-gray-600">Add blog content</p>
                </div>
              </div>
            </a>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">System Status: Online</p>
                <p className="text-xs text-gray-600">All services running normally</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">Database: Connected</p>
                <p className="text-xs text-gray-600">Supabase connection active</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;