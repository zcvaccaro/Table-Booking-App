import React from 'react';

const Header = ({ logo }) => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" />
    </header>
  );
};

export default Header;