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
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")'
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
                Research & Innovation Hub
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">Join the Premier AI</span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Research Ecosystem
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Access world-class infrastructure, collaborate with global partners, and drive the future of AI innovation
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                variant="primary"
                size="lg"
                href="#get-involved"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Get Involved
              </Button>

              <Button 
                variant="outline"
                size="lg"
                href="#research-areas"
                className="min-w-[200px] border-white/20 hover:bg-white/5"
              >
                Explore Research Areas
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Leading Researchers Choose GARC Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-app-text">Why Leading Researchers </span>
                <span className="text-primary">Choose GARC</span>
              </h2>
              <p className="text-lg text-app-text-muted leading-relaxed">
                Access world-class computational infrastructure, collaborate with international research partners, 
                and amplify your research impact through our comprehensive ecosystem. At GARC, your breakthrough 
                ideas get the resources, recognition, and real-world application they deserve—while you help build 
                the foundation for the next generation of AI innovation.
              </p>
            </div>

            {/* Right Column - Data Visualization Image */}
            <div className="relative">
              <img 
                src="https://www.outseer.com/wp-content/uploads/blog-data_consortium-ft.jpg"
                alt="AI Research Data Visualization"
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
            </div>
          </div>
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