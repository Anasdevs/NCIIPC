import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
import Internship from './Components/InternalPages/Internship.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import EngageWithUs from './Components/InternalPages/EngageWithUs.jsx';
import Rvdp from './Components/InternalPages/Rvdp.jsx';
import Pentathon from './Components/InternalPages/Pentathon.jsx';
import Crowdsourcing from './Components/InternalPages/Crowdsourcing.jsx';
import SIH from './Components/InternalPages/SIH.jsx';

const App = () => {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const aboutUsRef = useRef(null);
  const trendingRef = useRef(null);
  const updatesRef = useRef(null);
  const documentsRef = useRef(null);
  const formsRef = useRef(null);
  const linksRef = useRef(null);
  const eventsRef = useRef(null);
  const footerRef = useRef(null);
  const marqueeRef = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar
            navRef={navRef}
            aboutUsRef={aboutUsRef}
            updatesRef={updatesRef}
            trendingRef={trendingRef}
            documentsRef={documentsRef}
            formsRef={formsRef}
            linksRef={linksRef}
            eventsRef={eventsRef}
          />
          <Marquee updatesRef={updatesRef} />
          <div ref={marqueeRef}>
            {/* Marquee content goes here */}
          </div>
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutUsRef}>
            <AboutUs />
          </div>
          <div ref={updatesRef}>
            <Updates />
          </div>
          <div ref={trendingRef}>
            <Trending />
          </div>
          <div ref={formsRef}>
            <Forms />
          </div>
          <div ref={documentsRef}>
            <Documents />
          </div>
          <div ref={linksRef}>
            <Links />
          </div>
          <div ref={eventsRef}>
            <Events />
          </div>
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      )
    },
    {
      path: "/nciipc-internship",
      element: <Internship />
    },
    {
      path:"/engage",
      element: <EngageWithUs/>
    },
    {
      path:"/rvdp",
      element: <Rvdp/>
    },
    {
      path:"/pentathon-2024",
      element: <Pentathon/>
    },
    {
      path:"/crowdsourcing",
      element: <Crowdsourcing/>
    },
    {
      path:"/sih",
      element: <SIH/>
    }
  ]);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const [showScroll, setShowScroll] = useState(false);

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
    <div className="App">
      <RouterProvider router={router} />
      <div 
        className="scroll-to-top" 
        onClick={() => scrollToSection(navRef)}
      >
        <FontAwesomeIcon icon={faAngleUp} className="text-2xl" />
      </div>
    </div>
  );
};

export default App;