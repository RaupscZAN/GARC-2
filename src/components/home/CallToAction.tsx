import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Section from '../ui/Section';

const CallToAction: React.FC = () => {
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
          <span className="text-app-text">Be Part of the </span>
          <span className="text-accent">AI Revolution</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-app-text-muted mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join GARC and contribute to building the future as a global AI powerhouse. 
          Whether you're a student, researcher, developer, or organization, there's a place 
          for you in our ecosystem.
        </motion.p>
        
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            variant="accent" 
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            Join GARC
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            href="https://calendly.com/globalai-research/collaboration-call"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Ecosystem
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default CallToAction;