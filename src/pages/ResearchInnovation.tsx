import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Building2, Sparkles, Server, Cpu, Lock, Building, Microscope, Rocket, Globe, Lightbulb, Book, Newspaper, Podcast, Calendar, ArrowRight, Download, GraduationCap, Users, Award } from 'lucide-react';
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
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-technology-big-data-background-concept-generate-ai-image_15686420.jpg")'
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content */}
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
                Global AI Research Council
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Join the Premier AI </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Research Ecosystem
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              GARC's ecosystem provides cutting-edge AI research infrastructure and global collaborative opportunities for academia, industry, and innovators worldwide
            </p>

            <Button
              variant="primary"
              size="lg"
              href="#get-involved"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              See How to Get Involved
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-app-text-muted">
            GARC's research ecosystem combines theoretical excellence with practical applications. 
            Through strategic partnerships, state-of-the-art infrastructure, and interdisciplinary 
            collaboration, we're solving real-world challenges while advancing the frontiers of AI technology.
          </p>
        </div>
      </Section>

      {/* Four Pillars Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain size={32} className="text-primary" />
              <h2 className="heading-lg">
                <span className="text-app-text">Four Pillars of </span>
                <span className="text-primary">AI Innovation</span>
              </h2>
            </div>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Driving innovation across critical AI domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "https://via.placeholder.com/300x200/00BFA5/FFFFFF?text=AI+Architecture",
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
                image: "https://via.placeholder.com/300x200/00ACC1/FFFFFF?text=AI+Safety",
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
                image: "https://via.placeholder.com/300x200/FFB800/000000?text=Domain+AI",
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
                image: "https://via.placeholder.com/300x200/00BFA5/FFFFFF?text=Emerging+Tech",
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

      {/* Expertise and Board Impact Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Expertise */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Users size={32} className="text-accent" />
                <h2 className="heading-lg">
                  <span className="text-app-text">Guided by </span>
                  <span className="text-accent">World-Class Expertise</span>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <GraduationCap size={24} />,
                    title: "Academic Leaders",
                    description: "MIT, Stanford, Cambridge professors + IIT/IISc leaders",
                    color: "primary"
                  },
                  {
                    icon: <Building size={24} />,
                    title: "Industry Pioneers",
                    description: "Tech CTOs, AI startup founders, innovation executives",
                    color: "secondary"
                  },
                  {
                    icon: <Shield size={24} />,
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
                ].map((expert, index) => (
                  <Card key={index} className="p-6" glowColor={expert.color as 'primary' | 'secondary' | 'accent'}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-${expert.color}`}>{expert.icon}</div>
                      <h3 className="text-lg font-semibold text-app-text">{expert.title}</h3>
                    </div>
                    <p className="text-app-text-muted">{expert.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Board Impact */}
            <div>
              <h2 className="heading-lg text-center mb-8">
                <span className="text-app-text">Board Impact</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    icon: <Lightbulb size={24} />,
                    title: "Research Direction",
                    description: "Setting strategic priorities and identifying emerging opportunities",
                    color: "accent"
                  },
                  {
                    icon: <Award size={24} />,
                    title: "Global Standards",
                    description: "Ensuring research meets international benchmarks",
                    color: "secondary"
                  },
                  {
                    icon: <Users size={24} />,
                    title: "Network Access",
                    description: "Facilitating collaborations with top-tier institutions",
                    color: "primary"
                  }
                ].map((impact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`text-${impact.color} mt-1`}>{impact.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-app-text mb-2">{impact.title}</h3>
                      <p className="text-app-text-muted">{impact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            <p className="text-xl text-secondary mb-4">India's Premier AI Research Infrastructure</p>
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
                  <h3 className="text-lg font-semibold text-app-text">{feature.title}</h3>
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
                src="https://www.outseer.com/wp-content/uploads/blog-data_consortium-ft.jpg"
                alt="Data Center Infrastructure"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
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
                      <span className="text-app-text-muted">{item}</span>
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
                <p className="text-app-text-muted">{commitment.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section id="get-involved" className="bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="heading-lg mb-16">
            <span className="text-app-text">Ready to </span>
            <span className="text-accent">Get Involved?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Researchers */}
            <Card className="p-8 text-center" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-4">For Researchers</h3>
              <p className="text-app-text-muted mb-8">
                Submit your breakthrough ideas and amplify your research impact
              </p>
              <Button
                variant="primary"
                size="lg"
                href="/research/submit-proposal"
                icon={<Download size={20} />}
                iconPosition="right"
                className="w-full"
              >
                Submit Research Proposal
              </Button>
            </Card>

            {/* For Institutions */}
            <Card className="p-8 text-center" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-4">For Institutions</h3>
              <p className="text-app-text-muted mb-8">
                Join our consortium and access world-class AI infrastructure
              </p>
              <Button
                variant="secondary"
                size="lg"
                href="/consortium/join"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="w-full"
              >
                Join Data Consortium
              </Button>
            </Card>

            {/* For Leaders */}
            <Card className="p-8 text-center" glowColor="accent">
              <h3 className="text-2xl font-bold text-app-text mb-4">For Leaders</h3>
              <p className="text-app-text-muted mb-8">
                Shape the future of AI through strategic collaboration
              </p>
              <Button
                variant="accent"
                size="lg"
                to="/partnerships"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="w-full"
              >
                Explore Partnerships
              </Button>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ResearchInnovation;

export default ResearchInnovation