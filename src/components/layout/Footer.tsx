import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Calendar, Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <img 
                  src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM" 
                  alt="GARC Logo"
                  className="h-12 w-auto brightness-0 invert transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="text-xl font-bold">GARC</div>
                <div className="text-sm text-gray-400 -mt-1">Global AI Research</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering India's AI future through world-class education, research, and innovation partnerships.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300" 
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/academies" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Four Pillars
                </Link>
              </li>
              <li>
                <Link to="/research-innovation" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Research & Innovation
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Academic Partnerships
                </Link>
              </li>
              <li>
                <Link to="/venture-ecosystem" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://forms.gle/RsvDL2jbhb8GqWp49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  VCA Academy
                </a>
              </li>
              <li>
                <a 
                  href="https://forms.gle/RsvDL2jbhb8GqWp49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  AiAta Academy
                </a>
              </li>
              <li>
                <a 
                  href="https://forms.gle/fyYQnH2nZDZmgK1bA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Research Program
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  About GARC
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@garc.tech" className="text-gray-400 hover:text-white transition-colors duration-300">
                  info@garc.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+919884402971" className="text-gray-400 hover:text-white transition-colors duration-300">
                  +91 98844 02971
                </a>
              </li>
            </ul>
            
            <Button 
              variant="primary"
              href="https://calendly.com/globalai-research/collaboration-call"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Calendar size={18} />}
              iconPosition="left"
              className="w-full"
            >
              Schedule Call
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GARC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;