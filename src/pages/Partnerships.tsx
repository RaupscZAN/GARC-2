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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Pill header */}
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                Strategic Partnerships
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Building India's </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                AI Ecosystem Together
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join leading organizations in creating a collaborative ecosystem that nurtures talent, drives innovation, and positions India as a global AI leader
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                variant="primary"
                size="lg"
                href="https://calendly.com/globalai-research/collaboration-call"
                target="_blank"
                rel="noopener noreferrer"
                icon={<Calendar size={20} />}
                iconPosition="left"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Schedule Partnership Call
              </Button>

              <Button 
                variant="outline"
                size="lg"
                href="#partnership-pillars"
                className="min-w-[200px] border-white/20 hover:bg-white/5 text-white"
              >
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
      <Section id="partnership-pillars" className="bg-surface/30" pattern="grid">
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