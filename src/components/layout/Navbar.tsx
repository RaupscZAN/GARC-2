import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const mainMenuItems = [
  { name: 'About GARC', path: '/about' },
  { name: 'Academic Partnerships', path: '/partnerships' },
  { name: 'Research & Innovation', path: '/research-innovation' },
  { name: 'Four Pillars', path: '/academies' },
  { name: 'Ecosystem', path: '/venture-ecosystem' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <nav className={`nav-pill transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-medium' : 'bg-white/80 shadow-soft'
        }`}>
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM" 
                  alt="GARC Logo"
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-text">GARC</div>
                <div className="text-xs text-text-muted -mt-1">Global AI Research</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {mainMenuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-primary bg-primary/10' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://calendly.com/globalai-research/collaboration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent btn-sm hover:shadow-glow-accent"
              >
                Schedule Partnership Call
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-text hover:text-primary transition-colors rounded-lg hover:bg-surface-100"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 border-t border-border mt-4">
                  <div className="flex flex-col gap-2">
                    {mainMenuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                          `nav-link ${isActive ? 'text-primary bg-primary/10' : ''}`
                        }
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    <div className="pt-4 border-t border-border mt-4">
                      <a
                        href="https://calendly.com/globalai-research/collaboration-call"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-accent w-full"
                        onClick={toggleMenu}
                      >
                        Schedule Partnership Call
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;