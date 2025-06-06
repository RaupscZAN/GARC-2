import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Lock, Cpu, Lightbulb } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const researchAreas = [
  {
    icon: <Cpu size={24} />,
    title: 'Advanced AI Architectures',
    description: 'Developing next-generation AI models optimized for diverse contexts and languages.'
  },
  {
    icon: <Lock size={24} />,
    title: 'AI Safety & Alignment',
    description: 'Creating robust frameworks for building safe and ethically aligned AI systems.'
  },
  {
    icon: <FlaskConical size={24} />,
    title: 'Domain-Specific AI',
    description: 'Specialized AI solutions for healthcare, agriculture, education, and governance.'
  },
  {
    icon: <Lightbulb size={24} />,
    title: 'Emerging Technologies',
    description: 'Exploring quantum AI, neuromorphic computing, and novel hardware architectures.'
  }
];

const ResearchHighlights: React.FC = () => {
  return (
    <Section id="research\" pattern="grid">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">Cutting-Edge </span>
          <span className="text-secondary">Research</span>
        </h2>
        <p className="text-app-text-muted max-w-2xl mx-auto">
          Our research initiatives focus on advancing the frontiers of AI through innovative approaches, 
          collaborative partnerships, and state-of-the-art infrastructure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-16">
        {researchAreas.map((area, index) => (
          <motion.div 
            key={index} 
            className="flex gap-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
              {area.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-app-text mb-2">{area.title}</h3>
              <p className="text-app-text-muted">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-glow-secondary opacity-20 blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <h3 className="heading-md mb-4">Data Center Consortium</h3>
            <p className="text-app-text-muted mb-6">
              Our state-of-the-art infrastructure provides the computational power needed to train 
              and deploy large-scale AI models. The GARC Data Center Consortium brings together 
              industry partners to create a shared resource for global AI research.
            </p>
            <Button 
              variant="secondary" 
              to="/research" 
            >
              Learn About Our Infrastructure
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-2">Compute</h4>
              <div className="text-3xl font-bold text-secondary mb-1">100K+</div>
              <p className="text-app-text-muted text-sm">GPU Hours/Month</p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-2">Storage</h4>
              <div className="text-3xl font-bold text-secondary mb-1">5 PB</div>
              <p className="text-app-text-muted text-sm">Secure Data Storage</p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-2">Network</h4>
              <div className="text-3xl font-bold text-secondary mb-1">400 Gbps</div>
              <p className="text-app-text-muted text-sm">Bandwidth</p>
            </div>
            
            <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-2">Partners</h4>
              <div className="text-3xl font-bold text-secondary mb-1">25+</div>
              <p className="text-app-text-muted text-sm">Research Partners</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default ResearchHighlights;