import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Image as ImageIcon } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const benefits = [
  {
    title: 'Complete Ecosystem Approach',
    description: 'Only platform covering education, research, ventures, and industry integration'
  },
  {
    title: 'Proven Learning-to-Earning Pipeline',
    description: 'Students generate income during training, guaranteed career outcomes'
  },
  {
    title: 'Industry-First Infrastructure',
    description: 'Data center consortium, agentic marketplace, venture studio'
  },
  {
    title: 'Strategic Government Backing',
    description: 'Official support for national AI capability building'
  },
  {
    title: 'International Academic Standards',
    description: 'Global partnerships bringing world-class curriculum to India'
  },
  {
    title: 'Innovation Access',
    description: 'First look at breakthrough student projects and research developments'
  }
];

const Credibility: React.FC = () => {
  return (
    <Section>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Image */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-full rounded-xl overflow-hidden">
              <img 
                src="https://img.freepik.com/free-photo/ai-robot-analyzing-data-with-futuristic-interface_23-2151977874.jpg?uid=R202748237&ga=GA1.1.360999499.1748867525&semt=ais_hybrid&w=740"
                alt="AI Robot analyzing data"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-left mb-8">
              <h2 className="heading-lg mb-4">
                <span className="text-app-text">Why Partner with </span>
                <span className="text-primary">GARC</span>
              </h2>
            </div>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-app-text mb-1">{benefit.title}</h3>
                    <p className="text-app-text-muted">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              variant="primary"
              size="lg"
              href="https://calendly.com/globalai-research/collaboration-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Partnership Call
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default Credibility;