import React from 'react';
import greeksalad from '../assets/greek salad.jpg';
import bruschetta from '../assets/brush.svg';
import lemondessert from '../assets/lemon dessert.jpg';

const specialsData = [
  { img: greeksalad, title: 'Greek Salad', price: '$12.99', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.' },
  { img: bruschetta, title: 'Bruschetta', price: '$5.99', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
  { img: lemondessert, title: 'Lemon Dessert', price: '$5.00', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.' },
];

const Specials = () => {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="btn-primary">Online Menu</button>
      </div>
      <div className="specials-cards">
        {specialsData.map(item => (
          <div key={item.title} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <div className="card-title">
                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>
              </div>
              <p>{item.description}</p>
              <a href="/order-online" className="order-link">Order a delivery</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;