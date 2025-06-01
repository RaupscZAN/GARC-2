import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Users, BookOpen, ArrowRight, Heart } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import GlowingText from '../components/ui/GlowingText';
import Card from '../components/ui/Card';

const coreValues = [
  {
    icon: <Target size={24} />,
    title: 'Innovation Excellence',
    description: 'Pioneering breakthrough AI technologies and research methodologies.',
    color: 'primary'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Global Standards',
    description: 'Maintaining world-class benchmarks in education, research, and technology.',
    color: 'secondary'
  },
  {
    icon: <Users size={24} />,
    title: 'Collaborative Spirit',
    description: 'Fostering partnerships across academia, industry, and government.',
    color: 'primary'
  },
  {
    icon: <Brain size={24} />,
    title: 'Ethical Leadership',
    description: 'Promoting responsible AI development with human values at the center.',
    color: 'secondary'
  },
  {
    icon: <Heart size={24} />,
    title: 'Inclusive Growth',
    description: 'Ensuring AI benefits reach all segments of society and regions of India.',
    color: 'accent'
  }
];

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About GARC - Global AI Research & Coding';
  }, []);

  return (
    <>
      <Section className="pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Brain size={28} className="text-primary" />
              <h2 className="text-lg md:text-xl font-medium text-app-text-muted">
                Global AI Research & Coding
              </h2>
            </div>
            
            <h1 className="heading-xl mb-6">
              <span className="text-app-text">About </span>
              <GlowingText color="primary" element="span" gradient>
                GARC
              </GlowingText>
            </h1>
            
            <p className="text-lg text-app-text-muted mb-8 max-w-xl">
              Global AI Research & Coding (GARC) is India's premier institution dedicated to 
              establishing the nation as a global AI superpower through world-class education, 
              research, and industry partnerships.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 rounded-xl overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Brain size={120} className="text-primary" />
                  <div className="absolute inset-0 bg-glow-primary rounded-full blur-xl -z-10"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="heading-md mb-6">Executive Summary</h2>
            <div className="space-y-4 text-app-text-muted">
              <p>
                Global AI Research & Coding (GARC) represents India's strategic initiative to become 
                a world leader in artificial intelligence research, education, and industry application. 
                By bringing together the best minds in academia, industry veterans, and innovative startups, 
                GARC creates a comprehensive ecosystem that addresses every aspect of AI development and deployment.
              </p>
              <p>
                Through our specialized academies, cutting-edge research infrastructure, and industry partnerships, 
                we're building a sustainable model that generates both intellectual and economic value, positioning 
                India at the forefront of the global AI revolution.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="heading-md mb-6">Vision & Mission</h2>
            <Card className="p-6 mb-8" glowColor="primary">
              <h3 className="text-xl font-semibold text-app-text mb-3">Our Vision</h3>
              <p className="text-app-text-muted">
                To establish India as a global AI superpower through excellence in research, 
                education, and industry application, driving innovation that benefits humanity.
              </p>
            </Card>
            
            <Card className="p-6" glowColor="secondary">
              <h3 className="text-xl font-semibold text-app-text mb-3">Our Mission</h3>
              <p className="text-app-text-muted">
                To create a world-class AI ecosystem that fosters collaborative research, 
                develops exceptional talent, and accelerates the responsible application of 
                AI technologies across sectors, positioning India as a leader in the global AI landscape.
              </p>
            </Card>
          </div>
        </div>
      </Section>
      
      <Section className="bg-surface/30" pattern="grid">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            <span className="text-app-text">Our Core </span>
            <span className="text-primary">Values</span>
          </h2>
          <p className="text-app-text-muted max-w-2xl mx-auto">
            These principles guide everything we do at GARC, from research priorities to educational 
            approaches and partnership development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full" glowColor={value.color as 'primary' | 'secondary' | 'accent'}>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-${value.color}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-app-text mb-3">{value.title}</h3>
                <p className="text-app-text-muted">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
      
      <Section>
        <div className="bg-surface/60 backdrop-blur-sm border border-white/10 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-glow-accent opacity-20 blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="heading-md mb-4">India's AI Transformation</h2>
              <p className="text-app-text-muted mb-6">
                GARC plays a central role in India's AI transformation by developing indigenous 
                capabilities, fostering global partnerships, and creating an ecosystem that 
                supports innovation and growth. Our initiatives align with national priorities 
                while maintaining a global outlook and standards.
              </p>
              <Button 
                variant="accent" 
                to="/join"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Join Our Mission
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h4 className="text-app-text font-semibold mb-2">Education</h4>
                <div className="text-3xl font-bold text-accent mb-1">10K+</div>
                <p className="text-app-text-muted text-sm">AI Professionals Trained</p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h4 className="text-app-text font-semibold mb-2">Research</h4>
                <div className="text-3xl font-bold text-accent mb-1">200+</div>
                <p className="text-app-text-muted text-sm">Publications & Patents</p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h4 className="text-app-text font-semibold mb-2">Startups</h4>
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <p className="text-app-text-muted text-sm">AI Ventures Launched</p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                <h4 className="text-app-text font-semibold mb-2">Partners</h4>
                <div className="text-3xl font-bold text-accent mb-1">150+</div>
                <p className="text-app-text-muted text-sm">Global Collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default About;