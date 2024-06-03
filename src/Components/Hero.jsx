import React, { useEffect, useRef } from 'react';
import './Hero.css';
import img1 from './Images/heroImg1.png';
import img2 from './Images/heroImg2.png';
import img3 from './Images/heroImg3.png';
import img4 from './Images/heroImg4.png';
import Marquee from './Marquee';

const Hero = ({updatesRef}) => {

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const nextDom = document.getElementById('next');
    const prevDom = document.getElementById('prev');
    const carouselDom = document.querySelector('.carousel');
    const SliderDom = carouselDom.querySelector('.carousel .list');
    const thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 20000;
    let timeAutoNext = 3000;

    nextDom.onclick = function(){
        showSlider('next');    
    }

    prevDom.onclick = function(){
        showSlider('prev');    
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type){
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if(type === 'next'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        }else{
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
<div className='marquee-container'>
  <div className="marquee-content">
    <span className="glow-label">New:</span>
    <span className="marquee-text">
      <a
        className="text-md cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(updatesRef);
        }}
      >
        Newsletter for April 2024 has been released.
      </a>
    </span>
  </div>
  <div className="marquee-content">
    <span className="glow-label">New</span>
    <span className="marquee-text">
      <a
        className="text-md cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection(updatesRef);
        }}
      >
        Cve Reports for May 2024 has been released.
      </a>
    </span>
  </div>
</div>
      <div className="carousel">
        <div className="list">
          <div className="item">
            <img src={img1} alt="Image 1" />
            {/* Content for Image 1 */}
          </div>
          <div className="item">
            <img src={img2} alt="Image 2" />
            {/* Content for Image 2 */}
          </div>
          <div className="item">
            <img src={img3} alt="Image 3" />
            {/* Content for Image 3 */}
          </div>
          <div className="item">
            <img src={img4} alt="Image 4" />
            {/* Content for Image 4 */}
          </div>
        </div>
        <div className="thumbnail">
          <div className="item">
            <img src={img1} alt="Thumbnail 1" />
            {/* Thumbnail Content */}
          </div>
          <div className="item">
            <img src={img2} alt="Thumbnail 2" />
            {/* Thumbnail Content */}
          </div>
          <div className="item">
            <img src={img3} alt="Thumbnail 3" />
            {/* Thumbnail Content */}
          </div>
          <div className="item">
            <img src={img4} alt="Thumbnail 4" />
            {/* Thumbnail Content */}
          </div>
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
