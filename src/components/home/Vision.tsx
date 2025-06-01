import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Brain, ShoppingBag, Building2 } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pillars = [
  {
    icon: <GraduationCap size={24} />,
    title: 'World-Class Education',
    description: 'VCA + AiAta academies providing comprehensive AI and coding education',
    color: 'primary'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Venture Creation',
    description: 'Startup studio transforming student projects into funded companies',
    color: 'secondary'
  },
  {
    icon: <Brain size={24} />,
    title: 'Research Infrastructure',
    description: 'State-of-the-art data center consortium for AI research and development',
    color: 'accent'
  },
  {
    icon: <ShoppingBag size={24} />,
    title: 'Monetization Platform',
    description: 'Agentic marketplace for deploying and monetizing AI solutions',
    color: 'primary'
  },
  {
    icon: <Building2 size={24} />,
    title: 'Industry Integration',
    description: 'Direct partnerships with leading tech companies and institutions',
    color: 'secondary'
  }
];

const Vision: React.FC = () => {
  return (
    <Section pattern="grid\" className="bg-gradient-to-r from-primary-50 to-surface">
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
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-${pillar.color}`}>
                {pillar.icon}
              </div>
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
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-${pillar.color}`}>
                {pillar.icon}
              </div>
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