import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Building2,
  Sparkles,
  Server,
  Cpu,
  Lock,
  Building,
  Microscope,
  Rocket,
  Globe,
  Lightbulb,
  Book,
  Newspaper,
  Podcast,
  Calendar,
  ArrowRight,
  Download,
  GraduationCap,
  Users,
  Scale,
  Award,
  Target
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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(75,97,209,0.15),transparent_50%)]"></div>
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Join the Premier AI Research Ecosystem
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Collaborate with leading researchers, contribute breakthrough ideas, and help build 
              world-class AI infrastructure that advances technological leadership
            </p>
            <Button
              variant="primary"
              size="lg"
              to="/research/get-involved"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              See How to Get Involved
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                <span className="text-app-text">Why Leading Researchers </span>
                <span className="text-primary">Choose GARC</span>
              </h2>
              <p className="text-lg text-app-text-muted">
                Access world-class computational infrastructure, collaborate with international research partners, 
                and amplify your research impact through our comprehensive ecosystem. At GARC, your breakthrough 
                ideas get the resources, recognition, and real-world application they deserve—while you help build 
                the foundation for the next generation of AI innovation.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://www.outseer.com/wp-content/uploads/blog-data_consortium-ft.jpg"
                alt="Research Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Research Areas Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Brain size={32} className="text-primary" />
            <h2 className="heading-lg">
              <span className="text-app-text">Four Pillars of </span>
              <span className="text-primary">AI Innovation</span>
            </h2>
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
                  "Focus: AI models optimized for diverse contexts and languages"
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
                  "Focus: Frameworks for safe and ethically aligned AI"
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
                      <span className="text-app-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* AI Advisory Board Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <Users size={32} className="text-accent" />
            <h2 className="heading-lg">
              <span className="text-app-text">Guided by </span>
              <span className="text-accent">World-Class Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Academic Leaders",
                description: "MIT, Stanford, Cambridge professors + IIT/IISc leaders",
                color: "primary"
              },
              {
                icon: <Building2 size={24} />,
                title: "Industry Pioneers",
                description: "Tech CTOs, AI startup founders, innovation executives",
                color: "secondary"
              },
              {
                icon: <Scale size={24} />,
                title: "Policy & Ethics Experts",
                description: "AI governance specialists, technology regulation advisors",
                color: "accent"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Innovators",
                description: "International research pioneers, emerging tech thought leaders",
                color: "primary"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8" glowColor={category.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${category.color} mb-4`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{category.title}</h3>
                <p className="text-app-text-muted">{category.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-app-text mb-6">Board Impact</h3>
          </div>

          <Card className="p-8" glowColor="accent">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Target size={24} />,
                  title: "Research Direction",
                  description: "Setting strategic priorities and identifying emerging opportunities"
                },
                {
                  icon: <Award size={24} />,
                  title: "Global Standards",
                  description: "Ensuring research meets international benchmarks"
                },
                {
                  icon: <Users size={24} />,
                  title: "Network Access",
                  description: "Facilitating collaborations with top-tier institutions"
                }
              ].map((impact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="text-accent shrink-0">{impact.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-app-text mb-2">{impact.title}</h4>
                    <p className="text-app-text-muted">{impact.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
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
            <p className="text-xl text-secondary mb-4">India's Premier AI Research Infrastructure</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Partnership-based model with leading Indian colleges and international institutions 
              to create a distributed yet cohesive data center network.
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
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{feature.title}</h3>
                <p className="text-app-text-muted">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Consortium Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Cost Optimization: Shared infrastructure reduces individual institutional costs",
                  "Resource Pooling: Enhanced computational capabilities through collaboration",
                  "Knowledge Sharing: Accelerated research through cross-institutional partnerships",
                  "Standardization: Unified protocols and best practices across institutions"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-app-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <div className="relative h-full">
              <img
                src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
                alt="Data Center Infrastructure"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Publications & Thought Leadership Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Shaping Global </span>
              <span className="text-primary">AI Discourse</span>
            </h2>
            <p className="text-xl text-primary mb-4">
              Leading through publications, events, and strategic conversations
            </p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              GARC establishes thought leadership through comprehensive publications and world-class 
              events that share knowledge, influence policy, and position India as a global AI authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Book size={24} />,
                title: "GARC AI Research Journal",
                description: "Peer-reviewed quarterly, open access, top-tier recognition target"
              },
              {
                icon: <Newspaper size={24} />,
                title: "AI Insights India Newsletter",
                description: "Monthly analysis, 50,000+ subscriber target"
              },
              {
                icon: <Podcast size={24} />,
                title: "Voices of AI India Podcast",
                description: "Weekly expert conversations, premier thought leadership platform"
              }
            ].map((publication, index) => (
              <Card key={index} className="p-8" glowColor="primary">
                <div className="text-primary mb-4">{publication.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{publication.title}</h3>
                <p className="text-app-text-muted">{publication.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8" glowColor="primary">
            <h3 className="text-2xl font-bold text-app-text mb-6">Global Events Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-app-text">GARC Global AI Summit</h4>
                <p className="text-app-text-muted">
                  Annual flagship event with 5,000+ attendees and global streaming
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-app-text">Quarterly Research Symposiums</h4>
                <p className="text-app-text-muted">
                  Specialized conferences, ethics forums, and competitions
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Ready to </span>
              <span className="text-accent">Get Involved?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Researchers",
                description: "Submit your breakthrough ideas and amplify your research impact",
                cta: {
                  text: "Submit Research Proposal",
                  variant: "primary" as const,
                  to: "/research/submit-proposal",
                  icon: <Download size={20} />
                }
              },
              {
                title: "For Institutions",
                description: "Join our consortium and access world-class AI infrastructure",
                cta: {
                  text: "Join Data Consortium",
                  variant: "secondary" as const,
                  to: "/research/join-consortium",
                  icon: <ArrowRight size={20} />
                }
              },
              {
                title: "For Leaders",
                description: "Shape the future of AI through strategic collaboration",
                cta: {
                  text: "Explore Partnerships",
                  variant: "accent" as const,
                  to: "/partnerships",
                  icon: <ArrowRight size={20} />
                }
              }
            ].map((audience, index) => (
              <Card key={index} className="p-8 text-center" glowColor={audience.cta.variant}>
                <h3 className="text-xl font-semibold text-app-text mb-4">{audience.title}</h3>
                <p className="text-app-text-muted mb-6">{audience.description}</p>
                <Button
                  variant={audience.cta.variant}
                  to={audience.cta.to}
                  icon={audience.cta.icon}
                  iconPosition="right"
                >
                  {audience.cta.text}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResearchInnovation;