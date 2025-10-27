import React from 'react';
import restaurant from '../assets/restaurant.jpg';
import chef from '../assets/restaurant chef B.jpg';

const Chicago = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
      </div>
      <div className="about-images">
        <img src={chef} alt="Little Lemon Chef" className="about-image-1" />
        <img src={restaurant} alt="Little Lemon Restaurant" className="about-image-2" />
      </div>
    </section>
  );
};

export default Chicago;