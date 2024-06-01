import React, { useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import './Hero.css';
import heroImg1 from './Images/heroImg1.png';
import heroImg2 from './Images/heroImg2.png';
import heroImg3 from './Images/heroImg3.png';
import heroImg4 from './Images/heroImg4.png';

const Hero = () => {
  useEffect(() => {
    const options = {
      accessibility: true,
      prevNextButtons: true,
      pageDots: true,
      setGallerySize: false,
      wrapAround: true,
      autoPlay: 2000, // Auto move every 2 seconds
      arrowShape: {
        x0: 10,
        x1: 60,
        y1: 50,
        x2: 60,
        y2: 45,
        x3: 15
      }
    };

    const carousel = document.querySelector('[data-carousel]');
    const slides = document.getElementsByClassName('carousel-cell');
    const flkty = new Flickity(carousel, options);

    flkty.on('scroll', () => {
      flkty.slides.forEach((slide, i) => {
        const image = slides[i];
        const x = (slide.target + flkty.x) * -1 / 3;
        image.style.backgroundPosition = `${x}px`;
      });
    });

    return () => flkty.destroy();
  }, []);

  return (
    <div className="hero-slider" data-carousel>
      <div className="carousel-cell" style={{ backgroundImage: `url(${heroImg1})` }}>
        <div className="overlay"></div>
        <div className="inner">
          {/* <h2 className="slide-title">Welcome to NCIIPC</h2>
          <p className="slide-text">Protecting the nation's critical information infrastructure.</p> */}
        </div>
      </div>
      <div className="carousel-cell" style={{ backgroundImage: `url(${heroImg2})` }}>
        <div className="overlay"></div>
        <div className="inner">
          
        </div>
      </div>
      <div className="carousel-cell" style={{ backgroundImage: `url(${heroImg3})` }}>
        <div className="overlay"></div>
        <div className="inner">
       
        </div>
      </div>
      <div className="carousel-cell" style={{ backgroundImage: `url(${heroImg4})` }}>
        <div className="overlay"></div>
        <div className="inner">
       
        </div>
      </div>
    </div>
  );
}

export default Hero;