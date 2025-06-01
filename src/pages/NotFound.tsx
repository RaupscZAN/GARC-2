import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = 'Page Not Found - GARC';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-xl mx-auto px-4">
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-app-text mb-6">Page Not Found</h2>
        <p className="text-app-text-muted mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button 
            to="/" 
            variant="primary"
            icon={<Home size={18} />}
          >
            Go Home
          </Button>
          <Button 
            to="#" 
            variant="outline"
            icon={<ArrowLeft size={18} />}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;