import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Section from '../ui/Section';

const programs = [
  {
    id: 'vca',
    icon: <Code size={24} />,
    title: 'Vibe Coding Academy',
    description: 'World-class software development training with a focus on AI and emerging technologies.',
    features: [
      'Industry-focused curriculum',
      'Project-based learning',
      'Guaranteed job placements',
      'Mentorship from tech leaders'
    ],
    color: 'primary',
    link: '/programs#vca'
  },
  {
    id: 'aiata',
    icon: <Bot size={24} />,
    title: 'AI Agents Training Academy',
    description: 'Specialized training for AI agent development, deployment, and monetization.',
    features: [
      'LLM agent engineering',
      'Agent safety & alignment',
      'Integration with marketplaces',
      'Advanced AI system design'
    ],
    color: 'secondary',
    link: '/programs#aiata'
  }
];

const FeaturedPrograms: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="programs" pattern="dot">
      <div className="mb-16 text-center">
        <h2 className="heading-lg mb-4">
          <span className="text-white">World-Class </span>
          <span className="text-primary">AI Education</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Our specialized academies provide comprehensive education in cutting-edge AI and coding technologies, designed to create the next generation of tech leaders.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {programs.map((program) => (
          <motion.div key={program.id} variants={itemVariants}>
            <Card className="p-8 h-full" glowColor={program.color as 'primary' | 'secondary'}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-${program.color}`}>
                {program.icon}
                <div className={`absolute inset-0 bg-glow-${program.color} rounded-lg blur-xl opacity-40`} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
              <p className="text-gray-300 mb-6">{program.description}</p>
              
              <ul className="mb-8 space-y-3">
                {program.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className={`text-${program.color} mt-1`}>
                      <ArrowRight size={16} />
                    </div>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button
                  variant={program.color as 'primary' | 'secondary'}
                  to={program.link}
                  icon={<ArrowRight size={18} />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-12 text-center">
        <Button
          variant="outline"
          to="/programs"
          size="lg"
        >
          Explore Full Ecosystem
        </Button>
      </div>
    </Section>
  );
};

export default FeaturedPrograms;