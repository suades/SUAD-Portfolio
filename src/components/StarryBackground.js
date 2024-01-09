import React, { useEffect } from 'react';

const StarryBackground = () => {

  useEffect(() => {
    const starryBg = document.querySelector('.starry-background');

    // Function to create stars
    const createStars = (count) => {
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration between 1 and 4 seconds
        star.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay
        starryBg.appendChild(star);
      }
    };

    // Function to create shooting stars
    const createShootingStars = (count) => {
      for (let i = 0; i < count; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        shootingStar.style.left = `${Math.random() * 100}%`;
        shootingStar.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration
        shootingStar.style.animationDelay = `${Math.random() * 3}s`; // Random animation delay
        starryBg.appendChild(shootingStar);
      }
    };

    createStars(100); // Create 100 stars
    createShootingStars(20); // Create 20 shooting stars
  }, []);

  return <div className="starry-background"></div>;
};

export default StarryBackground;
