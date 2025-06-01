import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Bot, Rocket, ShoppingBag, FlaskConical, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pillars = [
  {
    icon: <GraduationCap size={24} />,
    title: 'VCA - Vibe Coding Academy',
    description: 'Next-generation coding education with direct industry integration',
    color: 'primary'
  },
  {
    icon: <Bot size={24} />,
    title: 'AiAta - AI Agents Academy',
    description: 'Specialized AI agent development with built-in monetization pathways',
    color: 'secondary'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Venture Studio',
    description: 'Transform student projects into funded startups',
    color: 'accent'
  },
  {
    icon: <ShoppingBag size={24} />,
    title: 'Agentic Marketplace',
    description: 'Platform for AI agents monetization and distribution',
    color: 'primary'
  },
  {
    icon: <FlaskConical size={24} />,
    title: 'Research Consortium',
    description: 'Shared infrastructure and collaborative research initiatives',
    color: 'secondary'
  }
];

const Vision: React.FC = () => {
  return (
    <Section pattern="grid\" className="bg-gradient-to-r from-primary-50 to-surface">
      <div className="text-center mb-16">
        {/* Mix of gradient and solid text as requested */}
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">What We're Building </span>
          <span className="bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">Together</span>
        </h2>
        <p className="text-app-text-muted max-w-2xl mx-auto">
          Our comprehensive ecosystem combines education, research, and innovation to create India's AI future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full" glowColor={pillar.color as 'primary' | 'secondary' | 'accent'}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                pillar.color === 'primary' ? 'bg-teal-100 text-teal-600' :
                pillar.color === 'secondary' ? 'bg-cyan-100 text-cyan-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                {pillar.icon}
              </div>
              <h3 className="text-xl font-semibold text-app-text mb-3">{pillar.title}</h3>
              <p className="text-app-text-muted">{pillar.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="outline"
          to="/ecosystem"
          icon={<ArrowRight size={18} />}
          iconPosition="right"
        >
          Learn More About Our Ecosystem
        </Button>
      </div>
    </Section>
  );
};

export default Vision;