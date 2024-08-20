import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import img1 from './Images/heroImg1New.png';
import imgSm1 from './Images/heroImgSm1.webp';
import imgSm2 from './Images/heroImgSm2.webp';
import imgSm3 from './Images/heroImgSm3.webp';
import imgSm4 from './Images/heroImgSm4.webp';
import imgSm5 from './Images/heroImgSm5.webp';
import imgSm6 from './Images/heroImgSm6.webp';
import imgSm7 from './Images/heroImgSm7.webp';

function Hero() {
  const slides = [img1];
  const slidesSm = [imgSm1, imgSm2, imgSm3, imgSm4, imgSm5, imgSm6, imgSm7];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [...slides, ...slidesSm].map(src => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve(src);
          img.onerror = reject;
        });
      });
      const loaded = await Promise.all(imagePromises);
      setLoadedImages(loaded);
    };

    loadImages();
  }, [slides, slidesSm]);

  useEffect(() => {
    if (windowWidth < 640) {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slidesSm.length);
      }, 200000);
      return () => clearInterval(interval);
    }
  }, [slidesSm.length, windowWidth]);

  const prevSlide = () => {
    if (windowWidth < 640) {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? slidesSm.length - 1 : prevIndex - 1));
    }
  };

  const nextSlide = () => {
    if (windowWidth < 640) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slidesSm.length);
    }
  };

  const currentSlide = windowWidth < 640 ? slidesSm[currentIndex] : slides[0];

  return (
    <div className="h-[60vh] w-full m-auto relative group overflow-x-hidden">
      <div className="w-full h-full bg-center bg-cover transition-all duration-500"
           style={{ backgroundImage: `url(${currentSlide})` }}>
      </div>

      {loadedImages.length === slides.length + slidesSm.length && windowWidth < 640 && (
        <>
          <div className="flex justify-center absolute bottom-4 w-full">
            {slidesSm.map((_, index) => (
              <div
                key={`sm-dot-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-6 h-1 mx-1 cursor-pointer ${currentIndex === index ? 'bg-white' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl p-2 bg-[#00000080] text-white cursor-pointer transition duration-500">
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size="lg" />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl p-2 bg-[#00000080] text-white cursor-pointer transition duration-500">
            <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size="lg" />
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;