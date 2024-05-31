import React, { useRef } from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Documents from './Components/Documents'
import Updates from './Components/Updates';
import Links from './Components/Links';
import Events from './Components/Events'

function App() {
  const navRef = useRef(null)
  const heroRef = useRef(null);
  const aboutUsRef = useRef(null);
  const updatesRef = useRef(null);
  const documentsRef = useRef(null);
  const linksRef = useRef(null);
  const eventsRef = useRef(null)

  return (
    <div className="App">
      <Navbar
        navRef={navRef}
        heroRef={heroRef}
        aboutUsRef={aboutUsRef}
        updatesRef={updatesRef}
        documentsRef={documentsRef}
        linksRef={linksRef}
      />
      {/* <div ref={heroRef}>
        <Hero />
      </div> */}
      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div ref={updatesRef}>
        <Updates />
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
    </div>
  );
}

export default App;