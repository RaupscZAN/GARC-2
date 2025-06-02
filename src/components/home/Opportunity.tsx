import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users } from 'lucide-react';
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
    imageUrl: 'https://img.freepik.com/premium-photo/computer-programmer-coding-with-ai-digital-technology_875825-33369.jpg'
  },
  {
    title: 'Enable Student Success',
    items: [
      'Create pathways from learning to earning',
      'Mentor the next generation of AI developers',
      'Support student startups and innovations'
    ],
    color: 'secondary',
    imageUrl: 'https://fortune.com/img-assets/wp-content/uploads/2024/02/AI-programming-languages-GettyImages-1518874007-e1709244825422.jpg?w=1440&q=90'
  },
  {
    title: 'Drive Research & Innovation',
    items: [
      'Collaborate on cutting-edge AI research',
      'Access shared infrastructure and resources',
      'Contribute to India\'s AI knowledge base'
    ],
    color: 'accent',
    imageUrl: 'https://media.licdn.com/dms/image/D5612AQEDpiueyXTy_A/article-cover_image-shrink_720_1280/0/1706797621725?e=2147483647&v=beta&t=styrek6xGZ8jikWMPW1F7EY-g1CXJh2f3yBtketWpO0'
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {opportunities.map((opportunity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="aspect-video mb-6 rounded-lg overflow-hidden">
              <img 
                src={opportunity.imageUrl} 
                alt={opportunity.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <Card className="p-6" glowColor={opportunity.color as 'primary' | 'secondary' | 'accent'}>
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