import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  pattern?: 'grid' | 'dot' | 'none';
  container?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  pattern = 'none',
  container = true,
}) => {
  const baseClasses = 'py-16 md:py-24 relative';
  
  const patternClasses = {
    grid: 'grid-pattern',
    dot: 'dot-pattern',
    none: '',
  };
  
  const containerClass = container ? 'container mx-auto px-4 relative z-10' : '';
  
  return (
    <motion.section
      id={id}
      className={`${baseClasses} ${patternClasses[pattern]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      <div className={containerClass}>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;