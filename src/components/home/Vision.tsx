import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Rocket, Server, ShoppingBag, Building2, ArrowRight, Sparkles } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pillars = [
  {
    icon: <GraduationCap size={28} />,
    title: 'World-Class Education',
    description: 'VCA + AiAta academies providing comprehensive AI and coding education with guaranteed career pathways',
    color: 'primary',
    features: ['Industry-connected curriculum', 'Guaranteed job placement', 'Global certification']
  },
  {
    icon: <Rocket size={28} />,
    title: 'Venture Creation',
    description: 'Startup studio transforming student projects into funded companies through our partner network',
    color: 'secondary',
    features: ['Incubator partnerships', 'Funding connections', 'Mentorship programs']
  },
  {
    icon: <Server size={28} />,
    title: 'Research Infrastructure',
    description: 'State-of-the-art data center consortium for AI research and development with global access',
    color: 'accent',
    features: ['100K+ GPU hours/month', 'Quantum-ready architecture', '100% green energy']
  },
  {
    icon: <ShoppingBag size={28} />,
    title: 'Monetization Platform',
    description: 'Agentic marketplace for deploying and monetizing AI solutions with 70% developer revenue share',
    color: 'primary',
    features: ['70% revenue share', 'Enterprise clients', 'Global marketplace']
  },
  {
    icon: <Building2 size={28} />,
    title: 'Industry Integration',
    description: 'Direct partnerships with leading tech companies and academic institutions worldwide',
    color: 'secondary',
    features: ['Fortune 500 partners', 'Global universities', 'Government backing']
  }
];

const Vision: React.FC = () => {
  return (
    <Section className="bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Four Pillars Ecosystem</span>
            </div>
            
            <h2 className="text-display text-balance mb-6">
              <span className="text-text">What We're Building </span>
              <span className="text-gradient">Together</span>
            </h2>
            
            <p className="text-body-lg text-text-muted max-w-3xl mx-auto text-pretty">
              Our comprehensive ecosystem combines education, research, and innovation to create 
              India's premier AI development platform with global recognition and impact.
            </p>
          </motion.div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* First row: 3 cards */}
          {pillars.slice(0, 3).map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full group" 
                glowColor={pillar.color as 'primary' | 'secondary' | 'accent'}
                padding="lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-${pillar.color}/10 text-${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-subheading text-text mb-3">{pillar.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color}`}></div>
                      <span className="text-xs text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pillars.slice(3).map((pillar, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
            >
              <Card 
                className="h-full group" 
                glowColor={pillar.color as 'primary' | 'secondary'}
                padding="lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-${pillar.color}/10 text-${pillar.color} group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-subheading text-text mb-3">{pillar.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {pillar.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${pillar.color}`}></div>
                      <span className="text-xs text-text-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-surface to-surface-100 rounded-3xl p-8 lg:p-12">
            <h3 className="text-heading text-text mb-6">Ready to Explore Our Ecosystem?</h3>
            <p className="text-body-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Discover how GARC's comprehensive approach creates unprecedented opportunities 
              for students, researchers, and industry partners.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                to="/academies"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="hover:shadow-glow-primary"
              >
                See Our Programs
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                to="/partnerships"
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Vision;