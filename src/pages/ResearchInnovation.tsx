import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Shield, Building2, Sparkles, Server, Cpu, Lock, Building, Globe, Lightbulb, Book, Newspaper, Podcast, Calendar, ArrowRight, Download, Users, Target, FlaskConical, Zap, Network, Database, BarChart, FileText, Award, Eye, Layers, GraduationCap } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const ResearchInnovation: React.FC = () => {
  useEffect(() => {
    document.title = 'Research & Innovation - GARC';
  }, []);

  return (
    <>
      {/* Section 1: Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">Join the Premier </span>
            <span className="text-primary">AI Research Ecosystem</span>
          </h1>
          <p className="text-xl text-app-text-muted mb-8">
            Collaborate with leading researchers, contribute breakthrough ideas, and help build world-class AI infrastructure that advances technological leadership
          </p>
          <Button
            variant="primary"
            size="lg"
            to="#get-involved"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
          >
            See How to Get Involved
          </Button>
        </div>
      </Section>

      {/* Section 2: Introduction */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md mb-6">Why Leading Researchers Choose GARC</h2>
          <p className="text-lg text-app-text-muted">
            Access world-class computational infrastructure, collaborate with international research partners, and amplify your research impact through our comprehensive ecosystem. At GARC, your breakthrough ideas get the resources, recognition, and real-world application they deserve—while you help build the foundation for the next generation of AI innovation.
          </p>
        </div>
      </Section>

      {/* Section 3: Core Research Focus Areas */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Four Pillars of </span>
              <span className="text-primary">AI Innovation</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Contributing to breakthrough research across critical domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: <Brain size={32} />,
                title: "Next-Generation AI Architectures",
                items: [
                  "Transformer evolution and optimization",
                  "Neuromorphic computing applications",
                  "Quantum-classical hybrid systems",
                  "AI models optimized for diverse contexts and languages"
                ],
                color: "primary"
              },
              {
                icon: <Shield size={32} />,
                title: "AI Safety and Alignment",
                items: [
                  "Robust AI systems development",
                  "Interpretability and explainable AI",
                  "Value alignment in autonomous systems",
                  "Frameworks for safe and ethically aligned AI"
                ],
                color: "secondary"
              },
              {
                icon: <Building2 size={32} />,
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
                icon: <Sparkles size={32} />,
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
                <div className={`text-${area.color} mb-6`}>{area.icon}</div>
                <h3 className="text-2xl font-bold text-app-text mb-6">{area.title}</h3>
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

      {/* Section 4: Data Center Consortium */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Data Center </span>
              <span className="text-secondary">Consortium</span>
            </h2>
            <p className="text-xl text-secondary mb-4 italic">Premier AI Research Infrastructure</p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-app-text mb-4">Strategic Approach</h3>
            <p className="text-app-text-muted text-lg">
              Partnership-based model with leading Indian colleges and international institutions to create a distributed yet cohesive data center network.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-app-text mb-8">Infrastructure Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
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
                  icon: <Zap size={24} />,
                  title: "Green Energy Powered",
                  description: "100% renewable energy commitment"
                },
                {
                  icon: <Lock size={24} />,
                  title: "Security Excellence",
                  description: "Military-grade cybersecurity protocols"
                },
                {
                  icon: <Database size={24} />,
                  title: "Research Access",
                  description: "Democratized access for academic and research institutions"
                }
              ].map((spec, index) => (
                <Card key={index} className="p-6" glowColor="secondary">
                  <div className="text-secondary mb-4">{spec.icon}</div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">{spec.title}</h4>
                  <p className="text-app-text-muted text-sm">{spec.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-app-text mb-8">Consortium Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <BarChart size={24} />,
                  title: "Cost Optimization",
                  description: "Shared infrastructure reduces individual institutional costs"
                },
                {
                  icon: <Network size={24} />,
                  title: "Resource Pooling",
                  description: "Enhanced computational capabilities through collaboration"
                },
                {
                  icon: <Users size={24} />,
                  title: "Knowledge Sharing",
                  description: "Accelerated research through cross-institutional partnerships"
                },
                {
                  icon: <Target size={24} />,
                  title: "Standardization",
                  description: "Unified protocols and best practices across institutions"
                }
              ].map((benefit, index) => (
                <Card key={index} className="p-6" glowColor="secondary">
                  <div className="text-secondary mb-4">{benefit.icon}</div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">{benefit.title}</h4>
                  <p className="text-app-text-muted text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Global AI Advisory Board */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Guided by </span>
              <span className="text-accent">World-Class Expertise</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Strategic direction from leading AI researchers, industry pioneers, and policy experts
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8" glowColor="accent">
              <h3 className="text-2xl font-bold text-app-text mb-4">Board Overview</h3>
              <p className="text-app-text-muted">
                Our Global AI Advisory Board brings together distinguished leaders who meet quarterly and convene annually to shape research priorities, ensure international standards, and connect GARC with premier global networks. Through regular strategic sessions and our flagship annual summit, this world-class guidance ensures our research initiatives meet the highest standards while addressing real-world challenges.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Academic Leaders",
                items: [
                  "Professors from MIT, Stanford, Cambridge, ETH Zurich",
                  "Directors from premier Indian institutes (IIT, IISc)",
                  "International research center leaders"
                ],
                focus: "Research excellence and academic partnerships",
                color: "primary"
              },
              {
                icon: <Building size={24} />,
                title: "Industry Pioneers",
                items: [
                  "Former/current CTOs of major technology companies",
                  "Successful AI startup founders and leaders",
                  "Technology innovation executives"
                ],
                focus: "Industry relevance and practical applications",
                color: "secondary"
              },
              {
                icon: <Shield size={24} />,
                title: "Policy & Ethics Experts",
                items: [
                  "AI governance and policy specialists",
                  "Technology regulation advisors",
                  "AI ethics and safety researchers"
                ],
                focus: "Responsible AI development and regulatory guidance",
                color: "accent"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Innovators",
                items: [
                  "International AI research pioneers",
                  "Cross-industry technology experts",
                  "Emerging technology thought leaders"
                ],
                focus: "Global perspectives and future trends",
                color: "primary"
              }
            ].map((category, index) => (
              <Card key={index} className="p-6" glowColor={category.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${category.color} mb-4`}>{category.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-4">{category.title}</h3>
                <ul className="space-y-2 mb-4">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-app-text-muted text-sm">{item}</li>
                  ))}
                </ul>
                <div className="border-t border-gray-200 pt-3">
                  <p className="text-sm font-medium text-app-text">Focus:</p>
                  <p className="text-sm text-app-text-muted">{category.focus}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8" glowColor="accent">
            <h3 className="text-2xl font-bold text-app-text mb-6">Board Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Research Direction: Setting strategic priorities and identifying emerging opportunities",
                "Global Standards: Ensuring research meets international benchmarks",
                "Network Access: Facilitating collaborations with top-tier institutions worldwide",
                "Policy Influence: Shaping ethical frameworks and governance approaches",
                "Quality Assurance: Maintaining excellence in all research initiatives"
              ].map((impact, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <span className="text-app-text-muted">{impact}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Section 6: Publications & Thought Leadership */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Shaping Global </span>
              <span className="text-primary">AI Discourse</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              Leading through publications, events, and strategic conversations
            </p>
          </div>

          <div className="mb-12">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-4">Our Approach</h3>
              <p className="text-app-text-muted">
                GARC establishes thought leadership through comprehensive publications and world-class events that share knowledge, influence policy, and position India as a global AI authority. Our multi-channel approach ensures research insights reach academic, industry, and policy communities worldwide.
              </p>
            </Card>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-app-text mb-8 text-center">Publications Platform</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Book size={32} />,
                  title: "GARC AI Research Journal",
                  items: [
                    "Peer-reviewed quarterly publication",
                    "Open access to global research community",
                    "Target: Top-tier academic recognition within 5 years",
                    "International editorial board"
                  ]
                },
                {
                  icon: <Newspaper size={32} />,
                  title: "AI Insights India Newsletter",
                  items: [
                    "Monthly industry analysis and policy insights",
                    "Target: 50,000+ global subscribers",
                    "Expert analysis for researchers, policymakers, industry leaders"
                  ]
                },
                {
                  icon: <Podcast size={32} />,
                  title: "Voices of AI India Podcast",
                  items: [
                    "Weekly expert conversations and interviews",
                    "Research deep-dives and industry perspectives",
                    "Premier platform for global AI thought leadership"
                  ]
                }
              ].map((publication, index) => (
                <Card key={index} className="p-8" glowColor="accent">
                  <div className="text-accent mb-6">{publication.icon}</div>
                  <h4 className="text-xl font-semibold text-app-text mb-4">{publication.title}</h4>
                  <ul className="space-y-2">
                    {publication.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                        <span className="text-app-text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-app-text mb-8 text-center">Global Events Platform</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-8" glowColor="accent">
                <h4 className="text-xl font-semibold text-app-text mb-4">GARC Global AI Summit (Annual Flagship)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">5,000+ international attendees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Keynotes, technical sessions, workshops, exhibitions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Live streaming for global participation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Focus: Emerging trends, policy discussions, startup showcases</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8" glowColor="accent">
                <h4 className="text-xl font-semibold text-app-text mb-4">Quarterly Research Symposiums</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Specialized technical conferences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">AI Safety and Ethics Forum</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Industry application showcases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                    <span className="text-app-text-muted">Student research competitions</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          <Card className="p-8 text-center" glowColor="primary">
            <h3 className="text-2xl font-bold text-app-text mb-4">Combined Impact</h3>
            <p className="text-app-text-muted">
              Through our integrated publications and events strategy, we establish GARC as the definitive platform for AI discourse, creating lasting impact on global AI development and thought leadership.
            </p>
          </Card>
        </div>
      </Section>

      {/* Section 7: Call to Action */}
      <Section id="get-involved" className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-12">
            <span className="text-app-text">Ready to </span>
            <span className="text-accent">Get Involved?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-xl font-semibold text-app-text mb-4">For Researchers</h3>
              <p className="text-app-text-muted mb-6">Submit your breakthrough ideas and amplify your research impact</p>
              <Button
                variant="primary"
                size="lg"
                to="/submit-research"
                className="w-full"
              >
                Submit Research Proposal
              </Button>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-xl font-semibold text-app-text mb-4">For Institutions</h3>
              <p className="text-app-text-muted mb-6">Join our consortium and access world-class AI infrastructure</p>
              <Button
                variant="secondary"
                size="lg"
                to="/join-consortium"
                className="w-full"
              >
                Join Data Consortium
              </Button>
            </Card>

            <Card className="p-8" glowColor="accent">
              <h3 className="text-xl font-semibold text-app-text mb-4">For Leaders</h3>
              <p className="text-app-text-muted mb-6">Shape the future of AI through strategic collaboration</p>
              <Button
                variant="outline"
                size="lg"
                to="/partnerships"
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