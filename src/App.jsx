import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import PentestingScheme from './Components/InternalPages/PentestingScheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useScrollToTop from './Components/useScrollToTop';
import { Helmet } from 'react-helmet';


const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);
  useScrollToTop();

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
  
    } else if (showScroll && window.scrollY <= 300) {
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
    <Helmet>
      <title>National Critical Information Infrastructure Protection Centre (NCIIPC)</title>
    </Helmet>
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
          <Route path="/" element={
            <>
              <Helmet>
                <title>National Critical Information Infrastructure Protection Centre (NCIIPC)</title>
              </Helmet>
              <Home />
            </>
          } />
          <Route path="/nciipc-internship" element={

            <Internship />
          } />
          <Route path="/engage-with-nciipc" element={

            <EngageWithUs />
          } />
          <Route path="/rvdp-nciipc" element={

            <Rvdp />
          } />
          <Route path="/pentathon-2024" element={

            <Pentathon />
          } />
          <Route path="/crowdsourcing" element={

            <Crowdsourcing />
          } />
          <Route path="/sih-2023" element={

            <SIH />
          } />
          <Route path="/forms-nciipc" element={
            <>
              <Helmet>
                <title>NCIIPC Forms | NCIIPC</title>
              </Helmet>
              <Forms />
            </>
          } />
          <Route path="/nciipc-guidelines" element={
            <>
              <Helmet>
                <title>NCIIPC Guidelines | NCIIPC</title>
              </Helmet>
              <Documents />
            </>
          } />
          <Route path="/about-nciipc" element={
            <>
              <Helmet>
                <title>About NCIIPC | NCIIPC</title>
              </Helmet>
              <AboutUs />
            </>
          } />
          <Route path="/nciipc-updates" element={
            <>
              <Helmet>
                <title>NCIIPC Updates | NCIIPC</title>
              </Helmet>
              <Updates />
            </>
          } />
          <Route path="/pentesting-scheme-cii" element={
            <PentestingScheme />

          } />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
