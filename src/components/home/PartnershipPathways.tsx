import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Server, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pathways = [
  {
    icon: <Building2 size={32} />,
    title: 'Industry Partners',
    description: 'Hire talent, guide curriculum, sponsor research',
    color: 'primary'
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Academic Partners',
    description: 'Joint programs, knowledge exchange, resource sharing',
    color: 'secondary'
  },
  {
    icon: <Users size={32} />,
    title: 'Investors & Mentors',
    description: 'Support student ventures, guide entrepreneurs',
    color: 'accent'
  },
  {
    icon: <Server size={32} />,
    title: 'Technology Partners',
    description: 'Provide infrastructure, tools, and platforms',
    color: 'primary'
  }
];

const PartnershipPathways: React.FC = () => {
  return (
    <Section className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="heading-lg mb-8">
            <span className="text-app-text">Multiple Ways to Partner </span>
            <span className="text-accent">with GARC</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-6 max-w-lg">
            {pathways.map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 aspect-square flex flex-col justify-center text-center" glowColor={pathway.color as 'primary' | 'secondary' | 'accent'}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 mx-auto text-${pathway.color}`}>
                    {pathway.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-app-text mb-3">{pathway.title}</h3>
                  <p className="text-app-text-muted text-base leading-relaxed">{pathway.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-[4/5] bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-gray-400 text-lg">Image</span>
              </div>
              <p className="text-app-text-muted text-xl font-medium">Partnership Image</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PartnershipPathways;