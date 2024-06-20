import React from 'react';
import marqueeGif from './Images/marqueeImg.gif';
import './Marquee.css';

export default function Marquee() {
  const handleClick = (event, elementId) => {
    event.preventDefault();
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="marquee">
        <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-text">
              <img src={marqueeGif} alt="New" className="marquee-gif" />
              <a
                href="#updates"
                className="md:text-md text-sm cursor-pointer"
                onClick={(e) => handleClick(e, 'updates')}
                aria-label="Newsletter Update"
              >
                Newsletter for April 2024 has been released.
              </a>
            </span>
            <span className="marquee-text">
              <img src={marqueeGif} alt="New" className="marquee-gif" />
              <a
                href="#updates"
                className="md:text-md text-sm cursor-pointer"
                onClick={(e) => handleClick(e, 'updates')}
                aria-label="CVE Update"
              >
                CVE Report for May 2024 has been released.
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
