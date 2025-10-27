import React, { useState, useEffect } from 'react';

// Helper function to format date to YYYY-MM-DD
const getTodayString = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  // State for each form field
  const [date, setDate] = useState(getTodayString());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  useEffect(() => {
    // When availableTimes prop changes, update the local time state
    // to the first available time. This handles both initial load and date changes.
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    let timesToSet = [];
    if (window.fetchAPI) { // Use the actual API if available
      const times = window.fetchAPI(new Date(newDate));
      console.log(`API response for date change (${new Date(newDate).toDateString()}):`, times); // Log the raw API response

      // Directly use the times returned by the API
      timesToSet = times;
      dispatch({ type: 'UPDATE_TIMES', payload: timesToSet });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {/* availableTimes is now received as a prop */}
        {availableTimes && availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
 type="number"
 placeholder="1"
 min="1"
 max="10"
 id="guests"
 value={guests}
 onChange={(e) => setGuests(e.target.value)}
 required
 />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" aria-label="On Click" />
    </form>
  );
};

export default BookingForm;