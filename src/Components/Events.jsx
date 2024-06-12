import React, { useState, useEffect } from 'react';
import './Events.css';
import eventImg1 from './Images/events/eventImg1.webp';
import eventImg2 from './Images/events/eventImg2.webp';
import eventImg3 from './Images/events/eventImg3.webp';
import eventImg4 from './Images/events/eventImg4.webp';
import eventImg5 from './Images/events/eventImg5.webp';
import eventImg6 from './Images/events/eventImg6.webp';
import eventImg7 from './Images/events/eventImg7.webp';
import eventImg8 from './Images/events/eventImg8.webp';
import eventImg9 from './Images/events/eventImg9.webp';

const events = [
  { image: eventImg1 },
  { image: eventImg2 },
  { image: eventImg3 },
  { image: eventImg4 },
  { image: eventImg5 },
  { image: eventImg6 },
  { image: eventImg7 },
  { image: eventImg8 },
  { image: eventImg9 },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 3000);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleEvents = () => {
    if (isLargeScreen) {
      return [
        events[currentIndex],
        events[(currentIndex + 1) % events.length],
        events[(currentIndex + 2) % events.length],
      ];
    } else {
      return [events[currentIndex]];
    }
  };

  const visibleEvents = getVisibleEvents();

  return (
    <div className="events-container">
      <h2 className="lg:text-3xl text-2xl text-titleColor font-bold text-center tracking-wide mt-8 lg:mt-12 mb-4">
        Events
      </h2>
      <div className="arrow-button left" onClick={handlePrevClick}>
        &lt;
      </div>
      <div className="event-cards">
        {visibleEvents.map(({ image }, index) => (
          <div key={index} className="event-card">
            <div className="event-image-container">
              <img src={image} alt={`Event ${index}`} className="event-image" />
            </div>
          </div>
        ))}
      </div>
      <div className="arrow-button right" onClick={handleNextClick}>
        &gt;
      </div>
      <div className="progress-bar">
        {events.map((_, index) => (
          <div
            key={index}
            className={`progress-bar-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
