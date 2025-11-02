import React from 'react';

const BookingsList = ({ bookings }) => {
  if (!bookings || bookings.length === 0) {
    return <p>No bookings have been made yet.</p>;
  }

  return (
    <table className="bookings-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Guests</th>
          <th>Occasion</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((booking, index) => (
          <tr key={index}>
            <td>{booking.date}</td>
            <td>{booking.time}</td>
            <td>{booking.guests}</td>
            <td>{booking.occasion}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingsList;