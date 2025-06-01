import React from 'react';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

const opportunities = [
  {
    title: 'Shape AI Education',
    items: [
      'Co-create curriculum for next-gen tech education',
      'Build India\'s first specialized AI academies',
      'Connect students with real industry projects'
    ],
    color: 'primary',
    imagePlaceholder: 'AI Education Image'
  },
  {
    title: 'Enable Student Success',
    items: [
      'Create pathways from learning to earning',
      'Mentor the next generation of AI developers',
      'Support student startups and innovations'
    ],
    color: 'secondary',
    imagePlaceholder: 'Student Success Image'
  },
  {
    title: 'Drive Research & Innovation',
    items: [
      'Collaborate on cutting-edge AI research',
      'Access shared infrastructure and resources',
      'Contribute to India\'s AI knowledge base'
    ],
    color: 'accent',
    imagePlaceholder: 'Research Innovation Image'
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
            {/* Image Placeholder */}
            <div className="aspect-video mb-6 rounded-lg bg-gray-100 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400">
              <Image size={32} className="mb-2" />
              <p className="text-sm">{opportunity.imagePlaceholder}</p>
            </div>

            <Card className="p-6 h-full" glowColor={opportunity.color as 'primary' | 'secondary' | 'accent'}>
              <h3 className={`text-xl font-semibold mb-6 text-app-text`}>
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