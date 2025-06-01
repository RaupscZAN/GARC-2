import React from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pillars = [
  {
    title: 'World-Class Education',
    description: 'VCA + AiAta academies providing comprehensive AI and coding education',
    color: 'primary'
  },
  {
    title: 'Venture Creation',
    description: 'Startup studio transforming student projects into funded companies',
    color: 'secondary'
  },
  {
    title: 'Research Infrastructure',
    description: 'State-of-the-art data center consortium for AI research and development',
    color: 'accent'
  },
  {
    title: 'Monetization Platform',
    description: 'Agentic marketplace for deploying and monetizing AI solutions',
    color: 'primary'
  },
  {
    title: 'Industry Integration',
    description: 'Direct partnerships with leading tech companies and institutions',
    color: 'secondary'
  }
];

const Vision: React.FC = () => {
  return (
    <Section pattern="grid" className="bg-gradient-to-r from-primary-50 to-surface">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">What We're Building </span>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-app-text-muted max-w-2xl mx-auto">
          Our comprehensive ecosystem combines education, research, and innovation to create India's AI future.
        </p>
      </div>

      {/* Row 1: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {pillars.slice(0, 3).map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="p-6 h-full" glowColor={pillar.color as 'primary' | 'secondary' | 'accent'}>
              <h3 className="text-xl font-semibold text-app-text mb-3">{pillar.title}</h3>
              <p className="text-app-text-muted">{pillar.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Row 2: 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {pillars.slice(3).map((pillar, index) => (
          <motion.div
            key={index + 3}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index + 3) * 0.2 }}
          >
            <Card className="p-6 h-full" glowColor={pillar.color as 'primary' | 'secondary'}>
              <h3 className="text-xl font-semibold text-app-text mb-3">{pillar.title}</h3>
              <p className="text-app-text-muted">{pillar.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="primary"
            to="/programs"
          >
            See Our Programs
          </Button>
          <Button
            variant="outline"
            to="/partnerships"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Vision;