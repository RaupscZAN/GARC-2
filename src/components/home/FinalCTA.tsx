import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Download, GraduationCap, Handshake } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <Section className="relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20"></div>
        <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-glow-primary rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-glow-secondary rounded-full blur-[120px] opacity-15"></div>
      </motion.div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="heading-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-app-text">Ready to Build India's </span>
          <span className="text-accent">AI Future Together?</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-app-text-muted mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Whether you're a student or organization - there's a place for you in our ecosystem
        </motion.p>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* For Students Card */}
          <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-glow-primary opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-app-text mb-4 flex items-center gap-3">
                <GraduationCap size={24} className="text-primary" />
                For Students
              </h3>
              <p className="text-app-text-muted mb-6">
                Master AI & coding with guaranteed career pathways
              </p>
              <Button 
                variant="primary" 
                size="lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Explore Student Programs →
              </Button>
            </div>
          </div>

          {/* For Organizations Card */}
          <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-glow-secondary opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-app-text mb-4 flex items-center gap-3">
                <Handshake size={24} className="text-secondary" />
                For Organizations
              </h3>
              <p className="text-app-text-muted mb-6">
                Join us in shaping AI ecosystem
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                href="https://calendly.com/globalai-research/collaboration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Partner With Us →
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Additional CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="accent" 
            size="lg"
            href="https://calendly.com/globalai-research/collaboration-call"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Calendar size={20} />}
            iconPosition="left"
          >
            Schedule a Discussion
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Download size={20} />}
            iconPosition="left"
          >
            Download Vision Document
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default FinalCTA;