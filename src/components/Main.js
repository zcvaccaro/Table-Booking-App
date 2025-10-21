import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* Add other routes here for About, Menu, etc. */}
      </Routes>
    </main>
  );
};

export default Main;