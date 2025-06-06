import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, Bot, Target, Lightbulb, 
  Users, TrendingUp, Building2, Send, Upload,
  Handshake, LineChart, Code, Award
} from 'lucide-react';
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
        {/* Background with tech startup theme */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2940&auto=format&fit=crop")'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-accent/30 rounded-full blur-lg animate-float"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Pill header */}
            <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-white font-medium">
                GARC Venture Ecosystem
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">From </span>
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Idea
              </span>
              <span className="text-white"> to </span>
              <br />
              <span className="bg-gradient-to-r from-accent-300 to-primary-300 bg-clip-text text-transparent">
                Funded Startup
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Transform your breakthrough concepts into market-ready companies through our comprehensive venture ecosystem
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                variant="primary"
                size="lg"
                href="#submit-idea"
                icon={<Send size={20} />}
                iconPosition="right"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Submit Your Idea
              </Button>

              <Button 
                variant="outline"
                size="lg"
                href="#pathways"
                className="min-w-[200px] border-white/20 hover:bg-white/5"
              >
                Explore Pathways
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comprehensive Support Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <span className="text-app-text">Comprehensive Support at </span>
              <span className="text-primary">Every Stage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target size={32} />,
                title: "Mentorship Network",
                description: "Industry veterans and successful entrepreneurs"
              },
              {
                icon: <Lightbulb size={32} />,
                title: "Technical Resources",
                description: "Infrastructure, tools, and development support"
              },
              {
                icon: <TrendingUp size={32} />,
                title: "Business Development",
                description: "Go-to-market strategy and scaling guidance"
              },
              {
                icon: <Handshake size={32} />,
                title: "Partner Network",
                description: "Connections to investors, customers, and collaborators"
              }
            ].map((support, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full" glowColor="primary">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="text-primary">{support.icon}</div>
                    <h3 className="text-xl font-semibold text-app-text">{support.title}</h3>
                  </div>
                  <p className="text-app-text-muted">{support.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Two Entrepreneurial Pathways */}
      <Section id="pathways" className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Two Paths to </span>
              <span className="text-accent">Entrepreneurial Success</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Whether you're building the next unicorn or creating innovative AI solutions, 
              we have the pathway that fits your entrepreneurial vision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Startup Studio Path - Primary */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full" glowColor="primary">
                <div className="flex items-center gap-3 mb-4">
                  <Rocket size={24} className="text-primary" />
                  <h3 className="text-2xl font-bold text-app-text">Startup Studio Path</h3>
                </div>
                <p className="text-lg text-primary mb-4">Traditional Venture Development</p>
                
                <div className="flex items-center gap-2 mb-6 text-app-text-muted">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Idea</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Incubator</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Funding</span>
                </div>

                <p className="text-app-text-muted mb-6">
                  Transform breakthrough ideas into scalable businesses through our comprehensive startup studio. 
                  Get direct placement into top-tier incubators and accelerators.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-app-text mb-4">What You Get:</h4>
                  <ul className="space-y-3">
                    {[
                      "Priority placement in partner incubators",
                      "Technical infrastructure and development support",
                      "Legal and compliance assistance",
                      "Direct access to investor networks"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <span className="text-app-text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <p className="text-app-text mb-1"><strong>Perfect for:</strong> Scalable tech innovations and breakthrough concepts</p>
                  <p className="text-app-text-muted"><strong>Outcome:</strong> Venture-backed startup launch</p>
                </div>
              </Card>
            </motion.div>

            {/* Marketplace Entrepreneurship - Secondary */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full" glowColor="secondary">
                <div className="flex items-center gap-3 mb-4">
                  <Bot size={24} className="text-secondary" />
                  <h3 className="text-2xl font-bold text-app-text">Marketplace Entrepreneurship</h3>
                </div>
                <p className="text-lg text-secondary mb-4">AI-Powered Business Development</p>
                
                <div className="flex items-center gap-2 mb-6 text-app-text-muted">
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Build</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Deploy</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Scale</span>
                </div>

                <p className="text-app-text-muted mb-6">
                  Create and monetize specialized AI solutions through our marketplace platform. 
                  Build sustainable businesses around AI agent development and deployment.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-app-text mb-4">What You Get:</h4>
                  <ul className="space-y-3">
                    {[
                      "Priority listing on GARC Agentic Marketplace",
                      "Direct access to enterprise clients",
                      "70% developer revenue share model",
                      "Continuous platform and technology updates"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                        <span className="text-app-text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                  <p className="text-app-text mb-1"><strong>Perfect for:</strong> AI specialists and innovative developers</p>
                  <p className="text-app-text-muted"><strong>Outcome:</strong> Scalable AI business with recurring revenue</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Partnership Network */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Powered by Our </span>
              <span className="text-secondary">Partnership Network</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Our extensive network of partners provides the foundation for your entrepreneurial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 size={24} />,
                title: "Leading Incubators",
                description: "Premier accelerators and startup programs across India and globally",
                examples: "National and international innovation hubs"
              },
              {
                icon: <Award size={24} />,
                title: "Corporate Accelerators", 
                description: "Innovation labs and accelerator programs from top tech companies",
                examples: "Enterprise innovation partnerships"
              },
              {
                icon: <LineChart size={24} />,
                title: "Investor Networks",
                description: "Angel investors, VCs, and strategic investors across multiple sectors",
                examples: "Seed to Series A funding partners"
              }
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full" glowColor="secondary">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-secondary">{partner.icon}</div>
                    <h3 className="text-xl font-semibold text-app-text">{partner.title}</h3>
                  </div>
                  <p className="text-app-text-muted mb-4">{partner.description}</p>
                  <div className="text-sm text-secondary font-medium">{partner.examples}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Submit Your Idea - Main CTA */}
      <Section id="submit-idea" className="bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Ready to </span>
              <span className="text-accent">Submit Your Idea?</span>
            </h2>
            <p className="text-xl text-app-text-muted mb-8">
              Take the first step towards transforming your concept into a successful venture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Submit Your Concept",
                description: "Fill out our simple form and upload your pitch deck"
              },
              {
                number: "2", 
                title: "Expert Review",
                description: "Our team evaluates your idea for market potential and fit"
              },
              {
                number: "3",
                title: "Enter the Ecosystem", 
                description: "Get matched with the right pathway and support network"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{step.title}</h3>
                <p className="text-app-text-muted">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:flex absolute top-6 -right-4 w-8 justify-center">
                    <ArrowRight size={20} className="text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <Card className="p-8 text-center" glowColor="accent">
            <h3 className="text-2xl font-bold text-app-text mb-4">What You Need to Submit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3">
                <Users size={20} className="text-accent" />
                <span className="text-app-text-muted">Basic project information form</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Upload size={20} className="text-accent" />
                <span className="text-app-text-muted">Pitch deck (PDF format)</span>
              </div>
            </div>
            
            <Button
              variant="accent"
              size="lg"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Send size={20} />}
              iconPosition="right"
              className="text-lg px-8 py-4"
            >
              Submit Your Idea Now
            </Button>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default VentureEcosystem;