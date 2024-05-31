import React, { useEffect, useRef, useState } from 'react';
import ntroImg from './Images/ntroLogo.png';
import digitalIndiaImg from './Images/digitalIndiaImg.png';
import dotImg from './Images/dotImg.png';
import sebiImg from './Images/sebiImg.png';
import certinImg from './Images/certinImg.png';
import aadharImg from './Images/aadharImg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const linksData = [
  { title: 'Digital India', imageUrl: digitalIndiaImg, url: 'https://digitalindia.gov.in/' },
  { title: 'NTRO', imageUrl: ntroImg, url: 'https://nciipc.gov.in/documents/01_15_May24_CVE.pdf' },
  { title: 'Dot', imageUrl: dotImg, url: 'https://www.dot.gov.in/' },
  { title: 'SEBI', imageUrl: sebiImg, url: 'https://www.sebi.gov.in/' },
  { title: 'Cert-In', imageUrl: certinImg, url: 'https://www.cert-in.org.in/' },
  { title: 'Aadhar', imageUrl: aadharImg, url: 'https://uidai.gov.in/' },
];

const Links = () => {
  const linksRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animationStyle, setAnimationStyle] = useState('animate-infinite-scroll');

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
      setAnimationStyle('pause-infinite-scroll');
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setAnimationStyle('animate-infinite-scroll');
    };

    const linksContainer = linksRef.current;
    linksContainer.addEventListener('mouseenter', handleMouseEnter);
    linksContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      linksContainer.removeEventListener('mouseenter', handleMouseEnter);
      linksContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-8 bg-gray-100">
      <h2 className="lg:text-3xl text-2xl text-indigo-600 font-semibold text-center tracking-wide uppercase lg:mt-10 mb-6">Links</h2>
      <div className="text-center">
        <div
          ref={linksRef}
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            className={`flex items-center justify-start [&_li]:mx-8 [&_img]:max-w-none ${animationStyle}`}
          >
            {linksData.map((link, index) => (
              <li key={index} className="flex flex-col items-center">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-[#3F72AF]">
                  <img src={link.imageUrl} alt={link.title} title={link.title} className="w-16 md:w-24" />
                  <div className="flex items-center mt-2">
                    <span className="text-sm md:text-base font-semibold text-[#3F72AF]">{link.title}</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-[#3F72AF]" />
                  </div>
                </a>
              </li>
            ))}
            {linksData.map((link, index) => (
              <li key={`clone-${index}`} className="flex flex-col items-center">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                  <img src={link.imageUrl} alt={link.title} title={link.title} className="w-16 md:w-24" />
                  <div className="flex items-center mt-2">
                    <span className="text-sm md:text-base font-semibold text-[#3F72AF]">{link.title}</span>
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 text-[#3F72AF]" />
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Links;