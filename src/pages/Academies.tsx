import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Briefcase, Globe, Users, Brain, Shield, File as Mobile, Cloud, Lock, Code, Notebook as Robot, Guitar as Hospital, LineChart, Leaf, ArrowRight, Calendar, Download, HelpCircle } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Academies: React.FC = () => {
  const vcaRef = useRef<HTMLDivElement>(null);
  const aiataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = 'Academies - GARC';
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
           <span className="text-gray-900 dark:text-white">World-Class AI & Technology </span>
            <span className="text-primary">Education</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            Two specialized academies designed to create India's next generation of tech leaders and AI innovators
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection(vcaRef)}
            >
              Explore VCA
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection(aiataRef)}
            >
              Explore AiAta
            </Button>
          </div>
        </div>
      </Section>

      {/* Intro Section */}
      <Section className="bg-gray-50 dark:bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            GARC's academies combine cutting-edge curriculum, industry partnerships, and guaranteed pathways to success. 
            Whether you want to master modern software development or specialize in AI agent creation, we provide the tools, 
            mentorship, and opportunities to transform your career.
          </p>
        </div>
      </Section>

      {/* VCA Section */}
      <Section ref={vcaRef} className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-white">Vibe Coding Academy </span>
              <span className="text-primary">(VCA)</span>
            </h2>
            <p className="text-xl text-primary mb-4">India's First Next-Generation Coding Academy</p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Master modern software development through immersive, project-based learning with direct 
              industry integration and a clear pathway to entrepreneurship.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Rocket size={24} />,
                title: "Project-to-Startup Pipeline",
                description: "Transform your projects into funded startups through our incubator network"
              },
              {
                icon: <Briefcase size={24} />,
                title: "Industry-Aligned Curriculum",
                description: "Learn from real-world projects with leading tech companies"
              },
              {
                icon: <Globe size={24} />,
                title: "Global Certification",
                description: "Internationally recognized credentials that open doors worldwide"
              },
              {
                icon: <Users size={24} />,
                title: "1-on-1 Mentorship",
                description: "Personal guidance from industry veterans and successful entrepreneurs"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Programs Offered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { icon: <Code size={24} />, title: "Full-Stack Development" },
              { icon: <Cloud size={24} />, title: "Cloud Architecture & DevOps" },
              { icon: <Shield size={24} />, title: "Cybersecurity" },
              { icon: <LineChart size={24} />, title: "Blockchain & Web3" },
              { icon: <Mobile size={24} />, title: "Mobile Development" },
              { icon: <Brain size={24} />, title: "AI/ML Integration" }
            ].map((program, index) => (
              <Card key={index} className="p-6" glowColor="primary">
                <div className="text-primary mb-3">{program.icon}</div>
                <h3 className="text-lg font-semibold text-white">{program.title}</h3>
              </Card>
            ))}
          </div>

          {/* Value Proposition */}
          <Card className="p-8 mb-8" glowColor="primary">
            <h3 className="text-2xl font-bold text-white mb-4">From Code to Company</h3>
            <p className="text-gray-300 mb-6">VCA students with exceptional projects get direct access to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Partner incubators (T-Hub, NASSCOM)
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Startup mentorship programs
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Seed funding opportunities
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                Technical infrastructure support
              </li>
            </ul>
          </Card>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              to="/apply/vca"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Apply to VCA
            </Button>
          </div>
        </div>
      </Section>

      {/* AiAta Section */}
      <Section ref={aiataRef} className="bg-surface/30" pattern="grid">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-4">
              <span className="text-white">AI Agents Training Academy </span>
              <span className="text-secondary">(AiAta)</span>
            </h2>
            <p className="text-xl text-secondary mb-4">Master AI Agent Development with Guaranteed Monetization</p>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Specialized training in developing, deploying, and monetizing AI agents with direct access 
              to our marketplace and enterprise clients.
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <LineChart size={24} />,
                title: "Income Guarantee",
                description: "Clear pathway to monetization through GARC Agentic Marketplace"
              },
              {
                icon: <Robot size={24} />,
                title: "Real-World AI Labs",
                description: "Hands-on experience with cutting-edge AI infrastructure"
              },
              {
                icon: <Briefcase size={24} />,
                title: "Enterprise Connections",
                description: "Direct access to corporate clients seeking AI solutions"
              },
              {
                icon: <Shield size={24} />,
                title: "Ethics & Safety First",
                description: "Comprehensive training in responsible AI development"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Specialization Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {[
              { icon: <Brain size={24} />, title: "Conversational AI & Chatbots" },
              { icon: <Robot size={24} />, title: "Computer Vision & Robotics" },
              { icon: <Hospital size={24} />, title: "Healthcare AI" },
              { icon: <LineChart size={24} />, title: "Financial AI & Trading" },
              { icon: <Leaf size={24} />, title: "Climate & Sustainability AI" }
            ].map((specialization, index) => (
              <Card key={index} className="p-6" glowColor="secondary">
                <div className="text-secondary mb-3">{specialization.icon}</div>
                <h3 className="text-lg font-semibold text-white">{specialization.title}</h3>
              </Card>
            ))}
          </div>

          {/* Monetization Promise */}
          <Card className="p-8 mb-8" glowColor="secondary">
            <h3 className="text-2xl font-bold text-white mb-4">Your AI Agents, Your Revenue</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-gray-300">70% revenue share on marketplace</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-gray-300">Direct enterprise project opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-gray-300">Continuous passive income potential</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <span className="text-gray-300">Global marketplace reach</span>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              to="/apply/aiata"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              Apply to AiAta
            </Button>
          </div>
        </div>
      </Section>

      {/* Comparison Section */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-lg text-center mb-12">
            <span className="text-white">Which Academy is </span>
            <span className="text-accent">Right for You?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8" glowColor="primary">
              <h3 className="text-2xl font-bold text-white mb-6">VCA</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <strong className="text-white">Perfect for:</strong>
                    <p className="text-gray-400">Aspiring full-stack developers and tech entrepreneurs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <strong className="text-white">Duration:</strong>
                    <p className="text-gray-400">6-12 months intensive</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <strong className="text-white">Outcome:</strong>
                    <p className="text-gray-400">Job-ready skills + startup opportunities</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <strong className="text-white">Focus:</strong>
                    <p className="text-gray-400">Modern software development</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-8" glowColor="secondary">
              <h3 className="text-2xl font-bold text-white mb-6">AiAta</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <div>
                    <strong className="text-white">Perfect for:</strong>
                    <p className="text-gray-400">AI enthusiasts and future AI entrepreneurs</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <div>
                    <strong className="text-white">Duration:</strong>
                    <p className="text-gray-400">8-14 months comprehensive</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <div>
                    <strong className="text-white">Outcome:</strong>
                    <p className="text-gray-400">AI expertise + monetization channels</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <div>
                    <strong className="text-white">Focus:</strong>
                    <p className="text-gray-400">AI agent development</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Admissions Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-12">
            <span className="text-white">Ready to </span>
            <span className="text-accent">Transform Your Future?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "1", title: "Choose Your Path", description: "Select VCA or AiAta based on your goals" },
              { number: "2", title: "Apply Online", description: "Complete our comprehensive application" },
              { number: "3", title: "Begin Your Journey", description: "Join the next cohort of innovators" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              variant="primary"
              size="lg"
              to="/apply/vca"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Start VCA Application
            </Button>
            <Button
              variant="secondary"
              size="lg"
              to="/apply/aiata"
              icon={<Calendar size={20} />}
              iconPosition="left"
            >
              Start AiAta Application
            </Button>
          </div>

          <p className="text-gray-300">Limited seats available. Next cohort starts June 2024</p>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-lg text-center mb-12">
            <span className="text-white">Frequently Asked </span>
            <span className="text-accent">Questions</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                question: "What are the eligibility criteria?",
                answer: "Basic programming knowledge for VCA, and mathematics/programming background for AiAta. Each application is evaluated holistically."
              },
              {
                question: "Is there financial assistance available?",
                answer: "Yes, we offer merit-based scholarships and flexible payment plans. We also partner with leading banks for education loans."
              },
              {
                question: "What kind of placement support do you provide?",
                answer: "Comprehensive career support including resume building, interview preparation, and direct access to our network of hiring partners."
              },
              {
                question: "Can I switch between academies?",
                answer: "Yes, students can transfer between academies within the first month, subject to eligibility and available seats."
              },
              {
                question: "What makes GARC academies different?",
                answer: "Our focus on practical skills, direct industry integration, and guaranteed pathways to either employment or entrepreneurship sets us apart."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-4">
                  <div className="text-accent mt-1">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Academies;