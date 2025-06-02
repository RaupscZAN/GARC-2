import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Handshake, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';

const FinalCTA: React.FC = () => {
  return (
    <Section className="relative overflow-hidden bg-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glowing Effects */}
      <div className="absolute -top-[30%] -right-[20%] w-[60%] h-[60%] bg-glow-primary rounded-full blur-[120px] opacity-5"></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] bg-glow-secondary rounded-full blur-[120px] opacity-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4">
            <span className="text-white">Ready to Build </span>
            <span className="bg-gradient-to-r from-primary-300 to-secondary-300 bg-clip-text text-transparent">
              AI Future Together?
            </span>
          </h2>
          <p className="text-xl text-gray-300">
            Whether you're a student or organization - there's a place for you in our ecosystem
          </p>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card 
              className="p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              glowColor="primary"
            >
              <div className="text-primary mb-6">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Students</h3>
              <p className="text-gray-300 mb-8">
                Master AI & coding with guaranteed career pathways
              </p>
              <Button 
                variant="primary"
                to="/academies"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Explore Student Programs
              </Button>
            </Card>
          </motion.div>

          {/* Organization Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card 
              className="p-8 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              glowColor="secondary"
            >
              <div className="text-secondary mb-6">
                <Handshake size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">For Organizations</h3>
              <p className="text-gray-300 mb-8">
                Join us in shaping AI ecosystem
              </p>
              <Button 
                variant="secondary"
                to="/partnerships"
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Partner With Us
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default FinalCTA;