import React from 'react'
import "./Marquee.css"

const scrollToSection = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Marquee({updatesRef}) {
  return (

    <div className="marquee">
       <div className='marquee-container'>
       <div className="marquee-content">
         
          <span className="marquee-text">
             <span className="glow-label">New</span>
            <a
              className="md:text-md text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(updatesRef);
              }}
            >
              Newsletter for April 2024 has been released.
            </a>
          </span>
          <span className="marquee-text">
          <span className="glow-label">New</span>

            <a
              className="md:text-md text-sm cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(updatesRef);
              }}
            >
              CVE Reports for May 2024 have been released.
            </a>
          </span>
        </div>
          
    </div>
  </div>
  )
}