import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-indigo-800">Poorva Dilip Dhepe 💻</h1>

        {/* Hamburger button (mobile only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-indigo-800 focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <Scrollspy
          items={['about', 'education', 'projects', 'skills', 'achievements', 'contact']}
          currentClassName="text-indigo-800 font-semibold"
          className="hidden md:flex space-x-6 text-sm font-medium text-gray-700"
          offset={-100}
        >
          <li><a href="#about" className="hover:text-indigo-800">About</a></li>
          <li><a href="#education" className="hover:text-indigo-800">Education</a></li>
          <li><a href="#projects" className="hover:text-indigo-800">Projects</a></li>
          <li><a href="#skills" className="hover:text-indigo-800">Skills</a></li>
          <li><a href="#achievements" className="hover:text-indigo-800">Achievements</a></li>
          <li><a href="#contact" className="hover:text-indigo-800">Contact</a></li>
          <li>
  <a
    href="/Poorva_Dhepe_Resume.pdf"
    download
    className="bg-white text-gray-700 px-4 py-1.5 rounded-full hover:bg-indigo-700 hover:text-white transition text-sm font-medium shadow-sm whitespace-nowrap"
  >
    📄 Resume
  </a>
</li>



        </Scrollspy>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow px-6 pb-4">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#education" onClick={closeMenu}>Education</a></li>
            <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
            <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
            <li><a href="#achievements" onClick={closeMenu}>Achievements</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
