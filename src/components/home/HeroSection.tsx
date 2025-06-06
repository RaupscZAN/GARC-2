import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,97,209,0.15),transparent_50%)]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pill header */}
          <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
              Global AI Research Council
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-white">The Future of AI</span>
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
              Begins Here
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            From Code to Superintelligence – Powered by GARC's ecosystem of learning, innovation, and technological excellence.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              variant="primary"
              size="lg"
              to="/join"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              Join the Revolution
            </Button>

            <Button 
              variant="outline"
              size="lg"
              to="/programs"
              className="min-w-[200px] border-white/20 hover:bg-white/5"
            >
              Explore Ecosystem
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;