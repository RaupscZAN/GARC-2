import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Academies from './pages/Academies';
import ResearchInnovation from './pages/ResearchInnovation';
import Partnerships from './pages/Partnerships';
import VentureEcosystem from './pages/VentureEcosystem';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import PageSections from './pages/admin/PageSections';
import PageSectionForm from './pages/admin/PageSectionForm';
import CallToActions from './pages/admin/CallToActions';

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
        {/* Public routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academies" element={<Academies />} />
          <Route path="research-innovation" element={<ResearchInnovation />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="venture-ecosystem" element={<VentureEcosystem />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          
          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminDashboard />} />
          <Route path="sections" element={<PageSections />} />
          <Route path="sections/new" element={<PageSectionForm />} />
          <Route path="sections/edit/:id" element={<PageSectionForm />} />
          <Route path="cta" element={<CallToActions />} />
          {/* Additional admin routes will be added here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;