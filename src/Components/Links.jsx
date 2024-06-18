import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import ntroImg from './Images/ntroLogo.webp';
import digitalIndiaImg from './Images/digitalIndiaImg.webp';
import dotImg from './Images/dotImg.webp';
import sebiImg from './Images/sebiImg.webp';
import certinImg from './Images/certinImg.webp';
import aadharImg from './Images/aadharImg.webp';
import './Links.css';

const linksData = [
  { title: 'Digital India', imageUrl: digitalIndiaImg, url: 'https://digitalindia.gov.in/' },
  { title: 'NTRO', imageUrl: ntroImg, url: 'https://www.ntro.gov.in/' },
  { title: 'Dot', imageUrl: dotImg, url: 'https://www.dot.gov.in/' },
  { title: 'SEBI', imageUrl: sebiImg, url: 'https://www.sebi.gov.in/' },
  { title: 'Cert-In', imageUrl: certinImg, url: 'https://www.cert-in.org.in/' },
  { title: 'Aadhar', imageUrl: aadharImg, url: 'https://uidai.gov.in/' },
];

const Links = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % linksData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + linksData.length) % linksData.length);
  };

  const visibleItems = isSmallScreen ? linksData : linksData.concat(linksData);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto mt-8 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="lg:text-3xl text-2xl text-titleColor font-bold text-center tracking-wide lg:mt-10 mb-6">Links</h2>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex + 1) * (isSmallScreen ? 100 : 25)}%)` }}
        >
          {visibleItems.map((link, index) => (
            <div key={index} className={`w-${isSmallScreen ? 'full' : '1/4'} flex-shrink-0 px-2`}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.imageUrl} alt={link.title} className="w-full h-20 object-contain mx-auto" />
              </a>
              <div className="text-center mt-2">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {link.title} <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isSmallScreen && (
        <>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full">
            <button onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-100 p-2 rounded-full">
            <button onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Links;
