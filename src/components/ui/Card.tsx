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
    primary: 'before:bg-primary/10',
    secondary: 'before:bg-secondary/10',
    accent: 'before:bg-accent/10',
    none: '',
  };

  const baseClasses = 'relative overflow-hidden rounded-xl border border-white/10 bg-slate-800/80 backdrop-blur-sm shadow-sm';
  const hoverClasses = hover ? 'hover:border-primary/30 hover:shadow-lg transition-all duration-300' : '';
  
  return (
    <motion.div
      className={`${baseClasses} ${hoverClasses} ${className} ${glowColor !== 'none' ? 'before:absolute before:inset-0 before:z-0 before:opacity-20 before:blur-xl' : ''} ${glowColor !== 'none' ? glowClasses[glowColor] : ''}`}
      whileHover={hover ? { y: -5, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.2)' } : {}}
      transition={{ duration: 0.3 }}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default Card;
