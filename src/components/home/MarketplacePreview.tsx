import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Bot, Briefcase, Pencil, BarChart, LayoutGrid } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';

const agentCategories = [
  {
    icon: <Briefcase size={24} />,
    title: 'Business Process',
    description: 'Automate and optimize business workflows',
    color: 'primary'
  },
  {
    icon: <Bot size={24} />,
    title: 'Customer Service',
    description: 'Intelligent support and engagement',
    color: 'secondary'
  },
  {
    icon: <BarChart size={24} />,
    title: 'Analytics',
    description: 'Data insights and intelligent reporting',
    color: 'accent'
  },
  {
    icon: <Pencil size={24} />,
    title: 'Content Creation',
    description: 'Automated and enhanced content generation',
    color: 'primary'
  }
];

const MarketplacePreview: React.FC = () => {
  return (
    <Section id="marketplace" className="bg-surface/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <ShoppingBag size={24} className="text-accent" />
            <h3 className="text-lg font-medium text-accent">Agent Marketplace</h3>
          </div>
          
          <h2 className="heading-lg mb-6">
            <span className="text-app-text">The Future of AI Agents </span>
            <span className="text-accent">Marketplace</span>
          </h2>
          
          <p className="text-app-text-muted mb-8">
            GARC's Agentic Marketplace connects businesses with certified AI agents for every need. 
            Our marketplace provides developers with a platform to showcase, monetize, and scale their 
            AI solutions while ensuring enterprises get access to vetted, high-quality agents.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                70%
              </div>
              <div>
                <h4 className="text-app-text font-medium">Developer Revenue Share</h4>
                <p className="text-app-text-muted text-sm">Developers keep 70% of revenue from their agents</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                ₹50K+
              </div>
              <div>
                <h4 className="text-app-text font-medium">Monthly Guarantee Program</h4>
                <p className="text-app-text-muted text-sm">Guaranteed income for top-performing agents</p>
              </div>
            </div>
          </div>
          
          <Button 
            variant="accent" 
            to="/marketplace" 
            icon={<LayoutGrid size={18} />}
            iconPosition="right"
          >
            Explore Marketplace
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agentCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <Card className="p-6" glowColor={category.color as 'primary' | 'secondary' | 'accent'}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-app-text mb-2">{category.title}</h3>
                  <p className="text-app-text-muted text-sm">{category.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-6 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-app-text font-semibold">Agent Certification</h3>
              <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Verified</span>
            </div>
            <p className="text-app-text-muted text-sm mb-4">
              All marketplace agents undergo rigorous testing and certification for quality, safety, and performance.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                S1
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">
                P2
              </div>
              <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-xs">
                E3
              </div>
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs">
                C4
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default MarketplacePreview;