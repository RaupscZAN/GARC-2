import React from 'react';
import { motion } from 'framer-motion';
import { Handshake as HandShake, Building2, GraduationCap, Rocket } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const partnerCategories = [
  {
    icon: <GraduationCap size={24} />,
    title: 'Academic Partners',
    partners: ['MIT', 'Stanford', 'IIT Bombay', 'IIT Delhi', 'IISc Bangalore'],
    color: 'primary'
  },
  {
    icon: <Building2 size={24} />,
    title: 'Corporate Partners',
    partners: ['TCS', 'Infosys', 'Google', 'Microsoft', 'IBM'],
    color: 'secondary'
  },
  {
    icon: <Rocket size={24} />,
    title: 'Startup Ecosystem',
    partners: ['T-Hub', 'Y Combinator', '500 Startups', 'Venture Catalysts'],
    color: 'accent'
  }
];

const PartnershipSection: React.FC = () => {
  return (
    <Section id="partnerships" className="bg-surface/30" pattern="dot">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HandShake size={24} />
          <h3 className="text-lg font-medium text-primary">Global Partnerships</h3>
        </div>
        
        <h2 className="heading-lg mb-4">
          <span className="text-app-text">Building a Collaborative </span>
          <span className="text-primary">AI Ecosystem</span>
        </h2>
        
        <p className="text-app-text-muted max-w-2xl mx-auto">
          GARC's success is built on strong partnerships across academia, industry, and government. 
          Together, we're creating a robust ecosystem that drives innovation and excellence in AI.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {partnerCategories.map((category, index) => (
          <motion.div
            key={index}
            className={`bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`absolute top-0 right-0 w-full h-full bg-glow-${category.color} opacity-10 blur-3xl`}></div>
            
            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-full bg-${category.color}/20 flex items-center justify-center text-${category.color} mb-4`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-app-text mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.partners.map((partner, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-${category.color}`}></div>
                    <span className="text-app-text-muted">{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-xl p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="heading-md mb-4">Government Advisory & Policy</h3>
            <p className="text-app-text-muted mb-6">
              GARC works closely with government bodies to shape AI policy, provide technical guidance, 
              and develop talent pipelines that strengthen India's position in the global AI landscape.
            </p>
            <Button 
              variant="primary" 
              to="/partners"
            >
              Explore Partnership Opportunities
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-1">Policy Frameworks</h4>
              <p className="text-app-text-muted text-sm">Shaping responsible AI governance</p>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-1">Talent Development</h4>
              <p className="text-app-text-muted text-sm">Building India's AI workforce</p>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-1">Technology Transfer</h4>
              <p className="text-app-text-muted text-sm">From research to implementation</p>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
              <h4 className="text-app-text font-semibold mb-1">Strategic Advisory</h4>
              <p className="text-app-text-muted text-sm">AI roadmaps for public sector</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default PartnershipSection;