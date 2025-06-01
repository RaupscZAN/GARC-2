import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Server, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pathways = [
  {
    icon: <Building2 size={24} />,
    title: 'Industry Partners',
    description: 'Hire talent, guide curriculum, sponsor research',
    color: 'primary'
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Academic Partners',
    description: 'Joint programs, knowledge exchange, resource sharing',
    color: 'secondary'
  },
  {
    icon: <Users size={24} />,
    title: 'Investors & Mentors',
    description: 'Support student ventures, guide entrepreneurs',
    color: 'accent'
  },
  {
    icon: <Server size={24} />,
    title: 'Technology Partners',
    description: 'Provide infrastructure, tools, and platforms',
    color: 'primary'
  }
];

const PartnershipPathways: React.FC = () => {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">Multiple Ways to Partner </span>
          <span className="text-accent">with GARC</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {pathways.map((pathway, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full" glowColor={pathway.color as 'primary' | 'secondary' | 'accent'}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-${pathway.color}`}>
                {pathway.icon}
              </div>
              <h3 className="text-xl font-semibold text-app-text mb-3">{pathway.title}</h3>
              <p className="text-app-text-muted">{pathway.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="accent"
          size="lg"
          to="/partnerships"
          icon={<ArrowRight size={20} />}
          iconPosition="right"
        >
          Explore Partnership Options
        </Button>
      </div>
    </Section>
  );
};

export default PartnershipPathways;