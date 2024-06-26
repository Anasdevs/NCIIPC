import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useMotionValue } from 'framer-motion';
import eventImg1 from './Images/events/eventImg1.webp';
import eventImg2 from './Images/events/eventImg2.webp';
import eventImg3 from './Images/events/eventImg3.webp';
import eventImg4 from './Images/events/eventImg4.webp';
import eventImg5 from './Images/events/eventImg5.webp';
import eventImg6 from './Images/events/eventImg6.webp';
import eventImg7 from './Images/events/eventImg7.webp';
import eventImg8 from './Images/events/eventImg8.webp';
import eventImg9 from './Images/events/eventImg9.webp';
import './Events.css';
// import aboutBg from './Images/aboutBg.svg'


const images = [
  eventImg1,
  eventImg2,
  eventImg3,
  eventImg4,
  eventImg5,
  eventImg6,
  eventImg7,
  eventImg8,
  eventImg9,
];

const Events = () => {
  const carousel = useRef(null);
  const x = useMotionValue(0);
  const [dragConstraints, setDragConstraints] = useState({ left: -800, right: 800 });
  const controls = useAnimation();
  const [scrollText, setScrollText] = useState('Scroll >');

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newDragConstraints = screenWidth <= 768 ? { left: -1250, right: 1250 } : { left: -1200, right: 1200 };
      setDragConstraints(newDragConstraints);
      const initialX = screenWidth <= 768 ? 1250 : 1200;
      x.set(initialX);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [x]);

  useEffect(() => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    });
  }, [controls]);

  return (
    <div style={{ backgroundImage: `url(/aboutBg.svg)` }}>
      <h2 className="lg:text-3xl text-2xl text-titleColor font-bold text-center tracking-wide lg:mt-[80px] mt-12 mb-3">
        Events
      </h2>
      <div className="relative w-full max-w-7xl mx-auto mt-8 px-4 events-container">
        <motion.div
          ref={carousel}
          className="carousel"
          style={{ x }}
          whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={dragConstraints}
        >
          <motion.div className="inner-carousel">
            {images.map((image, index) => (
              <motion.div className="item" key={index}>
                <img src={image} draggable="false" alt={`Event ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="scroll-indicator"
          animate={controls}
          style={{
            position: 'absolute',
            top: '40%',
            right: '1rem',
            display: 'flex',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '2.5rem',
              height: '2.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
            }}
          >
            <span className="text-gray-700 font-semibold text-[10px]">{scrollText}</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
