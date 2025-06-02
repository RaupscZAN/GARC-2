import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import Opportunity from '../components/home/Opportunity';
import Vision from '../components/home/Vision';
import PartnershipPathways from '../components/home/PartnershipPathways';
import Credibility from '../components/home/Credibility';
import FinalCTA from '../components/home/FinalCTA';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'GARC - India\'s Future in AI Begins Here';
  }, []);

  return (
    <>
      <HeroSection />
      <Opportunity />
      <Vision />
      <PartnershipPathways />
      <Credibility />
      <FinalCTA />
    </>
  );
};

export default Home;