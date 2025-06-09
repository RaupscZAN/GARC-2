import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Handshake } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <Section className="relative overflow-hidden bg-slate-900">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white">Ready to Build </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">AI Future Together?</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-gray-300 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Whether you're a student or organization - there's a place for you in our ecosystem
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* For Students Card */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-full h-full bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <GraduationCap size={48} className="text-primary" />
                <h3 className="text-3xl font-bold text-white">For Students</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-auto leading-relaxed">
                Master AI & coding with guaranteed career pathways
              </p>
              
              <Button 
                variant="primary" 
                size="lg"
                href="https://forms.gle/RsvDL2jbhb8GqWp49"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-lg py-4 rounded-xl mt-8"
              >
                Explore Student Programs →
              </Button>
            </div>
          </div>

          {/* For Organizations Card */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 text-left relative overflow-hidden flex flex-col h-full">
            <div className="absolute top-0 right-0 w-full h-full bg-secondary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <Handshake size={48} className="text-secondary" />
                <h3 className="text-3xl font-bold text-white">For Organizations</h3>
              </div>
              
              <p className="text-gray-300 text-lg mb-auto leading-relaxed">
                Join us in shaping AI ecosystem
              </p>
              
              <Button 
                variant="secondary" 
                size="lg"
                to="/partnerships"
                className="w-full text-lg py-4 rounded-xl mt-8"
              >
                Partner With Us →
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default FinalCTA;