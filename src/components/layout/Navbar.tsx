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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-screen-xl rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-white/20 py-3 px-8">
      <nav className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM" 
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
              className="nav-link text-gray-700 hover:text-primary"
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <a
          href="https://calendly.com/globalai-research/collaboration-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex btn-accent"
        >
          Join Us
        </a>

        <button
          className="lg:hidden text-gray-700 focus:outline-none"
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
              className="lg:hidden bg-white/95 backdrop-blur-md border border-white/20 rounded-xl shadow-lg absolute top-full left-4 right-4 mt-2"
            >
              <div className="px-4 py-4 flex flex-col gap-2">
                {mainMenuItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="py-3 text-gray-700 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <a
                  href="https://calendly.com/globalai-research/collaboration-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent mt-4"
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