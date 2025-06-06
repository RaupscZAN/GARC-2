import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Building2, GraduationCap, Rocket, Users, TrendingUp, Globe, Trophy, CheckCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Partnerships: React.FC = () => {
  useEffect(() => {
    document.title = 'Partnerships - GARC';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">Strategic Partnerships Driving </span>
            <span className="text-primary">India's AI Future</span>
          </h1>
          <p className="text-xl text-app-text-muted mb-8">
            Join leading organizations in building a collaborative ecosystem that nurtures talent, drives innovation, and positions India as a global AI leader
          </p>
        </div>
      </Section>

      {/* Why Partner With GARC */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-lg mb-6">
                <span className="text-app-text">Why Leading Organizations Choose </span>
                <span className="text-primary">GARC</span>
              </h2>
              <p className="text-lg text-app-text-muted mb-8">
                Access world-class AI talent, cutting-edge research, and direct pathways to innovation. 
                GARC offers the only comprehensive ecosystem combining education, research, ventures, and industry integration in India.
              </p>
              <div className="space-y-4">
                {[
                  "First access to breakthrough student projects and research",
                  "Direct pipeline to trained AI professionals and developers", 
                  "Global network connections and international expansion support",
                  "Industry-defining position in AI education and research"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                    <span className="text-app-text-muted">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&h=400"
                alt="Strategic partnerships in AI"
                className="w-full h-80 object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Three Partnership Pillars */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Three Partnership </span>
              <span className="text-primary">Pillars</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Strategic alliances across academia, industry, and entrepreneurship to create India's most comprehensive AI ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={32} />,
                title: "Academic Excellence",
                description: "World-class research collaboration and knowledge exchange",
                features: [
                  "Joint programs with MIT, Stanford, Cambridge",
                  "Faculty exchange and research partnerships", 
                  "International student mobility programs",
                  "Collaborative research publications"
                ],
                color: "primary",
                partners: "50+ Global Universities • Premier Indian Institutes"
              },
              {
                icon: <Building2 size={32} />,
                title: "Industry Integration", 
                description: "Direct access to talent and cutting-edge innovation",
                features: [
                  "Curriculum co-development with tech leaders",
                  "Priority talent pipeline access",
                  "Technology infrastructure partnerships",
                  "Corporate R&D collaboration"
                ],
                color: "secondary", 
                partners: "Fortune 500 Companies • Leading IT Services • Innovation Labs"
              },
              {
                icon: <Rocket size={32} />,
                title: "Startup Ecosystem",
                description: "From student projects to funded ventures",
                features: [
                  "Direct access to vetted student projects",
                  "Structured incubation programs",
                  "Co-investment opportunities",
                  "Mentorship and scaling support"
                ],
                color: "accent",
                partners: "Top Incubators • Y Combinator Network • Corporate VCs"
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full" glowColor={pillar.color as 'primary' | 'secondary' | 'accent'}>
                  <div className={`text-${pillar.color} mb-6`}>{pillar.icon}</div>
                  <h3 className="text-xl font-semibold text-app-text mb-3">{pillar.title}</h3>
                  <p className="text-app-text-muted mb-6">{pillar.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${pillar.color} mt-2`}></div>
                        <span className="text-app-text-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs text-app-text-muted font-medium">{pillar.partners}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Global AI Advisory Board */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Guided by </span>
              <span className="text-secondary">World-Class Expertise</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Strategic direction from leading AI researchers, industry pioneers, and policy experts</p>
            <p className="text-app-text-muted max-w-4xl mx-auto">
              Our Global AI Advisory Board brings together distinguished leaders from academia, industry, and 
              policy who provide strategic guidance, ensure international standards, and connect GARC with 
              premier global networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                title: "Research Excellence",
                description: "Leading AI researchers from top universities worldwide",
                icon: "🔬"
              },
              {
                title: "Industry Leadership", 
                description: "C-suite executives from Fortune 500 tech companies",
                icon: "🏢"
              },
              {
                title: "Policy Expertise",
                description: "Government advisors and policy framework architects",
                icon: "🏛️"
              },
              {
                title: "Global Standards",
                description: "International AI ethics and governance specialists",
                icon: "🌍"
              }
            ].map((area, index) => (
              <Card key={index} className="p-6 text-center" glowColor="secondary">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-3">{area.title}</h3>
                <p className="text-app-text-muted text-sm">{area.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 text-center" glowColor="secondary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Advisory Board Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-secondary font-semibold mb-2">Quarterly Sessions</h4>
                <p className="text-app-text-muted text-sm">Regular strategic guidance and direction setting</p>
              </div>
              <div>
                <h4 className="text-secondary font-semibold mb-2">Annual Summit</h4>
                <p className="text-app-text-muted text-sm">Global AI conference with international thought leaders</p>
              </div>
              <div>
                <h4 className="text-secondary font-semibold mb-2">Policy Influence</h4>
                <p className="text-app-text-muted text-sm">Shaping national AI strategy and governance frameworks</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Partnership Journey */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Your Partnership </span>
              <span className="text-accent">Journey</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              From initial discussion to active collaboration, we provide structured pathways for meaningful partnership development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Partnership Process</h3>
              <div className="space-y-6">
                {[
                  { step: "1", title: "Discovery Call", desc: "Understand your goals and explore synergies" },
                  { step: "2", title: "Strategic Alignment", desc: "Define collaboration framework and objectives" },
                  { step: "3", title: "Pilot Program", desc: "Start with focused initiatives to build momentum" },
                  { step: "4", title: "Scale & Impact", desc: "Expand successful programs for maximum value" }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-app-text font-semibold mb-1">{item.title}</h4>
                      <p className="text-app-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Partnership Benefits</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <TrendingUp size={20} />, title: "Innovation Access", desc: "First look at breakthrough research" },
                  { icon: <Users size={20} />, title: "Talent Pipeline", desc: "Direct access to AI professionals" },
                  { icon: <Globe size={20} />, title: "Global Network", desc: "International expansion support" },
                  { icon: <Trophy size={20} />, title: "Industry Leadership", desc: "Positioning at AI forefront" }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-secondary mb-2">{benefit.icon}</div>
                    <h4 className="text-app-text font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-app-text-muted text-xs">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Ready to Shape </span>
            <span className="text-accent">India's AI Future?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Join pioneering organizations building the next generation of AI innovation. Let's explore how we can create impact together.
          </p>
          <Button
            variant="accent"
            size="lg"
            href="https://calendly.com/globalai-research/collaboration-call"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Calendar size={20} />}
            iconPosition="left"
          >
            Schedule Partnership Discussion
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Partnerships;