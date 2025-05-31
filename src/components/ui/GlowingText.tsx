import React from 'react';
import { motion } from 'framer-motion';

interface GlowingTextProps {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  gradient?: boolean;
}

const GlowingText: React.FC<GlowingTextProps> = ({
  children,
  color = 'primary',
  className = '',
  element = 'span',
  gradient = false,
}) => {
  const colorClasses = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    white: 'text-white',
  };

  const gradientClasses = {
    primary: 'bg-gradient-to-r from-primary to-primary-300 bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-secondary to-secondary-300 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-accent to-accent-300 bg-clip-text text-transparent',
    white: 'bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent',
  };

  const baseClasses = 'relative';
  const glowClasses = 'glow-text';
  const textColor = gradient ? gradientClasses[color] : colorClasses[color];

  const ElementTag = element as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      className={`inline-block ${baseClasses}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <ElementTag className={`${textColor} ${glowClasses} ${className}`}>
        {children}
      </ElementTag>
    </motion.div>
  );
};

export default GlowingText;