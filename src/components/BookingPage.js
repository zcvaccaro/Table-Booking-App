import React from 'react';
import BookingForm from './BookingForm';
import BookingsList from './BookingsList'; // Assuming this component exists

const BookingPage = ({ availableTimes, bookings, dispatch, submitForm }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <div style={{ textAlign: 'center', width: '100%', maxWidth: '400px' }}>
        <div style={{ backgroundColor: '#495E57', color: 'white', padding: '30px', borderRadius: '8px' }}>
          <h1>Book a Table</h1>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
        <h2 style={{ marginTop: '40px' }}>Current Reservations</h2>
        <BookingsList bookings={bookings} />
      </div>
    </div>
  );
};

export default BookingPage;