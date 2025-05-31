import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academies from './pages/Academies';
import ResearchInnovation from './pages/ResearchInnovation';
import Partnerships from './pages/Partnerships';
import VentureEcosystem from './pages/VentureEcosystem';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  // Scroll to top on route change
  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academies" element={<Academies />} />
          <Route path="research-innovation" element={<ResearchInnovation />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="venture-ecosystem" element={<VentureEcosystem />} />
          
          {/* Add other routes here */}
          {/* <Route path="join" element={<Join />} /> */}
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;