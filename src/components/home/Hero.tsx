import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-technology-big-data-background-concept-generate-ai-image_15686420.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pill header */}
          <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
            <span className="text-white font-medium">
              Global AI Research Council
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-white">The Future of </span>
            <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
              AI Innovation
            </span>
            <br />
            <span className="text-white">Begins </span>
            <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
              Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join GARC in building a comprehensive ecosystem of AI education, innovation, and technological excellence
          </p>
        </motion.div>
      </div>

      {/* Circular CTA Button */}
      <motion.button
        className="absolute bottom-8 right-8 w-[147px] h-[147px] rounded-full bg-primary hover:bg-primary-600 text-white flex flex-col items-center justify-center cursor-pointer transition-colors duration-300"
        onClick={scrollToNextSection}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <span className="text-lg font-medium mb-2">Learn More</span>
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
};

export default Hero;