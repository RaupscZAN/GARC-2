import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-slate-100">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-teal-100/30 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-teal-200/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-cyan-200/30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-teal-300/30"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-yellow-200/15 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Pill header */}
          <div className="inline-block px-6 py-2 rounded-full border border-teal-200 bg-teal-50/80 backdrop-blur-sm mb-8">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-medium">
              Global AI Research Council
            </span>
          </div>

          {/* Main heading - Mix of styles as requested */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="text-navy-800">India's</span>{' '}
            <span className="bg-gradient-to-r from-teal-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">AI Future</span>
            <br />
            <span className="text-navy-800">Begins</span>{' '}
            <span className="bg-gradient-to-r from-teal-500 to-yellow-400 bg-clip-text text-transparent">Here</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-app-text-muted mb-12 max-w-2xl mx-auto">
            Join GARC in building a comprehensive ecosystem of AI education, innovation, and technological excellence
          </p>

          {/* CTA button */}
          <Button 
            variant="primary"
            size="lg"
            to="/partnerships"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="min-w-[200px]"
          >
            Explore Partnership Opportunities
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;