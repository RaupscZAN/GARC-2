import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Bot, ArrowRight, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { getPageSections, PageSection } from '../lib/supabase';

const Academies: React.FC = () => {
  const [ctaSection, setCtaSection] = useState<PageSection | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Academies - GARC';
    loadCTASection();
  }, []);

  const loadCTASection = async () => {
    try {
      const sections = await getPageSections('academies');
      const finalCTA = sections?.find(section => section.section_name === 'academies-final-cta');
      setCtaSection(finalCTA || null);
    } catch (error) {
      console.error('Error loading CTA section:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderCTAButtons = () => {
    if (!ctaSection || !ctaSection.content.cta_buttons) {
      // Fallback to default buttons if no CTA section found
      return (
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button
            variant="primary"
            size="lg"
            href="https://forms.gle/RsvDL2jbhb8GqWp49"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Calendar size={20} />}
            iconPosition="left"
          >
            Apply to VCA
          </Button>
          <Button
            variant="secondary"
            size="lg"
            href="https://forms.gle/RsvDL2jbhb8GqWp49"
            target="_blank"
            rel="noopener noreferrer"
            icon={<Calendar size={20} />}
            iconPosition="left"
          >
            Apply to AiAta
          </Button>
        </div>
      );
    }

    return (
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {ctaSection.content.cta_buttons.map((button: any, index: number) => (
          <Button
            key={index}
            variant={button.variant || 'primary'}
            size={button.size || 'lg'}
            href={button.link}
            target="_blank"
            rel="noopener noreferrer"
            icon={button.icon === 'Calendar' ? <Calendar size={20} /> : undefined}
            iconPosition={button.iconPosition || 'left'}
          >
            {button.text}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2944&auto=format&fit=crop")'
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
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Pill header */}
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                Specialized Academies
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Industry-Connected AI & </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Technology Education
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Two specialized academies powered by strategic partnerships, creating direct pathways from learning to career success
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                variant="primary"
                size="lg"
                href="#vca-section"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Explore VCA
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="#aiata-section"
                className="min-w-[200px] border-white/20 hover:bg-white/5 text-white"
              >
                Explore AiAta
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Advantage Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Education That Works Because </span>
              <span className="text-primary">Industry Is Involved</span>
            </h2>
            <p className="text-app-text-muted max-w-4xl mx-auto">
              GARC's academies combine cutting-edge curriculum with direct industry integration. Through partnerships with leading companies, incubators, and research institutions, we provide not just education—but real pathways to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Projects",
                description: "Work on real industry challenges during your training",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&h=300"
              },
              {
                title: "Expert Mentorship",
                description: "Learn directly from practicing professionals and successful entrepreneurs",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=400&h=300"
              },
              {
                title: "Career Networks",
                description: "Access to jobs, funding, and business opportunities through our partner ecosystem",
                image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=400&h=300"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full" glowColor="primary">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-app-text mb-3">{item.title}</h3>
                  <p className="text-app-text-muted">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Two Learning Pathways Section */}
      <Section className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Choose Your Journey to </span>
              <span className="text-accent">Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* VCA Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="vca-section"
            >
              <Card className="p-8 h-full" glowColor="primary">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap size={24} className="text-primary" />
                  <h3 className="text-2xl font-bold text-app-text">VCA - Vibe Coding Academy</h3>
                </div>
                <p className="text-lg text-primary mb-4">Next-Generation Development Skills</p>
                
                <div className="flex items-center gap-2 mb-6 text-app-text-muted">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Learn</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Build</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-primary">Launch</span>
                </div>

                <p className="text-app-text-muted mb-6">
                  Master full-stack development through real industry projects, then transform exceptional work into funded startups through our incubator partners.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-app-text mb-4">Key Advantages:</h4>
                  <ul className="space-y-3">
                    {[
                      "Industry-aligned curriculum with live projects",
                      "Direct mentorship from tech veterans and entrepreneurs",
                      "Project-to-startup pipeline through partner incubators",
                      "Global certification and career placement support"
                    ].map((advantage, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                        <span className="text-app-text-muted">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
                  <p className="text-app-text mb-1"><strong>Perfect for:</strong> Aspiring developers and tech entrepreneurs</p>
                  <p className="text-app-text-muted"><strong>Outcome:</strong> Job placement or startup launch</p>
                </div>
              </Card>
            </motion.div>

            {/* AiAta Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              id="aiata-section"
            >
              <Card className="p-8 h-full" glowColor="secondary">
                <div className="flex items-center gap-3 mb-4">
                  <Bot size={24} className="text-secondary" />
                  <h3 className="text-2xl font-bold text-app-text">AiAta - AI Agents Training Academy</h3>
                </div>
                <p className="text-lg text-secondary mb-4">AI Development with Market Access</p>
                
                <div className="flex items-center gap-2 mb-6 text-app-text-muted">
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Train</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Create</span>
                  <ArrowRight size={16} />
                  <span className="px-3 py-1 bg-secondary/20 rounded-full text-secondary">Deploy</span>
                </div>

                <p className="text-app-text-muted mb-6">
                  Develop specialized AI agents through hands-on labs, then deploy them to real enterprise clients through our marketplace platform.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-app-text mb-4">Key Advantages:</h4>
                  <ul className="space-y-3">
                    {[
                      "Real-world AI labs and cutting-edge infrastructure",
                      "Direct enterprise connections and project opportunities",
                      "Marketplace access with developer-focused revenue sharing",
                      "Ethics-first approach to responsible AI development"
                    ].map((advantage, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                        <span className="text-app-text-muted">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-6">
                  <p className="text-app-text mb-1"><strong>Perfect for:</strong> AI enthusiasts and future AI specialists</p>
                  <p className="text-app-text-muted"><strong>Outcome:</strong> AI expertise with monetization opportunities</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Academy Comparison Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Which Path Matches Your </span>
              <span className="text-accent">Goals?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">VCA Path</h3>
              <ul className="space-y-4">
                {[
                  "Full-stack development focus",
                  "Startup and employment opportunities",
                  "Industry mentorship and real projects",
                  "Intensive hands-on program"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-app-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">AiAta Path</h3>
              <ul className="space-y-4">
                {[
                  "AI agent specialization",
                  "Marketplace and enterprise opportunities",
                  "Cutting-edge AI infrastructure access",
                  "Comprehensive AI-focused program"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-app-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Next Steps Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-12">
            <span className="text-app-text">Ready to Transform Your </span>
            <span className="text-accent">Future?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                number: "1",
                title: "Choose Your Path",
                description: "Select VCA or AiAta based on your career goals"
              },
              {
                number: "2", 
                title: "Complete Application",
                description: "Submit your comprehensive application online"
              },
              {
                number: "3",
                title: "Join the Ecosystem", 
                description: "Begin your journey with the next cohort"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-12 h-12 rounded-full bg-accent text-white font-bold text-xl flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-app-text text-center">{step.title}</h3>
                </div>
                <p className="text-app-text-muted text-center">{step.description}</p>
                {index < 2 && (
                  <div className="hidden md:flex absolute top-6 -right-4 w-8 justify-center">
                    <ArrowRight size={20} className="text-accent" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Dynamic CTA Section */}
          {!loading && renderCTAButtons()}

          <p className="text-app-text-muted">Applications are reviewed on a rolling basis.</p>
        </div>
      </Section>
    </>
  );
};

export default Academies;