import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import ContactForm from '../components/ContactForm';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - GARC';
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2944&auto=format&fit=crop")'
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
        
        <div className="container mx-auto px-4 text-center relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Pill header */}
            <div className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
              <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-white">Let's Build the </span>
              <br />
              <span className="bg-gradient-to-r from-primary-300 via-secondary-300 to-accent-300 bg-clip-text text-transparent">
                Future Together
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you're interested in partnerships, have questions about our programs, or want to explore collaboration opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <Section className="bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Mail size={24} />,
                title: 'Email Us',
                content: 'info@garc.tech',
                action: 'mailto:info@garc.tech',
                color: 'primary'
              },
              {
                icon: <Phone size={24} />,
                title: 'Call Us',
                content: '+91 98844 02971',
                action: 'tel:+919884402971',
                color: 'secondary'
              },
              {
                icon: <Calendar size={24} />,
                title: 'Schedule a Call',
                content: 'Book a meeting',
                action: 'https://calendly.com/globalai-research/collaboration-call',
                color: 'accent'
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center p-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 rounded-full bg-${contact.color}/20 flex items-center justify-center mx-auto mb-4 text-${contact.color}`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-app-text mb-2">{contact.title}</h3>
                  <p className="text-app-text-muted mb-4">{contact.content}</p>
                  <a
                    href={contact.action}
                    target={contact.action.startsWith('http') ? '_blank' : undefined}
                    rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center text-${contact.color} hover:underline font-medium`}
                  >
                    {contact.title === 'Schedule a Call' ? 'Book Now' : 'Contact'}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-4">
              <span className="text-app-text">Send Us a </span>
              <span className="text-primary">Message</span>
            </h2>
            <p className="text-app-text-muted max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible. 
              We're excited to hear about your ideas and explore how we can work together.
            </p>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* Quick Actions */}
      <Section className="bg-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg mb-8">
            <span className="text-app-text">Ready to </span>
            <span className="text-accent">Get Started?</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-app-text mb-4">Join Our Community</h3>
              <p className="text-app-text-muted mb-6">
                Become part of the GARC ecosystem and help shape the future of AI in India.
              </p>
              <Button
                variant="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeKj9DeXunZDnUUJdt-ldvKJqRQPurZleNB2lJ4owFL91lPtQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Join GARC
              </Button>
            </div>

            <div className="p-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-app-text mb-4">Partnership Opportunities</h3>
              <p className="text-app-text-muted mb-6">
                Explore strategic partnerships and collaboration opportunities with GARC.
              </p>
              <Button
                variant="secondary"
                href="https://calendly.com/globalai-research/collaboration-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                Schedule Partnership Call
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;