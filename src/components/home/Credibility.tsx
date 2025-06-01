import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';

const benefits = [
  'Comprehensive AI education ecosystem',
  'Direct industry-academia collaboration',
  'Focus on practical, monetizable skills',
  'Structured pathway from learning to entrepreneurship',
  'International academic partnerships in development',
  'Commitment to building India\'s AI talent pipeline'
];

const Credibility: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">Why Partner with </span>
          <span className="text-primary">GARC</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-start gap-4"
          >
            <CheckCircle size={24} className="text-primary shrink-0 mt-1" />
            <p className="text-app-text-muted">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Credibility;