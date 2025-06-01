import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const GetInTouchCTA: React.FC = () => {
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
          <span className="text-app-text">Let's Build the </span>
          <span className="text-accent">Future of AI Together</span>
        </motion.h2>
        
        <motion.p
          className="text-xl text-app-text-muted mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Whether you're a student, founder, partner, or policymaker — schedule a call to explore how GARC can work with you.
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
            href="https://calendly.com/your-garc-link"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Calendar size={20} />}
            iconPosition="left"
          >
            Schedule a Call
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default GetInTouchCTA;