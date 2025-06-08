import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  LogOut,
  Layers,
  FolderOpen
} from 'lucide-react';
import { signOut } from '../../lib/supabase';
import { useAuth } from '../../hooks/useAuth';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Layers, label: 'Page Sections', path: '/admin/sections' },
    { icon: FileText, label: 'Blog Posts', path: '/admin/posts' },
    { icon: FolderOpen, label: 'Categories', path: '/admin/categories' },
    { icon: Users, label: 'Contacts', path: '/admin/contacts' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM" 
              alt="GARC Logo"
              className="h-8 w-auto"
            />
          </Link>
          <p className="text-sm text-gray-600 mt-2">Admin Panel</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <LogOut size={16} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b px-6 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            GARC Admin
          </h1>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;