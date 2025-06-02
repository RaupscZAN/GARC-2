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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg">
            <span className="text-app-text">Multiple Ways to Partner </span>
            <span className="text-accent">with GARC</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Partnership Cards - Takes 2/3 of the width */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pathways.map((pathway, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex flex-col text-center" glowColor={pathway.color as 'primary' | 'secondary' | 'accent'}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto text-${pathway.color}`}>
                      {pathway.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-app-text mb-3">{pathway.title}</h3>
                    <p className="text-app-text-muted text-base leading-relaxed">{pathway.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image Section - Takes 1/3 of the width */}
          <div className="lg:col-span-1">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden">
              <img 
                src="https://static.wixstatic.com/media/a9a928_e7447ce7e77440baa5f586dd30a22da0~mv2.jpg/v1/fill/w_1610,h_980,fp_0.51_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-robot-hand-close-human-hand.jpg"
                alt="AI and human hands reaching towards each other"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PartnershipPathways;