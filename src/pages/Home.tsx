import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Opportunity from '../components/home/Opportunity';
import Vision from '../components/home/Vision';
import PartnershipPathways from '../components/home/PartnershipPathways';
import Credibility from '../components/home/Credibility';
import FinalCTA from '../components/home/FinalCTA';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'GARC - The Future of AI Begins Here';
  }, []);

  return (
    <>
      <Hero />
      <Opportunity />
      <Vision />
      <PartnershipPathways />
      <Credibility />
      <FinalCTA />
    </>
  );
};

export default Home;