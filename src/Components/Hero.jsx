import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import images
import img1 from './Images/heroImg1.png';
import img2 from './Images/heroImg2.png';
import img3 from './Images/heroImg3.png';
import img4 from './Images/heroImg4.png';
import img5 from './Images/heroImg5.png';
import img6 from './Images/heroImg6.png';
import img7 from './Images/heroImg7.png';

import imgSm1 from './Images/heroImgSm1.png';
import imgSm2 from './Images/heroImgSm2.png';
import imgSm3 from './Images/heroImgSm3.png';
import imgSm4 from './Images/heroImgSm4.png';
import imgSm5 from './Images/heroImgSm5.png';
import imgSm6 from './Images/heroImgSm6.png';
import imgSm7 from './Images/heroImgSm7.png';


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { img: img1, imgSm: imgSm1, heading: 'Slide 1', description: 'Description for slide 1' },
    { img: img2, imgSm: imgSm2, heading: 'Slide 2', description: 'Description for slide 2' },
    { img: img3, imgSm: imgSm3, heading: 'Slide 3', description: 'Description for slide 3' },
    { img: img4, imgSm: imgSm4, heading: 'Slide 4', description: 'Description for slide 4' },
    { img: img5, imgSm: imgSm5, heading: 'Slide 4', description: 'Description for slide 4' },
    { img: img6, imgSm: imgSm6, heading: 'Slide 4', description: 'Description for slide 4' },
    { img: img7, imgSm: imgSm7, heading: 'Slide 4', description: 'Description for slide 4' },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDashClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero">
      <div className="hero-image">
        <img src={slides[currentIndex].img} alt={slides[currentIndex].heading} className="hero-img" />
        <img src={slides[currentIndex].imgSm} alt={slides[currentIndex].heading} className="hero-img-sm" />
        {/* <div className="hero-text">
          <h2 className="hero-heading">{slides[currentIndex].heading}</h2>
          <p className="hero-description">{slides[currentIndex].description}</p>
        </div> */}
      </div>
      <div className={`hero-dashes ${window.innerWidth <= 768 ? 'center' : 'bottom-left'}`}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`hero-dash ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDashClick(index)}
          >
            &mdash;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Hero;