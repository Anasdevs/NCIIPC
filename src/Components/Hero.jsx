import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import img1 from './Images/heroImgNew1.png';
import img2 from './Images/heroImgNew2.png';
import img3 from './Images/heroImgNew3.png';
import img4 from './Images/heroImgNew4.png';
import imgSm1 from './Images/heroImgSm1.png';
import imgSm2 from './Images/heroImgSm2.png';
import imgSm3 from './Images/heroImgSm3.png';
import imgSm4 from './Images/heroImgSm4.png';

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 450);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 450);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isSmallScreen
    ? [imgSm1, imgSm2, imgSm3, imgSm4]
    : [img1, img2, img3, img4];

  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 2000;

    nextDom.onclick = function() {
      showSlider('next');    
    };

    prevDom.onclick = function() {
      showSlider('prev');    
    };

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');

      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <div>
      <div className="carousel">
        <div className="list">
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="thumbnail">
          {images.map((image, index) => (
            <div className="item" key={index}>
              <img src={image} alt={`Thumbnail ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>
        <div className="time"></div>
      </div>
    </div>
  );
};

export default Hero;