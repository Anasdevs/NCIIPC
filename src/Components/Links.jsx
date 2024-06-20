import React from 'react';
import ntroImg from './Images/ntroLogo.webp';
import digitalIndiaImg from './Images/digitalIndiaImg.webp';
import dotImg from './Images/dotImg.webp';
import sebiImg from './Images/sebiImg.webp';
import certinImg from './Images/certinImg.webp';
import aadharImg from './Images/aadharImg.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import "./Links.css"

const linksData = [
  { title: 'Digital India', imageUrl: digitalIndiaImg, url: 'https://digitalindia.gov.in/' },
  { title: 'NTRO', imageUrl: ntroImg, url: 'https://www.ntro.gov.in/' },
  { title: 'Dot', imageUrl: dotImg, url: 'https://www.dot.gov.in/' },
  { title: 'SEBI', imageUrl: sebiImg, url: 'https://www.sebi.gov.in/' },
  { title: 'Cert-In', imageUrl: certinImg, url: 'https://www.cert-in.org.in/' },
  { title: 'Aadhar', imageUrl: aadharImg, url: 'https://uidai.gov.in/' },
];

const Links = () => {
  const handleExternalLinkClick = (event) => {
    const confirmationMessage = "You are now leaving an official website of the National Critical Information Infrastructure Protection Centre (NCIIPC). Links to non-NCIIPC sites are provided for the visitor's convenience and do not represent an endorsement by NCIIPC of any commercial or private issues, products, or services.";
    if (!window.confirm(confirmationMessage)) {
      event.preventDefault();
    }
  };

  return (
    <div className="links-section w-full max-w-7xl mx-auto px-4 md:px-6 py-8 bg-gray-100 mt-6">
      <h2 className="links-title lg:text-3xl text-2xl text-titleColor font-bold text-center tracking-wide lg:mt-10 mb-6">Links</h2>
      <div className="links-container">
        <div className="links-scroll-wrapper">
          {[...linksData, ...linksData].map((link, index) => (
            <div key={index} className="link-element">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleExternalLinkClick}
                className="flex flex-col items-center justify-center h-full"
              >
                <img src={link.imageUrl} alt={`${link.title} - ${index + 1}`} title={link.title} className="link-image" />
                <div className="link-title">
                  <span>{link.title}</span>
                </div>
                <div className="link-url">
                  {link.url.replace('https://', '')} <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Links;