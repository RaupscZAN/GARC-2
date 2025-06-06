import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Calendar, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface backdrop-blur-sm border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM" 
                alt="GARC Logo"
                width="100"
                height="100"
                className="object-contain"
              />
            </Link>
            <p className="text-app-text-muted mb-6">
              Pioneering the Future of AI
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-app-text-muted hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-app-text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-app-text-muted hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-app-text font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/academies" className="text-app-text-muted hover:text-primary transition-colors">
                  Academies
                </Link>
              </li>
              <li>
                <Link to="/research-innovation" className="text-app-text-muted hover:text-primary transition-colors">
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-app-text-muted hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-app-text font-semibold mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/venture-ecosystem" className="text-app-text-muted hover:text-primary transition-colors">
                  Venture Ecosystem
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-app-text-muted hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-app-text-muted hover:text-primary transition-colors"
                >
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-app-text font-semibold mb-4">Ready to Partner?</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary shrink-0" />
                <a href="mailto:info@garc.tech" className="text-app-text-muted hover:text-primary transition-colors">
                  info@garc.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-app-text-muted hover:text-primary transition-colors">
                  +91 98844 02971
                </a>
              </li>
            </ul>
            <Button 
              variant="primary"
              href="https://calendly.com/globalai-research/collaboration-call"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Schedule a Call
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-app-text-muted text-sm">
            © {new Date().getFullYear()} GARC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-app-text-muted hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-app-text-muted hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;