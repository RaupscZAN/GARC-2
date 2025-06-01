import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const mainMenuItems = [
  { name: 'Academies', path: '/academies' },
  { name: 'Research & Innovation', path: '/research-innovation' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Venture Ecosystem', path: '/venture-ecosystem' },
  { name: 'About', path: '/about' }
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://ik.imagekit.io/gm4wvukvl/logo%20GARC" 
            alt="GARC Logo"
            width="100"
            height="100"
            className="object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {mainMenuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="nav-link text-app-text-muted hover:text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <a
          href="https://calendly.com/globalai-research/collaboration-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-primary"
        >
          Join Us
        </a>

        <button
          className="lg:hidden text-app-text-muted focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-background/95 backdrop-blur-md border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {mainMenuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="py-3 text-app-text-muted hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <a
                  href="https://calendly.com/globalai-research/collaboration-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-4"
                  onClick={toggleMenu}
                >
                  Join Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;