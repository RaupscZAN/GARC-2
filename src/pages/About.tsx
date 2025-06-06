import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, BookOpen, ArrowRight, Heart, Code, Bot, Server, Rocket, TrendingUp, Globe } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About GARC - Global AI Research & Coding';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://media.gettyimages.com/id/1148091793/photo/technology-abstract.jpg?s=612x612&w=0&k=20&c=bmMTM4U6Nyt05dd6xHvgBm09efBal3En0yAmlTRXaI4=")'
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
                Global AI Research & Coding
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Building the Future of </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              GARC creates the complete ecosystem needed to lead the global AI revolution - 
              from world-class education to cutting-edge research to thriving startups
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <Button 
                variant="primary"
                size="lg"
                href="#our-approach"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
                className="min-w-[200px] bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Our Approach
              </Button>

              <Button 
                variant="outline"
                size="lg"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px] border-white/20 hover:bg-white/5 text-white"
              >
                Join GARC
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="text-app-text">The Moment is </span>
                <span className="text-accent">Now</span>
              </h2>
              <p className="text-lg text-app-text-muted leading-relaxed">
                India has the talent, the ambition, and the opportunity to become the global AI epicenter. 
                What's been missing is a comprehensive ecosystem that connects education, research, 
                industry, and entrepreneurship into one unified force.
              </p>
            </div>

            <div className="relative">
              <img 
                src="https://tfvzrxzmsltgwtkotmyg.supabase.co/storage/v1/object/sign/garc-images/logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83ZDljN2MwZS05ZWEyLTQxOGUtOTE2Zi05NjY2NDk5YTA4MjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJnYXJjLWltYWdlcy9sb2dvLnBuZyIsImlhdCI6MTc0OTIxNzQ3MCwiZXhwIjoyNjEzMjE3NDcwfQ.XJjG0Jm8La7ShNmXLN2DK6fDl_7Ac6rnKcWKv_ue6fM"
                alt="AI and technology visualization"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Our Approach - Four Pillars */}
      <Section id="our-approach" className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Our Complete </span>
              <span className="text-primary">Ecosystem Approach</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Four integrated pillars that create pathways from learning to earning, 
              from research to real-world impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Code size={24} />,
                title: 'Vibe Coding Academy',
                description: 'Industry-connected education with guaranteed pathways to employment and entrepreneurship',
                color: 'primary',
                to: '/academies'
              },
              {
                icon: <Bot size={24} />,
                title: 'AI Agents Training Academy',
                description: 'Specialized AI training with direct monetization through our marketplace platform',
                color: 'secondary',
                to: '/academies'
              },
              {
                icon: <Server size={24} />,
                title: 'Data Center Consortium',
                description: 'World-class infrastructure powering global AI research and development',
                color: 'accent',
                to: '/research-innovation'
              },
              {
                icon: <Rocket size={24} />,
                title: 'Venture Studio & Marketplace',
                description: 'Complete support from student projects to funded startups and AI monetization',
                color: 'primary',
                to: '/venture-ecosystem'
              }
            ].map((pillar, index) => (
              <Card key={index} className="p-8" glowColor={pillar.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`text-${pillar.color} mb-4`}>{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{pillar.title}</h3>
                <p className="text-app-text-muted mb-6">{pillar.description}</p>
                <Button 
                  variant="outline" 
                  to={pillar.to}
                  icon={<ArrowRight size={16} />}
                  iconPosition="right"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Foundation Section - Mission, Vision, Values */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Built on Strong </span>
              <span className="text-secondary">Foundations</span>
            </h2>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Our Vision</h3>
              <p className="text-app-text-muted leading-relaxed">
                To establish a global epicenter of artificial intelligence innovation, 
                education, and research, creating a sustainable ecosystem that nurtures world-class 
                AI talent and drives technological advancement for societal benefit.
              </p>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-app-text mb-6">Our Mission</h3>
              <p className="text-app-text-muted leading-relaxed">
                GARC democratizes access to cutting-edge AI education through innovative academies, 
                fosters breakthrough research via collaborative partnerships, and bridges the gap 
                between academic excellence and industry application.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <Target size={20} />,
                title: 'Innovation Excellence',
                description: 'Pushing boundaries of AI education and research'
              },
              {
                icon: <Globe size={20} />,
                title: 'Global Standards',
                description: 'Maintaining world-class quality in all initiatives'
              },
              {
                icon: <Users size={20} />,
                title: 'Collaborative Spirit',
                description: 'Building bridges between academia, industry, government'
              },
              {
                icon: <Brain size={20} />,
                title: 'Ethical Leadership',
                description: 'Promoting responsible AI development and deployment'
              },
              {
                icon: <Heart size={20} />,
                title: 'Inclusive Growth',
                description: 'Ensuring equitable access across diverse communities'
              }
            ].map((value, index) => (
              <Card key={index} className="p-6 text-center" glowColor="accent">
                <div className="flex justify-center text-accent mb-3">{value.icon}</div>
                <h4 className="text-lg font-semibold text-app-text mb-2">{value.title}</h4>
                <p className="text-app-text-muted text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Current Phase Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            <span className="text-app-text">Foundation Phase: </span>
            <span className="text-accent">Building the Future</span>
          </h2>
          <p className="text-xl text-app-text-muted mb-12">
            We're in our foundation phase, establishing partnerships, building infrastructure, 
            and creating the framework that will power global AI transformation. 
            Join us in building something unprecedented.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                phase: "Phase 1",
                title: "Foundation",
                status: "Current",
                description: "Securing partnerships, building team, developing curriculum"
              },
              {
                phase: "Phase 2", 
                title: "Launch",
                status: "Next",
                description: "Academy pilot programs, first research projects, infrastructure"
              },
              {
                phase: "Phase 3",
                title: "Scale",
                status: "Future",
                description: "Global expansion, full ecosystem operation, industry leadership"
              }
            ].map((phase, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary font-semibold mb-2">{phase.phase}</div>
                <h4 className="text-xl font-bold text-app-text mb-2">{phase.title}</h4>
                <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 ${
                  phase.status === 'Current' ? 'bg-accent/20 text-accent' :
                  phase.status === 'Next' ? 'bg-secondary/20 text-secondary' :
                  'bg-primary/20 text-primary'
                }`}>
                  {phase.status}
                </div>
                <p className="text-app-text-muted text-sm">{phase.description}</p>
              </Card>
            ))}
          </div>

          <Button 
            variant="primary"
            size="lg"
            href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight size={20} />}
            iconPosition="right"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
          >
            Be Part of the Foundation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default About;