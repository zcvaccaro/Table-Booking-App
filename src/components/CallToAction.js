import React from 'react';
import { Link } from 'react-router-dom';
import restaurantfood from '../assets/restaurant food.jpg'; // Assuming you have this image

const CallToAction = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/booking" className="btn-primary">Reserve a Table</Link>
      </div>
      <img src={restaurantfood} alt="Delicious restaurant food" className="hero-image" />
    </section>
  );
};

export default CallToAction;