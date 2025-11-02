import React from 'react';
import BookingForm from './BookingForm';
import BookingsList from './BookingsList'; // Assuming this component exists

const BookingPage = ({ availableTimes, bookings, dispatch, submitForm }) => {
  return (
    <div className="booking-page">
      <div className="booking-container">
        <div className="booking-header">
          <h1>Book a Table</h1>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </div>
        <h2 className="reservations-header">Current Reservations</h2>
        <BookingsList bookings={bookings} />
      </div>
    </div>
  );
};

export default BookingPage;