import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navbar from './Components/Navbar';
import Marquee from './Components/Marquee';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Documents from './Components/Documents';
import Forms from './Components/Forms';
import Updates from './Components/Updates';
import Trending from './Components/Trending';
import Links from './Components/Links';
import Events from './Components/Events';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Internship from './Components/InternalPages/Internship';
import EngageWithUs from './Components/InternalPages/EngageWithUs';
import Rvdp from './Components/InternalPages/Rvdp';
import Pentathon from './Components/InternalPages/Pentathon';
import Crowdsourcing from './Components/InternalPages/Crowdsourcing';
import SIH from './Components/InternalPages/SIH';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useScrollToTop from './Components/useScrollToTop';

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);
  useScrollToTop();

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
  
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  return (
    <div>
      <Navbar/>
      {children}
      <Footer />
      {showScroll && (
        <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
        </div>
      )}
    </div>
  );
};

const Home = () => (
  <div>
    <div>
      <Marquee/>
    </div>
    <div>
      <Hero />
    </div>
    <div id="about-us">
      <AboutUs />
    </div>
    <div id="updates">
      <Updates />
    </div>
    <div id="trending">
      <Trending />
    </div>
    <div id="forms">
      <Forms />
    </div>
    <div id="documents">
      <Documents />
    </div>
    <div id="links">
      <Links />
    </div>
    <div id="events">
      <Events />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nciipc-internship" element={<Internship />} />
          <Route path="/engage" element={<EngageWithUs />} />
          <Route path="/rvdp" element={<Rvdp />} />
          <Route path="/pentathon-2024" element={<Pentathon />} />
          <Route path="/crowdsourcing" element={<Crowdsourcing />} />
          <Route path="/sih" element={<SIH />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
