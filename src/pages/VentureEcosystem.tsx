import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Bot, Target, Brain, Shield, Users, Code, Briefcase, LineChart, Globe, Lightbulb, HandshakeIcon } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const VentureEcosystem: React.FC = () => {
  useEffect(() => {
    document.title = 'Venture Ecosystem - GARC';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop")'
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
                Venture & Monetization
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">From Learning to </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Earning
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your AI innovations into successful ventures through our comprehensive startup ecosystem
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                variant="primary"
                size="lg"
                href="#get-involved"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Start Your Journey
              </Button>

              <Button 
                variant="outline"
                size="lg"
                href="#opportunities"
                className="min-w-[200px] border-white/20 hover:bg-white/5 text-white"
              >
                Explore Opportunities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-app-text-muted">
            GARC's Venture Ecosystem provides students with direct pathways to entrepreneurship and monetization. 
            Whether launching a startup or monetizing AI agents, we provide the infrastructure, mentorship, and 
            market access needed for success.
          </p>
        </div>
      </Section>

      {/* Venture Studio Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">GARC </span>
              <span className="text-primary">Venture Studio</span>
            </h2>
            <p className="text-xl text-primary mb-4">Your Project Could Be the Next Big Thing</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Exceptional projects from VCA students get fast-tracked into our venture pipeline with access to 
              funding, mentorship, and resources.
            </p>
          </div>

          {/* Journey Timeline */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Student Project", icon: <Code size={24} /> },
                { label: "Evaluation", icon: <Target size={24} /> },
                { label: "Incubator Placement", icon: <Rocket size={24} /> },
                { label: "Mentorship", icon: <Users size={24} /> },
                { label: "Funding", icon: <Briefcase size={24} /> },
                { label: "Launch", icon: <ArrowRight size={24} /> }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="pt-8 text-center">
                    <div className="text-primary mb-2">{step.icon}</div>
                    <p className="text-app-text-muted">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Provide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Technical Infrastructure",
                description: "Development resources and tools"
              },
              {
                title: "Mentor Network",
                description: "Access to successful entrepreneurs"
              },
              {
                title: "Incubator Access",
                description: "Direct connections to accelerators"
              },
              {
                title: "Legal Support",
                description: "Compliance and documentation"
              },
              {
                title: "Investor Network",
                description: "Pitch preparation and introductions"
              },
              {
                title: "Global Market Entry",
                description: "International expansion support"
              }
            ].map((service, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <h3 className="text-lg font-semibold text-app-text mb-2">{service.title}</h3>
                <p className="text-app-text-muted">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Selection Criteria */}
          <Card className="p-8 text-center" glowColor="primary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Selection Criteria</h3>
            <p className="text-app-text-muted">
              Projects evaluated on innovation, market potential, technical feasibility, and team capability
            </p>
          </Card>
        </div>
      </Section>

      {/* Agentic Marketplace Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">GARC Agentic </span>
              <span className="text-secondary">Marketplace</span>
            </h2>
            <p className="text-xl text-secondary mb-4">The Future of AI Agent Monetization</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Our revolutionary platform connects AI developers with businesses seeking specialized AI solutions, 
              creating sustainable income opportunities for AiAta graduates.
            </p>
          </div>

          {/* Platform Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Bot size={24} />,
                title: "Diverse AI Categories",
                description: "Business automation, customer service, analytics, content creation, and more"
              },
              {
                icon: <LineChart size={24} />,
                title: "Developer-First Economics",
                description: "Industry-leading revenue share model favoring creators"
              },
              {
                icon: <Shield size={24} />,
                title: "Quality Assurance",
                description: "Rigorous testing and certification for all listed agents"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Reach",
                description: "Access to international markets and enterprise clients"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-8" glowColor="secondary">
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{feature.title}</h3>
                <p className="text-app-text-muted">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Monetization Promise */}
          <Card className="p-8 text-center" glowColor="secondary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Build once, earn continuously</h3>
            <p className="text-app-text-muted">
              Our platform enables developers to create passive income streams while solving real business challenges
            </p>
          </Card>
        </div>
      </Section>

      {/* Success Pathway Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Multiple Paths to </span>
              <span className="text-accent">Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Startup Path (VCA)",
                steps: [
                  "Build innovative project during training",
                  "Get selected for venture studio",
                  "Receive incubator support",
                  "Launch and scale your startup"
                ],
                color: "primary"
              },
              {
                title: "AI Agent Path (AiAta)",
                steps: [
                  "Develop specialized AI agents",
                  "List on marketplace platform",
                  "Earn from every deployment",
                  "Scale to enterprise clients"
                ],
                color: "secondary"
              }
            ].map((path, index) => (
              <Card key={index} className="p-8" glowColor={path.color as 'primary' | 'secondary'}>
                <h3 className="text-xl font-semibold text-app-text mb-6">{path.title}</h3>
                <ol className="space-y-4">
                  {path.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`text-${path.color} font-bold`}>{idx + 1}.</span>
                      <span className="text-app-text-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Ecosystem Support Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Comprehensive Support at </span>
              <span className="text-primary">Every Stage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={24} />,
                title: "Mentorship Network",
                description: "Industry veterans and successful entrepreneurs"
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Technical Resources",
                description: "Infrastructure, tools, and development support"
              },
              {
                icon: <LineChart size={24} />,
                title: "Business Development",
                description: "Go-to-market strategy and scaling guidance"
              },
              {
                icon: <HandshakeIcon size={24} />,
                title: "Partner Network",
                description: "Connections to investors, customers, and collaborators"
              }
            ].map((pillar, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{pillar.title}</h3>
                <p className="text-app-text-muted">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Ready to Build Your </span>
            <span className="text-accent">AI Venture?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Join GARC and transform your ideas into impactful businesses
          </p>
          <Button
            variant="accent"
            size="lg"
            to="/opportunities"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            Explore Opportunities
          </Button>
        </div>
      </Section>
    </>
  );
};

export default VentureEcosystem;