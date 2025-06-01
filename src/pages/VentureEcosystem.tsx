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
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">From Learning to </span>
            <span className="text-primary">Earning</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Transform your AI innovations into successful ventures through our comprehensive startup ecosystem
          </p>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300">
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
            <p className="text-gray-300 max-w-3xl mx-auto">
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
                    <p className="text-gray-300">{step.label}</p>
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
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>

          {/* Selection Criteria */}
          <Card className="p-8 text-center" glowColor="primary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Selection Criteria</h3>
            <p className="text-gray-300">
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
            <p className="text-gray-300 max-w-3xl mx-auto">
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
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Monetization Promise */}
          <Card className="p-8 text-center" glowColor="secondary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Build once, earn continuously</h3>
            <p className="text-gray-300">
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
                      <span className="text-gray-300">{step}</span>
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
                <p className="text-gray-400">{pillar.description}</p>
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
          <p className="text-xl text-gray-300 mb-8">
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