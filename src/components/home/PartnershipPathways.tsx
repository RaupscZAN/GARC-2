import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Users, Server, ArrowRight, CheckCircle, TrendingUp, Globe } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';

const pathways = [
  {
    icon: <Building2 size={32} />,
    title: 'Industry Partners',
    description: 'Access top talent, guide curriculum development, and sponsor breakthrough research',
    benefits: [
      'Priority access to skilled graduates',
      'Co-create industry-relevant curriculum',
      'Sponsor research with commercial potential',
      'Brand association with premier AI initiative'
    ],
    revenue: 'Up to 30% revenue sharing',
    color: 'primary'
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Academic Partners',
    description: 'Joint programs, faculty exchange, and collaborative research opportunities',
    benefits: [
      'Joint degree programs with global recognition',
      'Faculty exchange and sabbatical programs',
      'Shared research infrastructure access',
      'International student mobility initiatives'
    ],
    revenue: 'Research grant opportunities',
    color: 'secondary'
  },
  {
    icon: <Users size={32} />,
    title: 'Investment Partners',
    description: 'Support student ventures and guide the next generation of entrepreneurs',
    benefits: [
      'First access to vetted student startups',
      'Mentorship and advisory opportunities',
      'Co-investment in promising ventures',
      'Portfolio company development support'
    ],
    revenue: 'Equity participation',
    color: 'accent'
  },
  {
    icon: <Server size={32} />,
    title: 'Technology Partners',
    description: 'Provide infrastructure, tools, and platforms for world-class AI research',
    benefits: [
      'Infrastructure and cloud services partnership',
      'Technology platform integration',
      'Joint product development opportunities',
      'Access to cutting-edge research data'
    ],
    revenue: 'Technology licensing',
    color: 'primary'
  }
];

const stats = [
  { value: '₹100Cr+', label: 'Total Ecosystem Value', icon: <TrendingUp size={20} /> },
  { value: '50+', label: 'Global University Partners', icon: <Globe size={20} /> },
  { value: '1000+', label: 'Alumni Target (3 Years)', icon: <Users size={20} /> },
  { value: '25+', label: 'Research Projects (Year 1)', icon: <Building2 size={20} /> },
];

const PartnershipPathways: React.FC = () => {
  return (
    <Section className="bg-surface">
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
              <CheckCircle size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Partnership Opportunities</span>
            </div>
            
            <h2 className="text-display text-balance mb-6">
              <span className="text-text">Multiple Ways to Partner </span>
              <span className="text-gradient">with GARC</span>
            </h2>
            
            <p className="text-body-lg text-text-muted max-w-3xl mx-auto text-pretty">
              Join India's premier AI research initiative and be part of building the future. 
              Choose the partnership model that aligns with your organization's goals and capabilities.
            </p>
          </motion.div>
        </div>

        {/* Partnership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {pathways.map((pathway, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                className="h-full group" 
                glowColor={pathway.color as 'primary' | 'secondary' | 'accent'}
                padding="lg"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-3 rounded-2xl bg-${pathway.color}/10 text-${pathway.color} group-hover:scale-110 transition-transform duration-300`}>
                    {pathway.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading text-text mb-2">{pathway.title}</h3>
                    <p className="text-text-muted">{pathway.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {pathway.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={16} className={`text-${pathway.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-text-muted">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className={`bg-${pathway.color}/5 rounded-xl p-4 mb-6`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text">Revenue Model</span>
                    <span className={`text-sm font-semibold text-${pathway.color}`}>{pathway.revenue}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  href="https://calendly.com/globalai-research/collaboration-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                  className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary"
                >
                  Explore Partnership
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-large p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-heading text-text mb-4">Partnership Impact & Scale</h3>
            <p className="text-text-muted max-w-2xl mx-auto">
              Join a growing ecosystem that's positioned to become India's leading AI research and education hub
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">{stat.icon}</div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-text mb-2">{stat.value}</div>
                <div className="text-sm text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-heading text-text mb-6">Ready to Shape India's AI Future?</h3>
          <p className="text-body-lg text-text-muted mb-8 max-w-2xl mx-auto">
            Schedule a partnership discussion to explore how your organization can be part of this transformational initiative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/globalai-research/collaboration-call"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="hover:shadow-glow-primary"
            >
              Schedule Partnership Call
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              to="/partnerships"
            >
              Learn More About Partnerships
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default PartnershipPathways;