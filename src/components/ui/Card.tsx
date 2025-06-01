import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'none';
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glowColor = 'none',
  hover = true,
}) => {
  const glowClasses = {
    primary: 'hover:shadow-teal-200/50 border-teal-200',
    secondary: 'hover:shadow-cyan-200/50 border-cyan-200', 
    accent: 'hover:shadow-yellow-200/50 border-yellow-200',
    none: 'hover:shadow-gray-200/50 border-slate-200',
  };

  const baseClasses = 'relative overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-slate-800/80 backdrop-blur-sm shadow-sm';
  const hoverClasses = hover ? 'hover:border-primary/50 dark:hover:border-primary/30 hover:shadow-lg transition-all duration-300' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className} border ${glowColor !== 'none' ? glowClasses[glowColor] : glowClasses.none}`}
      whileHover={hover ? { 
        y: -5, 
        boxShadow: glowColor === 'primary' ? '0 20px 40px -10px rgba(20, 184, 166, 0.2)' :
                   glowColor === 'secondary' ? '0 20px 40px -10px rgba(6, 182, 212, 0.2)' :
                   glowColor === 'accent' ? '0 20px 40px -10px rgba(251, 176, 64, 0.2)' :
                   '0 20px 40px -10px rgba(0, 0, 0, 0.1)'
      } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;