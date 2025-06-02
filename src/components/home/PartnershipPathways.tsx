import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Server, Image } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6" glowColor={pathway.color as 'primary' | 'secondary' | 'accent'}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`text-${pathway.color}`}>{pathway.icon}</div>
                    <h3 className="text-xl font-semibold text-app-text">{pathway.title}</h3>
                  </div>
                  <p className="text-app-text-muted">{pathway.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative aspect-[3/4] bg-gray-100 rounded-lg border-2 border-dashed border-gray-200 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image size={32} className="text-gray-400 mb-2" />
          <p className="text-sm text-gray-400">Partnership Image</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default PartnershipPathways;