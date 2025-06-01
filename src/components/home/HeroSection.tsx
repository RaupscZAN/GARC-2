import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400">
        {/* This will be replaced with actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-500">
          <div className="text-center">
            <div className="text-8xl mb-4">🏫</div>
            <p className="text-lg">Campus Aerial View Placeholder</p>
          </div>
        </div>
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            India's{' '}
            <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
              AI Future
            </span>
            <br />
            Begins{' '}
            <span className="bg-gradient-to-r from-secondary-300 to-accent-300 bg-clip-text text-transparent">
              Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join GARC in building a comprehensive ecosystem of AI education, innovation, and technological excellence
          </p>
        </motion.div>
      </div>

      {/* Circular Learn More CTA - Bottom Right */}
      <motion.div
        className="absolute bottom-8 right-8 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.button
          onClick={scrollToNext}
          className="w-[147px] h-[147px] rounded-full bg-primary hover:bg-primary-600 text-white font-medium text-lg shadow-xl flex flex-col items-center justify-center gap-2 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
          <ArrowDown size={20} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;