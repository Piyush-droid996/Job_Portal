// src/UI/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">About Us</h2>
            <p className="text-sm">
              We are a leading freelance job portal connecting freelancers and clients worldwide.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="text-sm">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-sm">
              Email: support@freelanceportal.com
            </p>
            <p className="text-sm">
              Phone: +1 234 567 890
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm">&copy; 2024 Freelance Job Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
