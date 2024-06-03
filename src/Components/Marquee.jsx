import React from 'react';
import './Marquee.css';

const Marquee = ({ text, onClick }) => {
  return (
    <div className="marquee-container" onClick={onClick}>
      <div className="marquee-content">
        <span className="glow-label">New</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;
