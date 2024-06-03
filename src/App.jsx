import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Marquee from './Components/Marquee';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Documents from './Components/Documents'
import Forms from './Components/Forms';
import Updates from './Components/Updates';
import Links from './Components/Links';
import Events from './Components/Events'
import Footer from './Components/Footer';


function App() {
  const navRef = useRef(null);
  const marqueeRef = useRef(null);
  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const updatesRef = useRef(null);
  const documentsRef = useRef(null);
  const formsRef = useRef(null);
  const linksRef = useRef(null);
  const eventsRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        navRef={navRef}
        heroRef={heroRef}
        aboutUsRef={aboutUsRef}
        updatesRef={updatesRef}
        documentsRef={documentsRef}
        formsRef={formsRef}
        linksRef={linksRef}
        eventsRef={eventsRef}
      />
      <div ref={marqueeRef}>
        <Marquee
        updatesRef={updatesRef}
        />
      </div>
      <div ref={heroRef}>
        <Hero
         />
      </div>
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={updatesRef}>
        <Updates />
      </div>
      <div ref={documentsRef}>
        <Documents />
      </div>
      <div ref={formsRef}>
        <Forms />
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
  );
}

export default App;