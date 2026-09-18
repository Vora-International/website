import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import WashCheckModal from './components/WashCheckModal';

import Home from './pages/Home';
import Solutions from './pages/Solutions';
import HowItWorks from './pages/HowItWorks';
import Foundation from './pages/Foundation';
import About from './pages/About';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Safeguarding from './pages/Safeguarding';

// Auto Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate antialiased">
        <Navbar onRequestWashCheck={handleOpenModal} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onRequestWashCheck={handleOpenModal} />} />
            <Route path="/solutions" element={<Solutions onRequestWashCheck={handleOpenModal} />} />
            <Route path="/how-it-works" element={<HowItWorks onRequestWashCheck={handleOpenModal} />} />
            <Route path="/foundation" element={<Foundation onRequestWashCheck={handleOpenModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/safeguarding" element={<Safeguarding />} />
          </Routes>
        </main>

        <Footer onRequestWashCheck={handleOpenModal} />
        <WhatsAppButton />
        <WashCheckModal isOpen={isModalOpen} onClose={handleCloseModal} />
      </div>
    </Router>
  );
}
