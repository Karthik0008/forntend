import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">PizzaHub</h2>
            <p className="text-gray-400 mt-2">
              Delivering the best pizzas in town with fresh ingredients and love.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-2">
              <li>
                <a className="text-gray-400 hover:text-white">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex justify-center md:justify-end mt-2 space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          &copy; {new Date().getFullYear()} PizzaHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
