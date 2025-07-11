import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'hover';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  glowColor?: 'primary' | 'secondary' | 'accent' | 'none';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  hover = true,
  glowColor = 'none',
}) => {
  const baseClasses = 'card';
  
  const variantClasses = {
    default: '',
    glass: 'card-glass',
    gradient: 'card-gradient',
    hover: 'card-hover',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover ? 'card-hover' : '';
  
  const glowClasses = {
    primary: 'hover:shadow-glow-primary',
    secondary: 'hover:shadow-glow-secondary',
    accent: 'hover:shadow-glow-accent',
    none: '',
  };

  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${glowClasses[glowColor]} ${className}`;

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={hover ? { y: -4 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card;