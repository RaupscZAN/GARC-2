import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, Bot, Target, Brain, Shield, Users, Code, 
  Briefcase, LineChart, Globe, Lightbulb, Book, Newspaper, 
  Podcast, Calendar, Server, Cpu, Lock, Building, Download,
  GraduationCap, Award, Microscope, Building2
} from 'lucide-react';
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
            <span className="text-app-text">From Learning to </span>
            <span className="text-primary">Earning</span>
          </h1>
          <p className="text-xl text-app-text-muted mb-8">
            Transform your AI innovations into successful ventures through our comprehensive startup ecosystem
          </p>
        </div>
      </Section>

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

      {/* Four Pillars Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Four Pillars of </span>
              <span className="text-primary">AI Innovation</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Driving innovation across critical AI domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=250&fit=crop",
                title: "Next-Generation AI Architectures",
                items: [
                  "Transformer evolution and optimization",
                  "Neuromorphic computing applications",
                  "Quantum-classical hybrid systems",
                  "Focus: AI models optimized for diverse contexts and languages"
                ],
                color: "primary"
              },
              {
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
                title: "AI Safety and Alignment",
                items: [
                  "Robust AI systems development",
                  "Interpretability and explainable AI",
                  "Value alignment in autonomous systems",
                  "Focus: Frameworks for safe and ethically aligned AI"
                ],
                color: "secondary"
              },
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
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
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
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
                <img 
                  src={area.image} 
                  alt={area.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-app-text mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${area.color} mt-2`}></div>
                      <span className="text-app-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* World-Class Expertise Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Guided by </span>
            <span className="text-primary">World-Class Expertise</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8 max-w-3xl mx-auto">
            Strategic direction from leading AI researchers, industry pioneers, and policy experts
          </p>
          <p className="text-lg text-app-text-muted mb-12 max-w-3xl mx-auto">
            Our Global AI Advisory Board brings together distinguished leaders from academia, industry, and 
            policy who provide strategic guidance, ensure international standards, and connect GARC with 
            premier global networks through quarterly sessions and our annual summit.
          </p>
          <Button
            variant="primary"
            size="lg"
            to="/about/advisory-board"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            Learn About Our Advisory Board
          </Button>
        </div>
      </Section>

      {/* Publications & Thought Leadership Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Sharing Knowledge, </span>
              <span className="text-accent">Shaping the Future</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
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
                title: "AI Insights Newsletter",
                items: [
                  "Monthly industry analysis",
                  "Policy recommendations",
                  "Research highlights",
                  "50,000+ subscribers target"
                ]
              },
              {
                icon: <Podcast size={24} />,
                title: "Voices of AI Podcast",
                items: [
                  "Weekly expert discussions",
                  "Research deep-dives",
                  "Industry perspectives",
                  "Global thought leadership"
                ]
              },
              {
                icon: <Globe size={24} />,
                title: "GARC Global AI Summit",
                items: [
                  "Annual flagship event",
                  "5,000+ attendees",
                  "Global streaming access",
                  "Industry-academia collaboration"
                ]
              },
              {
                icon: <Lightbulb size={24} />,
                title: "Quarterly Research Symposiums",
                items: [
                  "Specialized conferences",
                  "Ethics forums",
                  "Research competitions",
                  "Industry showcases"
                ]
              }
            ].map((channel, index) => (
              <Card key={index} className="p-6" glowColor="accent">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-accent">{channel.icon}</div>
                  <h3 className="text-lg font-semibold text-app-text">{channel.title}</h3>
                </div>
                <ul className="space-y-3">
                  {channel.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-gray-300 text-sm">{item}</span>
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
              <span className="text-app-text">Data Center </span>
              <span className="text-secondary">Consortium</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Premier AI Research Infrastructure</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Partnership-based model with leading Indian colleges and international institutions to create a 
              distributed yet cohesive data center network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Server size={24} />,
                title: "High-Performance Computing",
                description: "GPU clusters optimized for AI workloads"
              },
              {
                icon: <Cpu size={24} />,
                title: "Quantum Computing Integration",
                description: "Preparation for next-generation computing"
              },
              {
                icon: <Lock size={24} />,
                title: "Security Excellence",
                description: "Military-grade cybersecurity protocols"
              },
              {
                icon: <Building size={24} />,
                title: "Research Access",
                description: "Democratized access for institutions"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-secondary">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-app-text mb-2 leading-tight">{feature.title}</h3>
                </div>
                <p className="text-app-text-muted">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-app-text mb-6">Consortium Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Cost Optimization: Shared infrastructure reduces individual institutional costs",
                  "Resource Pooling: Enhanced computational capabilities through collaboration",
                  "Knowledge Sharing: Accelerated research through cross-institutional partnerships",
                  "Standardization: Unified protocols and best practices across institutions"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                    <span className="text-app-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img 
                src="https://www.pymnts.com/wp-content/uploads/2019/08/bigtech-joshstein-jimhood-kenpaxton.jpg?w=620"
                alt="Data Center Infrastructure"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section id="get-involved" className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Ready to </span>
            <span className="text-accent">Get Involved?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Join pioneering organizations in building India's AI future. Let's explore how we can work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/your-garc-link"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Schedule Partnership Discussion
            </Button>
            <Button
              variant="outline"
              size="lg"
              to="/contact"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResearchInnovation;