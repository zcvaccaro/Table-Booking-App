import React from 'react';
import BookingForm from './BookingForm';
import BookingsList from './BookingsList'; // Assuming this component exists

const BookingPage = ({ availableTimes, bookings, dispatch, submitForm }) => {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
      <h2 style={{ marginTop: '40px' }}>Current Reservations</h2>
      <BookingsList bookings={bookings} />
    </div>
  );
};

export default BookingPage;