import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="font-semibold text-lg mb-2">Developed by Neelesh Bhargava</p>
        <p className="text-sm">© 2024 All Rights Reserved</p>
        <div className="social-links mt-4">
          <a href="https://github.com/NeeleshBhar23" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white transition-colors duration-300">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://www.linkedin.com/in/neelesh-bhargava" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white transition-colors duration-300">
          <i class="fa-brands fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://x.com/Neelesh69000954?t=PzPyNKeejc5-xSZa-tXmxA&s=09" target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white transition-colors duration-300">
          <i class="fa-brands fa-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

