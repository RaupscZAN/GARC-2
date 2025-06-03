import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Building2, GraduationCap, Server, Rocket, TrendingUp, Users, Globe, Trophy, Target, Lightbulb, HandshakeIcon, CheckCircle, Briefcase, FlaskConical, HelpCircle, Brain, Shield, Code, Award } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Partnerships: React.FC = () => {
  const academicRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const infrastructureRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Partnerships - GARC';
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">Building India's AI Future </span>
            <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-app-text-muted mb-8">
            Strategic partnerships across academia, industry, and technology to create a thriving AI ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant="primary"
              onClick={() => scrollToSection(academicRef)}
            >
              Academic Partners
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollToSection(industryRef)}
            >
              Industry Partners
            </Button>
            <Button
              variant="accent"
              onClick={() => scrollToSection(infrastructureRef)}
            >
              Infrastructure Partners
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection(ecosystemRef)}
            >
              Startup Ecosystem
            </Button>
          </div>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-app-text-muted max-w-4xl mx-auto">
              GARC's success depends on strong partnerships. We're building a collaborative ecosystem where 
              academic excellence meets industry innovation, supported by world-class infrastructure and 
              a thriving startup environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <p className="text-app-text-muted">Target Academic Partners</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <p className="text-app-text-muted">Industry Collaborations</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-app-text-muted">Startup Mentors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-app-text-muted">Infrastructure Partners</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Academic Partnerships Section */}
      <Section ref={academicRef} className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Academic </span>
              <span className="text-primary">Partnerships</span>
            </h2>
            <p className="text-xl text-primary mb-4">Collaborating with World's Premier Institutions</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Join leading universities in shaping the future of AI education through joint programs, 
              research collaborations, and faculty exchanges.
            </p>
          </div>

          {/* Target Partners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                category: "Global Universities",
                examples: ["MIT", "Stanford", "Cambridge", "ETH Zurich"]
              },
              {
                category: "Indian Institutes",
                examples: ["IIT Bombay", "IIT Delhi", "IISc Bangalore", "IIIT Hyderabad"]
              },
              {
                category: "Research Centers",
                examples: ["Vector Institute", "AI Singapore", "MILA", "DeepMind"]
              },
              {
                category: "Regional Networks",
                examples: ["ASEAN Universities", "EU Partners", "US Collaborations", "UK Consortium"]
              }
            ].map((group, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <h3 className="text-lg font-semibold text-app-text mb-4">{group.category}</h3>
                <ul className="space-y-2">
                  {group.examples.map((example, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-app-text-muted text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Collaboration Models */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Joint Degree Programs",
                description: "Dual degrees and exchange programs with international recognition",
                benefits: ["Global certification", "Student mobility", "Curriculum co-development"]
              },
              {
                icon: <FlaskConical size={24} />,
                title: "Research Collaborations",
                description: "Joint research projects and publications in cutting-edge AI domains",
                benefits: ["Shared resources", "Expert networks", "Publication opportunities"]
              },
              {
                icon: <Users size={24} />,
                title: "Faculty Exchange",
                description: "Visiting fellowships and collaborative teaching arrangements",
                benefits: ["Knowledge transfer", "Best practices", "Global exposure"]
              }
            ].map((model, index) => (
              <Card key={index} className="p-8" glowColor="primary">
                <div className="text-primary mb-4">{model.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{model.title}</h3>
                <p className="text-app-text-muted mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" />
                      <span className="text-app-text-muted text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/globalai-research/academic-partnership"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Discuss Academic Partnership
            </Button>
          </div>
        </div>
      </Section>

      {/* Industry Partnerships Section */}
      <Section ref={industryRef} className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Industry </span>
              <span className="text-secondary">Partnerships</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Bridging Education and Industry Excellence</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Partner with GARC to access India's top AI talent, contribute to cutting-edge research, 
              and shape the future workforce.
            </p>
          </div>

          {/* Partnership Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Users size={24} />,
                title: "Talent Pipeline",
                description: "Priority access to trained AI professionals and developers",
                details: ["Campus hiring", "Internship programs", "Custom training"]
              },
              {
                icon: <Code size={24} />,
                title: "Technology Partnership",
                description: "Collaborative development and technology sharing",
                details: ["Joint R&D", "Platform integration", "Tool development"]
              },
              {
                icon: <Target size={24} />,
                title: "Curriculum Development",
                description: "Industry-aligned course design and real-world projects",
                details: ["Course design", "Project mentorship", "Skills assessment"]
              },
              {
                icon: <Briefcase size={24} />,
                title: "Corporate Training",
                description: "Upskill your workforce with GARC's expertise",
                details: ["Executive education", "Team training", "AI transformation"]
              }
            ].map((track, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="text-secondary mb-4">{track.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-3">{track.title}</h3>
                <p className="text-app-text-muted mb-4 text-sm">{track.description}</p>
                <ul className="space-y-2">
                  {track.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                      <span className="text-app-text-muted text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Target Industries */}
          <Card className="p-8 mb-8" glowColor="secondary">
            <h3 className="text-2xl font-bold text-app-text mb-6">Target Industry Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-app-text mb-3">Technology Leaders</h4>
                <ul className="space-y-2">
                  {["Google", "Microsoft", "Amazon", "Meta", "NVIDIA"].map((company, idx) => (
                    <li key={idx} className="text-app-text-muted">{company}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-app-text mb-3">Indian IT Giants</h4>
                <ul className="space-y-2">
                  {["TCS", "Infosys", "Wipro", "HCL", "Tech Mahindra"].map((company, idx) => (
                    <li key={idx} className="text-app-text-muted">{company}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-app-text mb-3">Emerging Sectors</h4>
                <ul className="space-y-2">
                  {["FinTech", "HealthTech", "EdTech", "AgriTech", "CleanTech"].map((sector, idx) => (
                    <li key={idx} className="text-app-text-muted">{sector}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              href="https://calendly.com/globalai-research/industry-partnership"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Briefcase size={20} />}
              iconPosition="left"
            >
              Explore Industry Partnership
            </Button>
          </div>
        </div>
      </Section>

      {/* Infrastructure & Technology Partners */}
      <Section ref={infrastructureRef} className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Infrastructure & Technology </span>
              <span className="text-accent">Partners</span>
            </h2>
            <p className="text-xl text-accent mb-4">Powering Innovation Through Shared Resources</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Join our consortium to provide world-class infrastructure and tools that enable 
              breakthrough research and education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Server size={24} />,
                title: "Data Center Consortium",
                description: "Shared high-performance computing infrastructure",
                partners: ["Leading Colleges", "Cloud Providers", "Hardware Vendors"],
                benefits: ["Cost reduction", "Resource pooling", "Scalable compute"]
              },
              {
                icon: <Globe size={24} />,
                title: "Cloud Platform Partners",
                description: "Credits and resources for students and researchers",
                partners: ["AWS", "Google Cloud", "Microsoft Azure", "IBM Cloud"],
                benefits: ["Free credits", "Training resources", "Technical support"]
              },
              {
                icon: <Shield size={24} />,
                title: "Technology Stack Partners",
                description: "Software tools and development platforms",
                partners: ["NVIDIA", "Intel", "AMD", "Software Vendors"],
                benefits: ["Free licenses", "Latest tools", "Technical training"]
              }
            ].map((category, index) => (
              <Card key={index} className="p-8" glowColor="accent">
                <div className="text-accent mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{category.title}</h3>
                <p className="text-app-text-muted mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-app-text font-medium mb-2">Target Partners:</h4>
                  <ul className="space-y-1">
                    {category.partners.map((partner, idx) => (
                      <li key={idx} className="text-app-text-muted text-sm">• {partner}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-app-text font-medium mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {category.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-app-text-muted text-sm">• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="accent"
              size="lg"
              href="https://calendly.com/globalai-research/infrastructure-partnership"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Server size={20} />}
              iconPosition="left"
            >
              Join Infrastructure Consortium
            </Button>
          </div>
        </div>
      </Section>

      {/* Advisory Board & Expert Network */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Advisory Board & </span>
              <span className="text-primary">Expert Network</span>
            </h2>
            <p className="text-xl text-primary mb-4">Leading Minds Guiding India's AI Future</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Distinguished experts from academia, industry, and policy providing strategic guidance 
              and credibility to our initiatives.
            </p>
          </div>

          {/* Advisory Board Roles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Brain size={24} />,
                title: "AI Research Leaders",
                description: "Pioneers in AI/ML research",
                expertise: ["Deep Learning", "NLP", "Computer Vision", "Robotics"]
              },
              {
                icon: <Building2 size={24} />,
                title: "Industry Veterans",
                description: "C-suite executives from tech giants",
                expertise: ["Strategic Planning", "Market Insights", "Technology Trends", "Leadership"]
              },
              {
                icon: <Award size={24} />,
                title: "Policy Experts",
                description: "AI governance and ethics specialists",
                expertise: ["AI Ethics", "Policy Framework", "Regulatory Guidance", "Standards"]
              },
              {
                icon: <Rocket size={24} />,
                title: "Startup Founders",
                description: "Successful AI entrepreneurs",
                expertise: ["Venture Building", "Market Entry", "Scaling", "Investment"]
              }
            ].map((role, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary mb-4">{role.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-3">{role.title}</h3>
                <p className="text-app-text-muted mb-4 text-sm">{role.description}</p>
                <div>
                  <h4 className="text-app-text font-medium mb-2 text-sm">Expertise Areas:</h4>
                  <ul className="space-y-1">
                    {role.expertise.map((area, idx) => (
                      <li key={idx} className="text-app-text-muted text-sm">• {area}</li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          {/* Advisory Board Value */}
          <Card className="p-8 mb-8" glowColor="primary">
            <h3 className="text-2xl font-bold text-app-text mb-6">Advisory Board Value to Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-app-text mb-4">Strategic Guidance</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Market validation and strategic direction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Technology roadmap and research priorities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Policy compliance and ethical frameworks</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-app-text mb-4">Network Access</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Introductions to industry leaders and investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Global research and academic connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-primary mt-1" />
                    <span className="text-app-text-muted">Government and policy maker relationships</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              variant="outline"
              size="lg"
              href="https://calendly.com/globalai-research/advisory-board"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Brain size={20} />}
              iconPosition="left"
            >
              Join Advisory Network
            </Button>
          </div>
        </div>
      </Section>

      {/* Startup Ecosystem Partners */}
      <Section ref={ecosystemRef} className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Startup Ecosystem </span>
              <span className="text-secondary">Partners</span>
            </h2>
            <p className="text-xl text-secondary mb-4">From Student Projects to Funded Startups</p>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Join our incubator and investor network to identify, nurture, and fund the next generation 
              of AI startups emerging from GARC.
            </p>
          </div>

          {/* Ecosystem Layers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Lightbulb size={24} />,
                title: "Incubator Network",
                description: "Early-stage support and mentorship",
                partners: ["T-Hub", "NASSCOM", "91springboard", "IIT Incubators"],
                value: "First look at exceptional student projects"
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Accelerator Programs",
                description: "Growth stage support and scaling",
                partners: ["Techstars", "500 Startups", "Accel", "Matrix Partners"],
                value: "Pre-validated startups with technical excellence"
              },
              {
                icon: <Trophy size={24} />,
                title: "Investor Network",
                description: "Funding for proven ventures",
                partners: ["Angel Networks", "VC Firms", "Corporate VCs", "Government Funds"],
                value: "Curated deal flow from India's top talent"
              }
            ].map((layer, index) => (
              <Card key={index} className="p-8" glowColor="secondary">
                <div className="text-secondary mb-4">{layer.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{layer.title}</h3>
                <p className="text-app-text-muted mb-4">{layer.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-app-text font-medium mb-2">Target Partners:</h4>
                  <ul className="space-y-1">
                    {layer.partners.map((partner, idx) => (
                      <li key={idx} className="text-app-text-muted text-sm">• {partner}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <h4 className="text-app-text font-medium mb-1 text-sm">Value Proposition:</h4>
                  <p className="text-app-text-muted text-sm">{layer.value}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Success Pipeline */}
          <Card className="p-8 mb-8" glowColor="secondary">
            <h3 className="text-2xl font-bold text-app-text mb-6">Student Venture Success Pipeline</h3>
            <div className="relative mb-6">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary/20 -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[
                  { label: "VCA Project", icon: <Code size={20} /> },
                  { label: "Evaluation", icon: <Target size={20} /> },
                  { label: "Incubation", icon: <Rocket size={20} /> },
                  { label: "Funding", icon: <TrendingUp size={20} /> },
                  { label: "Scale", icon: <Globe size={20} /> }
                ].map((step, index) => (
                  <div key={index} className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-secondary rounded-full"></div>
                    <div className="pt-6 text-center">
                      <div className="text-secondary mb-1">{step.icon}</div>
                      <p className="text-app-text-muted text-sm">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-app-text-muted text-center">
              Exceptional VCA student projects → Partner incubators → Funding → Market success
            </p>
          </Card>

          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              href="https://calendly.com/globalai-research/startup-ecosystem"
              target="_blank"
              rel="noopener noreferrer"
              icon={<Rocket size={20} />}
              iconPosition="left"
            >
              Join Startup Ecosystem
            </Button>
          </div>
        </div>
      </Section>

      {/* Partnership Journey */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Partnership </span>
              <span className="text-accent">Journey</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              From initial discussion to full collaboration - here's how we build lasting partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              {
                number: "1",
                title: "Discovery Call",
                description: "Initial discussion to understand mutual goals and alignment"
              },
              {
                number: "2", 
                title: "Framework Design",
                description: "Custom partnership model based on your objectives and capabilities"
              },
              {
                number: "3",
                title: "Pilot Program",
                description: "Start with a focused pilot to validate the partnership approach"
              },
              {
                number: "4",
                title: "Scale & Expand",
                description: "Full collaboration rollout with continuous optimization"
              }
            ].map((step, index) => (
              <Card key={index} className="p-6" glowColor="accent">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-app-text mb-2 text-center">{step.title}</h3>
                <p className="text-app-text-muted text-center text-sm">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Why Partner with </span>
              <span className="text-primary">GARC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <TrendingUp size={24} />,
                title: "Access to Innovation",
                description: "First look at breakthrough research and student innovations emerging from our ecosystem"
              },
              {
                icon: <Users size={24} />,
                title: "Talent Pipeline",
                description: "Direct access to India's most skilled AI professionals and developers from our academies"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Network",
                description: "Connect with our international academic and industry partners to expand your reach"
              },
              {
                icon: <Trophy size={24} />,
                title: "Industry Leadership",
                description: "Position your organization at the forefront of India's AI transformation"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{benefit.title}</h3>
                <p className="text-app-text-muted">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* Success Metrics */}
          <Card className="p-8" glowColor="primary">
            <h3 className="text-2xl font-bold text-app-text mb-6 text-center">Partnership Success Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">90%</div>
                <p className="text-app-text-muted">Partner Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-app-text-muted">Students Placed Annually</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <p className="text-app-text-muted">Startups Launched</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">
            <span className="text-app-text">Partnership </span>
            <span className="text-accent">FAQ</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What are the different partnership models available?",
                answer: "We offer Strategic, Operational, and Advisory partnership levels with varying commitments and benefits. Each can be customized to your organization's goals and capabilities."
              },
              {
                question: "How do you ensure quality in student placements?",
                answer: "Our academies maintain rigorous standards with industry-aligned curriculum, practical projects, and continuous assessment. Partners get access to verified skill profiles and portfolio demonstrations."
              },
              {
                question: "What is the typical timeline for establishing a partnership?",
                answer: "Most partnerships move from initial discussion to pilot program within 6-8 weeks. Full collaboration typically launches within 3-4 months depending on complexity."
              },
              {
                question: "How do you handle intellectual property in collaborations?",
                answer: "We establish clear IP frameworks upfront with fair sharing models that respect all parties' contributions while encouraging open innovation where possible."
              },
              {
                question: "Can international organizations partner with GARC?",
                answer: "Absolutely! We welcome global partnerships and have frameworks to facilitate international collaborations while complying with relevant regulations."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-4">
                  <div className="text-accent mt-1">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-app-text mb-2">{faq.question}</h3>
                    <p className="text-app-text-muted">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Enhanced Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Ready to </span>
              <span className="text-primary">Partner</span>
              <span className="text-app-text"> with GARC?</span>
            </h2>
            <p className="text-xl text-app-text-muted mb-8">
              Join pioneering organizations in building India's AI future. Let's explore how we can work together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Academic Partners",
                description: "Research collaboration and joint programs",
                cta: "Discuss Academic Partnership",
                href: "https://calendly.com/globalai-research/academic-partnership",
                variant: "primary"
              },
              {
                title: "Industry Partners", 
                description: "Talent pipeline and technology collaboration",
                cta: "Explore Industry Partnership",
                href: "https://calendly.com/globalai-research/industry-partnership",
                variant: "secondary"
              },
              {
                title: "Infrastructure Partners",
                description: "Technology and resource sharing",
                cta: "Join Infrastructure Consortium",
                href: "https://calendly.com/globalai-research/infrastructure-partnership", 
                variant: "accent"
              },
              {
                title: "Startup Ecosystem",
                description: "Incubation and investment opportunities",
                cta: "Join Startup Ecosystem",
                href: "https://calendly.com/globalai-research/startup-ecosystem",
                variant: "outline"
              }
            ].map((partner, index) => (
              <Card key={index} className="p-6 text-center">
                <h3 className="text-lg font-semibold text-app-text mb-3">{partner.title}</h3>
                <p className="text-app-text-muted mb-6 text-sm">{partner.description}</p>
                <Button
                  variant={partner.variant as any}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<Calendar size={18} />}
                  iconPosition="left"
                  className="w-full"
                >
                  {partner.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Partnerships;