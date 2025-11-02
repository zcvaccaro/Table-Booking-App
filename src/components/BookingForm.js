import React, { useState, useEffect, useCallback } from 'react';

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
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = useCallback(() => {
    // Simple validation: check if date is selected and guests are within range
    return date !== '' && guests >= 1 && guests <= 10 && time !== '';
  }, [date, time, guests]);

  useEffect(() => {
    // When availableTimes prop changes, update the local time state
    // to the first available time. This handles both initial load and date changes.
    if (availableTimes.length > 0) {
      setTime(availableTimes[0]);
    }
  }, [availableTimes]);

  useEffect(() => {
    // Validate form whenever relevant fields change
    setIsFormValid(validateForm());
  }, [date, time, guests, validateForm]);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    let timesToSet = [];
    if (window.fetchAPI) { // Use the actual API if available
      const times = window.fetchAPI(new Date(newDate));
      console.log(`API response for date change (${new Date(newDate).toDateString()}):`, times);

      if (times && times.length > 0) {
        timesToSet = times;
      } else {
        // Fallback if API returns empty or no times for selected date
        console.warn("API returned no times for selected date, using default times.");
        timesToSet = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      }
      dispatch({ type: 'UPDATE_TIMES', payload: timesToSet });
    } else { // If window.fetchAPI is not available even on date change, use default
      console.warn("window.fetchAPI not available on date change, using default times.");
      timesToSet = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      dispatch({ type: 'UPDATE_TIMES', payload: timesToSet });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={date} onChange={handleDateChange} required min={getTodayString()} className="field" />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)} required className="field">
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
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
        required
        className="field"
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required className="field">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        aria-label="On Click"
        disabled={!isFormValid}
        className="submit-button"
      />
    </form>
  );
};

export default BookingForm;