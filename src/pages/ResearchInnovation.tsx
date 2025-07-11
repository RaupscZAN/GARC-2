import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Rocket, Bot, Target, Brain, Shield, Users, Code, 
  Briefcase, LineChart, Globe, Lightbulb, Book, Newspaper, 
  Podcast, Calendar, Server, Cpu, Lock, Building, Download,
  GraduationCap, Award, Microscope, Building2, Zap, TreePine,
  FileText, Video, Trophy, BarChart3
} from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ResearchInnovation: React.FC = () => {
  useEffect(() => {
    document.title = 'Research & Innovation - GARC';
  }, []);

  const scrollToResearchAreas = () => {
    const element = document.querySelector('#research-areas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                onClick={scrollToResearchAreas}
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
      <Section id="research-areas" className="bg-surface/30" pattern="grid">
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
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
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
                image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
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

      {/* AI Research & Publications Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">AI Research & </span>
              <span className="text-accent">Publications</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Advancing global AI knowledge through rigorous research, open access publishing, 
              and international collaboration with leading institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Book size={24} />,
                title: "GARC AI Research Journal",
                description: "Quarterly peer-reviewed publication featuring breakthrough AI research",
                features: [
                  "Open access to global research community",
                  "Rigorous peer review process",
                  "International editorial board",
                  "Impact factor targeting top-tier recognition"
                ],
                color: "primary"
              },
              {
                icon: <Newspaper size={24} />,
                title: "AI Insights India",
                description: "Monthly newsletter analyzing AI trends, policy, and industry developments",
                features: [
                  "Policy recommendations and analysis",
                  "Industry trend forecasting",
                  "Research highlights and summaries",
                  "50,000+ subscriber target"
                ],
                color: "secondary"
              },
              {
                icon: <Globe size={24} />,
                title: "International Collaborations",
                description: "Research partnerships with MIT, Stanford, Cambridge, and other leading institutions",
                features: [
                  "Joint research projects",
                  "Faculty exchange programs",
                  "Student mobility initiatives",
                  "Shared publication opportunities"
                ],
                color: "accent"
              }
            ].map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full" glowColor={publication.color as 'primary' | 'secondary' | 'accent'}>
                  <div className={`text-${publication.color} mb-4`}>{publication.icon}</div>
                  <h3 className="text-xl font-semibold text-app-text mb-3">{publication.title}</h3>
                  <p className="text-app-text-muted mb-6">{publication.description}</p>
                  <ul className="space-y-3">
                    {publication.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${publication.color} mt-2`}></div>
                        <span className="text-app-text-muted text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-app-text mb-4">Open Access Commitment</h3>
                <p className="text-app-text-muted mb-6">
                  GARC is committed to democratizing AI knowledge through open access publishing. 
                  All our research findings, methodologies, and datasets are freely available to 
                  the global research community, accelerating innovation and collaboration.
                </p>
                <div className="flex items-center gap-4">
                  <div className="text-accent">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-app-text font-semibold">100% Open Access</p>
                    <p className="text-app-text-muted text-sm">All research freely available</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <p className="text-app-text-muted text-sm">Research Papers/Year</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-secondary mb-1">10+</div>
                  <p className="text-app-text-muted text-sm">International Partners</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">50K+</div>
                  <p className="text-app-text-muted text-sm">Monthly Readers</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <p className="text-app-text-muted text-sm">Open Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Data Center Consortium Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Data Center </span>
              <span className="text-secondary">Consortium</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Next-Generation AI Research Infrastructure</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Partnership-based model with leading global institutions to create a 
              distributed yet cohesive data center network powered by sustainable technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Server size={24} />,
                title: "High-Performance Computing",
                description: "GPU clusters optimized for AI workloads",
                metric: "100K+ GPU Hours/Month"
              },
              {
                icon: <TreePine size={24} />,
                title: "100% Green Energy",
                description: "Sustainable computing with renewable energy",
                metric: "Zero Carbon Footprint"
              },
              {
                icon: <Zap size={24} />,
                title: "Quantum-Ready Architecture",
                description: "Infrastructure prepared for quantum computing integration",
                metric: "Future-Proof Design"
              },
              {
                icon: <Lock size={24} />,
                title: "Military-Grade Security",
                description: "Advanced cybersecurity protocols and data protection",
                metric: "99.99% Uptime SLA"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center" glowColor="secondary">
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{feature.title}</h3>
                <p className="text-app-text-muted mb-4 text-sm">{feature.description}</p>
                <div className="bg-secondary/20 rounded-lg p-2">
                  <p className="text-secondary font-semibold text-sm">{feature.metric}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-app-text mb-6">Research Access Program</h3>
              <p className="text-app-text-muted mb-6">
                Democratized access to world-class computational resources for universities, 
                research institutions, and qualified researchers worldwide.
              </p>
              <ul className="space-y-4">
                {[
                  "Tiered access based on research merit",
                  "Collaborative resource sharing protocols",
                  "24/7 technical support and consultation",
                  "Training programs for optimal resource utilization"
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
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Compute Power", value: "5 PB", unit: "Storage Capacity" },
              { label: "Network Speed", value: "400 Gbps", unit: "Bandwidth" },
              { label: "Research Partners", value: "25+", unit: "Global Institutions" },
              { label: "Uptime", value: "99.99%", unit: "Availability SLA" }
            ].map((stat, index) => (
              <div key={index} className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                <p className="text-app-text-muted text-xs">{stat.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Government & Policy Engagement Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Government & </span>
              <span className="text-accent">Policy Engagement</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Shaping responsible AI governance and policy frameworks while building 
              strategic partnerships with government institutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Shield size={32} />,
                title: "AI Governance Frameworks",
                description: "Developing comprehensive policies for responsible AI deployment and regulation",
                initiatives: [
                  "Ethical AI guidelines development",
                  "Regulatory compliance frameworks",
                  "Industry standards establishment",
                  "Cross-sector policy coordination"
                ]
              },
              {
                icon: <Users size={32} />,
                title: "Strategic Advisory Role",
                description: "Providing expert guidance to government on AI strategy and implementation",
                initiatives: [
                  "National AI strategy consultation",
                  "Technology assessment and evaluation",
                  "Policy impact analysis",
                  "International cooperation facilitation"
                ]
              },
              {
                icon: <Brain size={32} />,
                title: "Responsible AI Development",
                description: "Leading initiatives for safe, ethical, and beneficial AI systems",
                initiatives: [
                  "AI safety research programs",
                  "Bias detection and mitigation",
                  "Transparency and explainability",
                  "Human-AI collaboration protocols"
                ]
              },
              {
                icon: <GraduationCap size={32} />,
                title: "Talent Pipeline Building",
                description: "Creating pathways for AI expertise development across government sectors",
                initiatives: [
                  "Government AI training programs",
                  "Public sector skill development",
                  "Leadership development initiatives",
                  "Cross-department knowledge sharing"
                ]
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full" glowColor="accent">
                  <div className="text-accent mb-6">{area.icon}</div>
                  <h3 className="text-xl font-semibold text-app-text mb-4">{area.title}</h3>
                  <p className="text-app-text-muted mb-6">{area.description}</p>
                  <ul className="space-y-3">
                    {area.initiatives.map((initiative, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                        <span className="text-app-text-muted text-sm">{initiative}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-app-text mb-4">Policy Impact & Recognition</h3>
                <p className="text-app-text-muted mb-6">
                  GARC's policy initiatives have gained recognition from leading government institutions 
                  and international organizations, positioning us as a trusted advisor in AI governance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Award size={20} className="text-accent" />
                    <span className="text-app-text">Government AI Advisory Board Member</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe size={20} className="text-accent" />
                    <span className="text-app-text">International AI Ethics Consortium</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText size={20} className="text-accent" />
                    <span className="text-app-text">Policy White Papers Published</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">15+</div>
                  <p className="text-app-text-muted text-sm">Policy Papers</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <p className="text-app-text-muted text-sm">Government Partnerships</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">100+</div>
                  <p className="text-app-text-muted text-sm">Officials Trained</p>
                </div>
                <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3</div>
                  <p className="text-app-text-muted text-sm">Policy Frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* AI Conferences & Global Events Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">AI Conferences & </span>
              <span className="text-primary">Global Events</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Fostering global AI collaboration through world-class conferences, competitions, 
              and knowledge-sharing events
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Flagship Event */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full" glowColor="primary">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar size={32} className="text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold text-app-text">GARC Global AI Summit</h3>
                    <p className="text-primary">Annual Flagship Event</p>
                  </div>
                </div>
                <p className="text-app-text-muted mb-6">
                  Our premier annual conference bringing together 5,000+ AI researchers, industry leaders, 
                  policymakers, and innovators from around the world.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">5,000+</div>
                    <p className="text-app-text-muted text-sm">Attendees</p>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <p className="text-app-text-muted text-sm">Speakers</p>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <p className="text-app-text-muted text-sm">Countries</p>
                  </div>
                  <div className="bg-primary/20 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <p className="text-app-text-muted text-sm">Global Streaming</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Keynotes from AI pioneers and industry leaders",
                    "Technical sessions and research presentations",
                    "Startup showcase and investor networking",
                    "Policy roundtables and ethics discussions"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <span className="text-app-text-muted text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Other Events Grid */}
            <div className="space-y-6">
              {[
                {
                  icon: <Trophy size={24} />,
                  title: "Student Research Competitions",
                  description: "Annual competitions showcasing breakthrough student research",
                  frequency: "Quarterly",
                  color: "secondary"
                },
                {
                  icon: <Shield size={24} />,
                  title: "AI Ethics Forum",
                  description: "Dedicated sessions on responsible AI development and deployment",
                  frequency: "Bi-annual",
                  color: "accent"
                },
                {
                  icon: <Video size={24} />,
                  title: "Monthly Webinars",
                  description: "Expert-led sessions on emerging AI trends and technologies",
                  frequency: "Monthly",
                  color: "primary"
                }
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6" glowColor={event.color as 'primary' | 'secondary' | 'accent'}>
                    <div className="flex items-start gap-4">
                      <div className={`text-${event.color} mt-1`}>{event.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-app-text">{event.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full bg-${event.color}/20 text-${event.color}`}>
                            {event.frequency}
                          </span>
                        </div>
                        <p className="text-app-text-muted text-sm">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-app-text mb-4">Global Reach & Impact</h3>
              <p className="text-app-text-muted max-w-2xl mx-auto">
                Our events create lasting connections and drive meaningful collaboration 
                across the global AI community
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { metric: "25K+", label: "Annual Event Participants" },
                { metric: "200+", label: "Expert Speakers" },
                { metric: "1M+", label: "Online Viewers" },
                { metric: "75+", label: "Partner Organizations" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.metric}</div>
                  <p className="text-app-text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Impact Metrics Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Impact </span>
              <span className="text-secondary">Metrics</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Measuring our success through tangible outcomes and meaningful impact 
              on the global AI ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <BarChart3 size={32} />,
                metric: "₹50,000+",
                label: "Guaranteed Monthly Income",
                description: "For top-performing AI agents",
                color: "accent",
                progress: 85
              },
              {
                icon: <Users size={32} />,
                metric: "1,000+",
                label: "Alumni Target",
                description: "Skilled professionals in 3 years",
                color: "primary",
                progress: 25
              },
              {
                icon: <Globe size={32} />,
                metric: "10+",
                label: "International Partnerships",
                description: "With leading global institutions",
                color: "secondary",
                progress: 60
              },
              {
                icon: <Microscope size={32} />,
                metric: "5+",
                label: "Research Projects",
                description: "Breakthrough initiatives in Year 1",
                color: "accent",
                progress: 40
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 text-center h-full" glowColor={metric.color as 'primary' | 'secondary' | 'accent'}>
                  <div className={`text-${metric.color} mb-4`}>{metric.icon}</div>
                  <div className={`text-3xl font-bold text-${metric.color} mb-2`}>{metric.metric}</div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">{metric.label}</h4>
                  <p className="text-app-text-muted text-sm mb-4">{metric.description}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className={`bg-${metric.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${metric.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <p className="text-xs text-app-text-muted mt-2">{metric.progress}% Progress</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Global Recognition & Placement</h3>
              <div className="space-y-6">
                {[
                  { label: "Job Placement Rate", value: "95%", target: "Within 6 months of graduation" },
                  { label: "Startup Success Rate", value: "40%", target: "Student ventures receiving funding" },
                  { label: "International Recognition", value: "Top 10", target: "Global AI education ranking target" },
                  { label: "Industry Partnerships", value: "50+", target: "Leading tech companies" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-app-text font-semibold">{stat.label}</p>
                      <p className="text-app-text-muted text-sm">{stat.target}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Research & Innovation Impact</h3>
              <div className="space-y-6">
                {[
                  { label: "Research Publications", value: "100+", target: "Peer-reviewed papers annually" },
                  { label: "Patent Applications", value: "25+", target: "Innovation protection" },
                  { label: "Open Source Projects", value: "50+", target: "Community contributions" },
                  { label: "Citation Impact", value: "Top 5%", target: "Most cited AI research" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-app-text font-semibold">{stat.label}</p>
                      <p className="text-app-text-muted text-sm">{stat.target}</p>
                    </div>
                    <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Global AI Advisory Board Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="heading-lg mb-6">
              <span className="text-app-text">Guided by </span>
              <span className="text-primary">World-Class Expertise</span>
            </h2>
            <p className="text-xl text-primary mb-8 max-w-4xl mx-auto">
              Strategic direction from leading AI researchers, industry pioneers, and policy experts
            </p>
            <p className="text-lg text-app-text-muted max-w-5xl mx-auto mb-10">
              Our Global AI Advisory Board brings together distinguished leaders from academia, industry, and 
              policy who provide strategic guidance, ensure international standards, and connect GARC with 
              premier global networks through quarterly sessions and our annual summit.
            </p>
            <Button
              variant="primary"
              size="lg"
              to="/partnerships"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Learn About Our Advisory Board
            </Button>
          </div>
        </div>
      </Section>

      {/* Our Commitment to Open Innovation Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <span className="text-app-text">Our Commitment to </span>
              <span className="text-primary">Open Innovation</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe size={32} />,
                title: "Open Source",
                description: "All fundamental research published openly"
              },
              {
                icon: <Rocket size={32} />,
                title: "Excellence",
                description: "Pursuing breakthrough innovations"
              },
              {
                icon: <Microscope size={32} />,
                title: "Collaboration",
                description: "Global research consortiums"
              },
              {
                icon: <Lightbulb size={32} />,
                title: "Application",
                description: "Technology transfer to real-world solutions"
              }
            ].map((commitment, index) => (
              <Card key={index} className="p-8 text-center h-full" glowColor="primary">
                <div className="text-primary mb-6">{commitment.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-4">{commitment.title}</h3>
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
                href="https://forms.gle/fyYQnH2nZDZmgK1bA"
                target="_blank"
                rel="noopener noreferrer"
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
                href="https://calendly.com/globalai-research/collaboration-call"
                target="_blank"
                rel="noopener noreferrer"
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