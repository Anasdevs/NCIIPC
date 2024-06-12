import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import img1 from './Images/heroImg1.webp';
import img2 from './Images/heroImg2.webp';
import img3 from './Images/heroImg3.webp';
import img4 from './Images/heroImg4.webp';
import img5 from './Images/heroImg5.webp';
import img6 from './Images/heroImg6.webp';
import img7 from './Images/heroImg7.webp';

import imgSm1 from './Images/heroImgSm1.webp';
import imgSm2 from './Images/heroImgSm2.webp';
import imgSm3 from './Images/heroImgSm3.webp';
import imgSm4 from './Images/heroImgSm4.webp';
import imgSm5 from './Images/heroImgSm5.webp';
import imgSm6 from './Images/heroImgSm6.webp';
import imgSm7 from './Images/heroImgSm7.webp';

function Hero() {
  const slides = [img1, img2, img3, img4, img5, img6, img7];
  const slidesSm = [imgSm1, imgSm2, imgSm3, imgSm4, imgSm5, imgSm6, imgSm7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const promises = [...slides, ...slidesSm].map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
        });
      });
      await Promise.all(promises);
      setImagesLoaded(true);
    };
    loadImages();
  }, []);

  // Auto changing timer for images after 2 seconds
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, imagesLoaded]);

  // Update displayed image based on screen width
  const currentSlide = window.innerWidth < 640 ? slidesSm[currentIndex] : slides[currentIndex];

  return (
    <div className='h-[60vh] w-full m-auto relative group'>
      <div
        style={{
          backgroundImage: `url(${currentSlide})`,
          width: '100%',
          height: '100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          transition: 'background-image 0.5s ease-in',
        }}
        className='w-full h-full bg-center bg-cover duration-500'
      >
        {imagesLoaded && (
          <>
            {/* Dashes for large screens */}
            <div className='hidden sm:flex absolute left-[100px] bottom-[70px]'>
              {slides.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-1 rounded mx-1 cursor-pointer ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            {/* Dashes for small screens */}
            <div className='sm:hidden flex justify-center absolute bottom-4 w-full'>
              {slidesSm.map((_, index) => (
                <div
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-1 mx-1 cursor-pointer ${
                    currentIndex === index ? 'bg-white' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      {/* Left Arrow */}
      {imagesLoaded && (
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl p-2 bg-[#00000080] text-white cursor-pointer transition duration-500'>
          <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size='lg' />
        </div>
      )}
      {/* Right Arrow */}
      {imagesLoaded && (
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl p-2 bg-[#00000080] text-white cursor-pointer transition duration-500'>
          <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size='lg' />
        </div>
      )}
    </div>
  );
}

export default Hero;