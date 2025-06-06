import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Building2, GraduationCap, Landmark, Rocket, TrendingUp, Users, Globe, Trophy, Mail } from 'lucide-react';
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
            Strategic partnerships across academia, industry, and government to drive innovation and create opportunities
          </p>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-app-text-muted">
            GARC's success is built on strong partnerships. Together, we're creating a robust ecosystem that drives innovation, 
            nurtures talent, and positions India as a global AI leader.
          </p>
        </div>
      </Section>

      {/* Partnership Categories */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Partnership </span>
              <span className="text-primary">Opportunities</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap size={24} />,
                title: "Academic Partnerships",
                description: "Collaborate with world's top universities",
                items: [
                  "Joint degree programs",
                  "Research collaborations",
                  "Faculty exchange",
                  "Student mobility programs"
                ],
                profile: "Global Top-50 Universities • Premier Indian Institutes • International Research Centers",
                color: "primary"
              },
              {
                icon: <Building2 size={24} />,
                title: "Industry Partnerships",
                description: "Connect with global tech leaders",
                items: [
                  "Curriculum co-development",
                  "Talent pipeline access",
                  "Research sponsorship",
                  "Technology partnerships"
                ],
                profile: "Fortune 500 Tech Companies • Leading IT Services Firms • Innovation Labs • Emerging Startups",
                color: "secondary"
              },
              {
                icon: <Landmark size={24} />,
                title: "Government Advisory",
                description: "Shape India's AI future",
                items: [
                  "Policy development",
                  "National AI strategy",
                  "Talent development programs",
                  "Research initiatives"
                ],
                profile: "AI Governance • Ethical Guidelines • Skill Development • Strategic Planning",
                color: "accent"
              }
            ].map((category, index) => (
              <Card key={index} className="p-8" glowColor={category.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${category.color} mb-4`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{category.title}</h3>
                <p className="text-app-text-muted mb-6">{category.description}</p>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-${category.color} mt-2`}></div>
                      <span className="text-app-text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-sm text-app-text-muted pt-4 border-t border-white/10">
                  {category.profile}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Partnership Examples */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Target </span>
              <span className="text-primary">Partnership Network</span>
            </h2>
            <p className="text-app-text-muted max-w-3xl mx-auto">
              We're building strategic alliances with leading institutions and organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6" glowColor="primary">
              <h3 className="text-lg font-semibold text-app-text mb-4">International Universities</h3>
              <ul className="space-y-2 text-app-text-muted">
                <li>• Massachusetts Institute of Technology (MIT)</li>
                <li>• Stanford University</li>
                <li>• University of Cambridge</li>
                <li>• ETH Zurich</li>
                <li>• National University of Singapore</li>
              </ul>
            </Card>

            <Card className="p-6" glowColor="secondary">
              <h3 className="text-lg font-semibold text-app-text mb-4">Technology Partners</h3>
              <ul className="space-y-2 text-app-text-muted">
                <li>• Google & Microsoft (Cloud Infrastructure)</li>
                <li>• TCS, Infosys, Wipro (Talent Pipeline)</li>
                <li>• Amazon & Meta (Platform Support)</li>
                <li>• Leading AI Startups</li>
                <li>• Research Labs & Think Tanks</li>
              </ul>
            </Card>

            <Card className="p-6" glowColor="accent">
              <h3 className="text-lg font-semibold text-app-text mb-4">Startup Ecosystem</h3>
              <ul className="space-y-2 text-app-text-muted">
                <li>• T-Hub (National Level)</li>
                <li>• Y Combinator Networks</li>
                <li>• Techstars & 500 Startups</li>
                <li>• Corporate Accelerators</li>
                <li>• Sector-Specific Incubators</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Incubator Network */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Startup Ecosystem </span>
              <span className="text-secondary">Partners</span>
            </h2>
            <p className="text-xl text-secondary mb-4">From idea to impact through our incubator network</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Network Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Direct access to top student projects",
                  "Structured mentorship programs",
                  "Co-investment opportunities",
                  "Talent pipeline for portfolio companies"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-app-text-muted">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Network Profile</h3>
              <p className="text-app-text-muted mb-6">
                Leading National Incubators • International Accelerator Networks • Corporate Innovation Programs • 
                Venture Capital Partners
              </p>
              <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h4 className="text-app-text font-semibold mb-2">Success Path</h4>
                <p className="text-app-text-muted">
                  VCA Project → Incubator Selection → Mentorship → Funding → Scale
                </p>
              </div>
            </Card>
          </div>
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
                title: "Access to Innovation",
                description: "First look at breakthrough research and student innovations"
              },
              {
                icon: <Users size={24} />,
                title: "Talent Pipeline",
                description: "Direct access to trained AI professionals and developers"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Network",
                description: "Connect with international partners and expand reach"
              },
              {
                icon: <Trophy size={24} />,
                title: "Industry Leadership",
                description: "Position your organization at the forefront of AI development"
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

      {/* Call to Action */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Ready to </span>
            <span className="text-primary">Partner?</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-8">
            Join pioneering organizations in building India's AI future. Let's explore how we can work together.
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
              href="mailto:info@garc.ai"
              icon={<Mail size={20} />}
              iconPosition="left"
            >
              Email Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Partnerships;