import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Building2, Sparkles, Server, Cpu, Lock, Building, Microscope, Rocket, Globe, Lightbulb, Book, Newspaper, Podcast, Calendar, ArrowRight, Download } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ResearchInnovation: React.FC = () => {
  useEffect(() => {
    document.title = 'Research & Innovation - GARC';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">Advancing AI Through </span>
            <span className="text-primary">Cutting-Edge Research</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Pioneering research initiatives, world-class infrastructure, and collaborative innovation 
            to position India at the forefront of global AI development
          </p>
          <Button
            variant="primary"
            size="lg"
            to="/research/opportunities"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            Explore Research Opportunities
          </Button>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            GARC's research ecosystem combines theoretical excellence with practical applications. 
            Through strategic partnerships, state-of-the-art infrastructure, and interdisciplinary 
            collaboration, we're solving real-world challenges while advancing the frontiers of AI technology.
          </p>
        </div>
      </Section>

      {/* Research Areas Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Core Research </span>
              <span className="text-primary">Focus Areas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Driving innovation across critical AI domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain size={24} />,
                title: "Next-Generation AI Architectures",
                items: [
                  "Transformer evolution and optimization",
                  "Neuromorphic computing applications",
                  "Quantum-classical hybrid systems",
                  "Focus: Building AI models optimized for Indian contexts and languages"
                ],
                color: "primary"
              },
              {
                icon: <Shield size={24} />,
                title: "AI Safety and Alignment",
                items: [
                  "Robust AI systems development",
                  "Interpretability and explainable AI",
                  "Value alignment in autonomous systems",
                  "Focus: Creating frameworks for safe and ethically aligned AI"
                ],
                color: "secondary"
              },
              {
                icon: <Building2 size={24} />,
                title: "Domain-Specific AI Applications",
                items: [
                  "Healthcare AI and precision medicine",
                  "Agricultural intelligence and sustainability",
                  "Educational AI and personalized learning",
                  "Smart cities and urban planning"
                ],
                color: "accent"
              },
              {
                icon: <Sparkles size={24} />,
                title: "Emerging Technologies Integration",
                items: [
                  "AI-Blockchain convergence",
                  "Internet of Things (IoT) intelligence",
                  "Edge computing optimization",
                  "Human-AI collaboration frameworks"
                ],
                color: "primary"
              }
            ].map((area, index) => (
              <Card key={index} className="p-8" glowColor={area.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${area.color} mb-4`}>{area.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${area.color} mt-2`}></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Data Center Consortium Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">India's Premier </span>
              <span className="text-secondary">AI Research Infrastructure</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Powering the future through collaborative computing</p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              The GARC Data Center Consortium brings together leading Indian colleges and institutions 
              to create a distributed yet cohesive network of computational resources, democratizing 
              access to AI research infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Server size={24} />,
                title: "Computing Power",
                description: "High-performance GPU clusters optimized for AI workloads"
              },
              {
                icon: <Cpu size={24} />,
                title: "Green Energy",
                description: "100% renewable energy powered infrastructure"
              },
              {
                icon: <Lock size={24} />,
                title: "Security Excellence",
                description: "Military-grade cybersecurity protocols"
              },
              {
                icon: <Building size={24} />,
                title: "Shared Resources",
                description: "Collaborative model reducing costs by 70%"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Join the Consortium</h3>
              <ul className="space-y-4">
                {[
                  "Access to world-class computational resources",
                  "Shared knowledge and best practices",
                  "Reduced infrastructure costs",
                  "Standardized protocols across institutions",
                  "Priority access for research projects"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Infrastructure Capabilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Quantum Computing Ready",
                  "Distributed Architecture",
                  "Real-time Collaboration Tools",
                  "Automated Resource Allocation"
                ].map((capability, index) => (
                  <div key={index} className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <span className="text-app-text">{capability}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Publications & Thought Leadership Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Sharing Knowledge, </span>
              <span className="text-accent">Shaping the Future</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Book size={24} />,
                title: "GARC AI Research Journal",
                items: [
                  "Peer-reviewed quarterly publication",
                  "Open access to global research community",
                  "Original research in AI and machine learning",
                  "Target: Top-tier academic recognition"
                ]
              },
              {
                icon: <Newspaper size={24} />,
                title: "AI Insights India Newsletter",
                items: [
                  "Monthly industry analysis",
                  "Policy recommendations",
                  "Research highlights",
                  "50,000+ subscribers target"
                ]
              },
              {
                icon: <Podcast size={24} />,
                title: "Voices of AI India Podcast",
                items: [
                  "Weekly expert discussions",
                  "Research deep-dives",
                  "Industry perspectives",
                  "Global thought leadership"
                ]
              }
            ].map((channel, index) => (
              <Card key={index} className="p-8" glowColor="accent">
                <div className="text-accent mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-4">{channel.title}</h3>
                <ul className="space-y-3">
                  {channel.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Research Impact Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Our Commitment to </span>
              <span className="text-secondary">Open Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe size={24} />,
                title: "Open Source",
                description: "All fundamental research published openly"
              },
              {
                icon: <Rocket size={24} />,
                title: "Excellence",
                description: "Pursuing breakthrough innovations"
              },
              {
                icon: <Microscope size={24} />,
                title: "Collaboration",
                description: "Global research consortiums"
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Application",
                description: "Technology transfer to real-world solutions"
              }
            ].map((commitment, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="text-secondary mb-4">{commitment.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{commitment.title}</h3>
                <p className="text-gray-400">{commitment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Be Part of India's </span>
            <span className="text-accent">AI Research Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Whether you're a researcher, institution, or industry partner, there's a place for you in our ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              to="/research/submit-proposal"
              icon={<Download size={20} />}
              iconPosition="left"
            >
              Submit Research Proposal
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/partnerships"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Explore Partnership Options
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResearchInnovation;