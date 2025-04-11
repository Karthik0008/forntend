import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-red-600">
            <Link to="/">🍕 Pizza</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-500 font-medium">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-red-500 font-medium">Menu</Link>
            <Link to="/deals" className="text-gray-700 hover:text-red-500 font-medium">Deals</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
              <div className="w-6 h-1 bg-gray-800 mb-1 rounded"></div>
              <div className="w-6 h-1 bg-gray-800 mb-1 rounded"></div>
              <div className="w-6 h-1 bg-gray-800 rounded"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-2 bg-white shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-red-500 font-medium" onClick={toggleMenu}>Home</Link>
          <Link to="/menu" className="block text-gray-700 hover:text-red-500 font-medium" onClick={toggleMenu}>Menu</Link>
          <Link to="/deals" className="block text-gray-700 hover:text-red-500 font-medium" onClick={toggleMenu}>Deals</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
