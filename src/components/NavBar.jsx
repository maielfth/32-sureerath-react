import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="bg-white py-4 shadow">
      <div className="container mx-auto flex justify-end items-center">
        <nav className="space-x-4">
          <Link to="/" className="text-lg font-bold">Home</Link>
          <Link to="/admin-sector" className="text-lg font-bold">Owner</Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
