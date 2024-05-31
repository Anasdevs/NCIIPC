import React, { useState, useEffect } from 'react';
import './Events.css';;
import eventImg1 from './Images/events/eventImg1.png';
import eventImg2 from './Images/events/eventImg2.png';
import eventImg3 from './Images/events/eventImg3.png';
import eventImg4 from './Images/events/eventImg4.png';
import eventImg5 from './Images/events/eventImg5.png';
import eventImg6 from './Images/events/eventImg6.jpg';
import eventImg7 from './Images/events/eventImg7.jpg'
import eventImg8 from './Images/events/eventImg8.jpg'
import eventImg9 from './Images/events/eventImg9.png'



const events = [
  { image: eventImg1},
  { image: eventImg2},
  { image: eventImg3},
  { image: eventImg4},
  { image: eventImg5},
  { image: eventImg6},
  { image: eventImg7},
  { image: eventImg8},
  { image: eventImg9},

];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % events.length);
    }, 2000);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % events.length);
  };

  const visibleEvents = isLargeScreen
    ? events.slice(currentIndex, currentIndex + 3)
    : [events[currentIndex]];

  return (
    <div className="events-container">
      <h2 className="lg:text-3xl text-2xl text-indigo-600 font-semibold text-center tracking-wide uppercase mt-8 lg:mt-12 mb-8">Events</h2>
      <div className="arrow-button left" onClick={handlePrevClick}>
        &lt;
      </div>
      <div className="event-cards">
        {visibleEvents.map(({ image, title, venue, date }, index) => (
          <div
            key={index}
            className="event-card"
          
          >
            <div className="event-image-container">
              <img src={image} alt={title} className="event-image" />
              {/* <div className="event-details">
                <h3>{title}</h3>
                <p>{venue}</p>
                <p>{date}</p>
              </div> */}
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
          />
        ))}
      </div>
    </div>
  );
};

export default Events;