import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Building2, GraduationCap, Landmark, Rocket, TrendingUp, Users, Globe, Trophy, BookOpen, Briefcase, Award, Target, Handshake } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Partnerships: React.FC = () => {
  useEffect(() => {
    document.title = 'Partnerships - GARC';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="heading-xl mb-6">
            <span className="text-app-text">Building a Collaborative </span>
            <span className="text-primary">AI Ecosystem</span>
          </h1>
          <p className="text-xl text-app-text-muted mb-8">
            Strategic partnerships across academia, industry, and government to drive innovation and create opportunities for India's AI future
          </p>
        </div>
      </Section>

      {/* Partnership Vision */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-app-text-muted">
            GARC's success is built on strong partnerships that create a robust ecosystem driving innovation, 
            nurturing talent, and positioning India as a global AI leader. Our collaborative approach ensures 
            every stakeholder benefits from shared knowledge, resources, and opportunities.
          </p>
        </div>
      </Section>

      {/* Partnership Categories */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Comprehensive Partnership </span>
              <span className="text-primary">Framework</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "International Academic Partners",
                description: "Collaborate with world's premier universities",
                items: [
                  "Joint research projects and publications",
                  "Faculty exchange programs",
                  "Student mobility and dual degrees",
                  "Curriculum co-development",
                  "Global conference hosting"
                ],
                institutions: [
                  "Massachusetts Institute of Technology (MIT)",
                  "Stanford University", 
                  "University of Cambridge",
                  "ETH Zurich",
                  "National University of Singapore",
                  "University of Toronto (Vector Institute)"
                ],
                color: "primary"
              },
              {
                icon: <Building2 size={24} />,
                title: "Industry Collaborations",
                description: "Connect with global technology leaders",
                items: [
                  "Talent pipeline development",
                  "Real-world project integration",
                  "R&D partnerships",
                  "Technology licensing",
                  "Innovation lab collaborations"
                ],
                institutions: [
                  "Google, Microsoft, Amazon, Meta",
                  "TCS, Infosys, Wipro",
                  "Leading AI Startups",
                  "Cloud Infrastructure Partners",
                  "Hardware Technology Partners"
                ],
                color: "secondary"
              },
              {
                icon: <Landmark size={24} />,
                title: "Government Advisory",
                description: "Shape India's AI policy and strategy",
                items: [
                  "AI governance frameworks",
                  "Ethical guidelines development",
                  "National talent strategies",
                  "Sector-specific AI applications",
                  "International positioning strategies"
                ],
                institutions: [
                  "Ministry of Electronics & IT",
                  "NITI Aayog",
                  "Department of Science & Technology",
                  "Various State Governments",
                  "International AI Alliances"
                ],
                color: "accent"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8" glowColor={category.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${category.color} mb-4`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{category.title}</h3>
                <p className="text-app-text-muted mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-app-text mb-3">Key Activities:</h4>
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full bg-${category.color} mt-2`}></div>
                        <span className="text-app-text-muted text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-sm font-semibold text-app-text mb-2">Partner Profile:</h4>
                  <div className="text-xs text-app-text-muted space-y-1">
                    {category.institutions.map((inst, idx) => (
                      <div key={idx}>{inst}</div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Startup Ecosystem Partners */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Comprehensive Startup </span>
              <span className="text-secondary">Ecosystem</span>
            </h2>
            <p className="text-xl text-secondary mb-4">From classroom innovation to market leadership</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">GARC Venture Studio Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Priority access to exceptional student projects",
                  "Technical infrastructure and development support",
                  "Structured mentorship from industry veterans",
                  "Direct investor network introductions",
                  "Legal and compliance framework support",
                  "International market entry assistance"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-app-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Strategic Incubator Network</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">National Partners:</h4>
                  <p className="text-app-text-muted">T-Hub, NASSCOM, Startup India initiatives</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">International Network:</h4>
                  <p className="text-app-text-muted">Y Combinator, Techstars, 500 Startups alumni networks</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">Corporate Accelerators:</h4>
                  <p className="text-app-text-muted">TCS, Infosys, Wipro innovation labs</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-app-text mb-2">Sector-Specific:</h4>
                  <p className="text-app-text-muted">Healthcare (Biocon, Apollo), Fintech (HDFC, ICICI), AgTech partners</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Success Pipeline */}
          <Card className="p-8 text-center" glowColor="secondary">
            <h3 className="text-xl font-semibold text-app-text mb-4">Project-to-Startup Success Pipeline</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-app-text-muted">
              <span>VCA Project</span>
              <ArrowRight size={16} className="text-secondary" />
              <span>Evaluation</span>
              <ArrowRight size={16} className="text-secondary" />
              <span>Incubator Placement</span>
              <ArrowRight size={16} className="text-secondary" />
              <span>Mentorship & Funding</span>
              <ArrowRight size={16} className="text-secondary" />
              <span>Market Launch</span>
            </div>
          </Card>
        </div>
      </Section>

      {/* Partnership Benefits */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Why Partner with </span>
              <span className="text-accent">GARC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp size={24} />,
                title: "Innovation Access",
                description: "First access to breakthrough research and cutting-edge student innovations"
              },
              {
                icon: <Users size={24} />,
                title: "Talent Pipeline",
                description: "Direct connection to India's top AI professionals and developers"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Network",
                description: "Connect with international partners and expand global reach"
              },
              {
                icon: <Trophy size={24} />,
                title: "Industry Leadership",
                description: "Position your organization at the forefront of AI development"
              },
              {
                icon: <BookOpen size={24} />,
                title: "Knowledge Exchange",
                description: "Access to exclusive research, publications, and thought leadership"
              },
              {
                icon: <Target size={24} />,
                title: "Strategic Advantage",
                description: "Early insights into emerging AI trends and technologies"
              },
              {
                icon: <Briefcase size={24} />,
                title: "Business Growth",
                description: "Opportunities for joint ventures and new market development"
              },
              {
                icon: <Award size={24} />,
                title: "Recognition",
                description: "Brand association with India's premier AI institution"
              }
            ].map((benefit, index) => (
              <Card key={index} className="p-6" glowColor="accent">
                <div className="text-accent mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{benefit.title}</h3>
                <p className="text-app-text-muted">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Data Center Consortium */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Data Center </span>
              <span className="text-primary">Consortium</span>
            </h2>
            <p className="text-xl text-primary mb-4">Partnership-driven AI infrastructure</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Consortium Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Cost optimization through shared infrastructure",
                  "Enhanced computational capabilities via resource pooling",
                  "Accelerated research through knowledge sharing",
                  "Unified protocols and best practices",
                  "Access to cutting-edge AI hardware",
                  "Collaborative research opportunities"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <span className="text-app-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Infrastructure Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-app-text">GPU Clusters</span>
                  <span className="text-primary font-semibold">100K+ Hours/Month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-app-text">Storage Capacity</span>
                  <span className="text-primary font-semibold">5 PB Secure</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-app-text">Network Bandwidth</span>
                  <span className="text-primary font-semibold">400 Gbps</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-app-text">Partner Institutions</span>
                  <span className="text-primary font-semibold">25+ Active</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Partnership Process */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Partnership </span>
              <span className="text-secondary">Journey</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Discussion",
                description: "Schedule a consultation to explore partnership opportunities"
              },
              {
                step: "2",
                title: "Alignment Assessment",
                description: "Evaluate mutual goals and partnership potential"
              },
              {
                step: "3",
                title: "Framework Development",
                description: "Design customized partnership structure and agreements"
              },
              {
                step: "4",
                title: "Implementation",
                description: "Launch partnership with ongoing support and collaboration"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-secondary text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-app-text mb-2">{item.title}</h3>
                <p className="text-app-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Ready to Shape India's </span>
            <span className="text-primary">AI Future?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Join pioneering organizations in building India's AI ecosystem. Let's explore how we can create 
            transformational impact together through strategic partnership.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href="https://calendly.com/globalai-research/collaboration-call"
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
              href="mailto:partnerships@garc.ai"
              icon={<Handshake size={20} />}
              iconPosition="right"
            >
              Contact Partnerships Team
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Partnerships;