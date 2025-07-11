import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Brain, Cpu, Network } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-mesh">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-accent/10 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-radial from-secondary/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Trust indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm border border-primary/20 rounded-full mb-6">
                <Sparkles size={16} className="text-primary" />
                <span className="text-sm font-medium text-text">India's Premier AI Research Initiative</span>
              </div>

              {/* Main headline */}
              <h1 className="text-hero text-balance mb-6">
                <span className="text-text">Pioneering India's </span>
                <span className="text-gradient">AI Future</span>
                <br />
                <span className="text-text">Through </span>
                <span className="text-gradient-accent">Global Excellence</span>
              </h1>

              {/* Subheadline */}
              <p className="text-body-lg text-text-muted max-w-2xl text-pretty mb-8">
                Join GARC in building a comprehensive ecosystem of AI education, research, 
                and innovation partnerships that positions India as the global AI epicenter.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://calendly.com/globalai-research/collaboration-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowRight size={20} />}
                  iconPosition="right"
                  className="hover:shadow-glow-primary"
                >
                  Schedule Partnership Discussion
                </Button>
                
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={scrollToNextSection}
                  icon={<Play size={20} />}
                  iconPosition="left"
                >
                  Explore Research Opportunities
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-soft"></div>
                  <span className="text-sm text-text-muted">Government Backed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft"></div>
                  <span className="text-sm text-text-muted">₹100Cr+ Vision</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft"></div>
                  <span className="text-sm text-text-muted">Global Partnerships</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="relative"
            >
              {/* Main 3D Device */}
              <div className="relative perspective-1000">
                <div className="relative bg-white rounded-3xl shadow-large p-8 hover-3d">
                  {/* Screen content */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 relative overflow-hidden">
                    {/* AI Brain visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <Brain size={80} className="text-primary/60" />
                        <div className="absolute inset-0 animate-pulse">
                          <Network size={80} className="text-secondary/40" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-soft">
                      <Cpu size={24} className="text-primary" />
                    </div>
                    
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-soft">
                      <div className="text-xs font-medium text-text">AI Research</div>
                      <div className="text-xs text-text-muted">Global Network</div>
                    </div>
                    
                    {/* Data visualization */}
                    <div className="absolute bottom-4 left-4 space-y-1">
                      <div className="w-16 h-1 bg-primary/60 rounded-full"></div>
                      <div className="w-12 h-1 bg-secondary/60 rounded-full"></div>
                      <div className="w-20 h-1 bg-accent/60 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Device details */}
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-text">GARC Platform</div>
                      <div className="text-xs text-text-muted">AI Research Ecosystem</div>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-medium p-4 border border-border"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Sparkles size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-text">MIT Partnership</div>
                      <div className="text-xs text-text-muted">Active</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-medium p-4 border border-border"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                      <Brain size={16} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-text">Research Active</div>
                      <div className="text-xs text-text-muted">25+ Projects</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* University Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 pt-12 border-t border-border"
        >
          <div className="text-center mb-8">
            <p className="text-sm text-text-muted">Trusted by leading academic institutions worldwide</p>
          </div>
          
          <div className="flex items-center justify-center gap-12 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for university logos */}
            <div className="text-text-muted font-medium">MIT</div>
            <div className="text-text-muted font-medium">Stanford</div>
            <div className="text-text-muted font-medium">Cambridge</div>
            <div className="text-text-muted font-medium">IIT</div>
            <div className="text-text-muted font-medium">IISC</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;