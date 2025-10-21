import React from 'react';
// import customer1 from '../assets/customer1.jpg'; // Example image
// import customer2 from '../assets/customer2.jpg'; // Example image
// import customer3 from '../assets/customer3.jpg'; // Example image
// import customer4 from '../assets/customer4.jpg'; // Example image

const testimonialsData = [
    { rating: 5, name: 'John Doe', /* image: customer1, */ review: 'Great food and great service!' },
    { rating: 4, name: 'Jane Smith', /* image: customer2, */ review: 'Lovely atmosphere and delicious meals.' },
    { rating: 5, name: 'Sam Wilson', /* image: customer3, */ review: 'Best Mediterranean food in Chicago!' },
    { rating: 4, name: 'Emily White', /* image: customer4, */ review: 'A wonderful experience, will come again.' },
];

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h2>What our customers say!</h2>
      <div className="testimonials-cards">
        {testimonialsData.map(item => (
          <div key={item.name} className="testimonial-card">
            <p className="rating">Rating: {item.rating} stars</p>
            {/* <img src={item.image} alt={`Photo of ${item.name}`} className="testimonial-image" /> */}
            <h4>{item.name}</h4>
            <p>"{item.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomersSay;