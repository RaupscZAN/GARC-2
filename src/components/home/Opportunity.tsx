import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, FlaskConical } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const opportunities = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Shape AI Education',
    items: [
      'Co-create curriculum for next-gen tech education',
      'Build India\'s first specialized AI academies',
      'Connect students with real industry projects'
    ],
    color: 'primary'
  },
  {
    icon: <Users size={24} />,
    title: 'Enable Student Success',
    items: [
      'Create pathways from learning to earning',
      'Mentor the next generation of AI developers',
      'Support student startups and innovations'
    ],
    color: 'secondary'
  },
  {
    icon: <FlaskConical size={24} />,
    title: 'Drive Research & Innovation',
    items: [
      'Collaborate on cutting-edge AI research',
      'Access shared infrastructure and resources',
      'Contribute to India\'s AI knowledge base'
    ],
    color: 'accent'
  }
];

const Opportunity: React.FC = () => {
  return (
    <Section className="bg-surface/30">
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">Be Part of Something </span>
          <span className="text-primary">Transformational</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-8 h-full" glowColor={opportunity.color as 'primary' | 'secondary' | 'accent'}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-${opportunity.color}`}>
                {opportunity.icon}
              </div>
              
              <h3 className={`text-xl font-semibold mb-6 text-${opportunity.color}-300`}>
                {opportunity.title}
              </h3>
              
              <ul className="space-y-4">
                {opportunity.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full bg-${opportunity.color} mt-2`}></div>
                    <span className="text-app-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Opportunity;