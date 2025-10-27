import React, { useReducer, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

export const initializeState = () => {
  // Load bookings from local storage if available
  const bookings = localStorage.getItem('bookings');
  return {
    availableTimes: [],
    bookings: bookings ? JSON.parse(bookings) : [],
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return { ...state, availableTimes: action.payload };
    case 'ADD_BOOKING':
      const newBookings = [...state.bookings, action.payload];
      // Save new bookings list to local storage
      localStorage.setItem('bookings', JSON.stringify(newBookings));
      return { ...state, bookings: newBookings };
    default:
      return state;
  }
};

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initializeState());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    // The submitAPI function is made available globally by the script added to index.html
    if (window.submitAPI(formData)) {
      // On successful submission, add the booking to our state
      dispatch({ type: 'ADD_BOOKING', payload: formData });
      navigate('/confirmed-booking');
    }
  };

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 10;
    
    const fetchInitialTimes = () => {
      if (retryCount >= maxRetries) {
        console.error("Failed to load API after maximum retries");
        return;
      }
      // Check if the API function is available on the window object
      let timesToSet = []; // Initialize timesToSet
      if (window.fetchAPI) { // Use the actual API if available
        const today = new Date();
        const times = window.fetchAPI(today); // Call the actual API
        console.log(`API response for initial load (${today.toDateString()}):`, times); // Log the raw API response

        if (times && times.length > 0) {
          timesToSet = times;
        } else {
          // Fallback if API returns empty or no times for today
          console.warn("API returned no times for today, using default times.");
          timesToSet = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        }
        dispatch({ type: 'UPDATE_TIMES', payload: timesToSet });
      } else {
        // If the API is not ready, wait and try again.
        // This handles the race condition where the component mounts before the script loads.
        console.log("window.fetchAPI not yet available, retrying...");
        retryCount++;
        setTimeout(fetchInitialTimes, 100);
      }
    };
    fetchInitialTimes();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage availableTimes={state.availableTimes} bookings={state.bookings} dispatch={dispatch} submitForm={submitForm} />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        {/* Add other routes here for About, Menu, etc. */}
      </Routes>
    </main>
  );
};

export default Main;