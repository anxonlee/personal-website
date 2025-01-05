import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#A0B0C0]/90 backdrop-blur-sm flex justify-between px-6 md:px-[3.125rem] h-20 items-center fixed top-0 w-full z-[1000]">
      {/* Left Section */}
      <div className="left">
        <a
          href="https://www.linkedin.com/in/anson-lee-958550262"
          className="text-text text-[1.5rem] font-semibold hover:text-white transition-colors duration-300"
          aria-label="Linkedin"
        >
          Anson Lee (Linkedin)
        </a>
      </div>

      {/* Right Section */}
      <div className="md:hidden">
        {/* Hamburger Menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-text text-[1.5rem] focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      <div
        className={`right flex-col md:flex-row md:flex gap-6 absolute md:static top-20 right-0 bg-[#A0B0C0]/90 md:bg-transparent w-full md:w-auto items-center transition-transform duration-300 ${
          isMenuOpen ? 'flex' : 'hidden'
        }`}
      >
        <a
          href="#about"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300 py-2 md:py-0"
          title="Go to About Section"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300 py-2 md:py-0"
          title="Go to Projects Section"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300 py-2 md:py-0"
          title="Go to Experience Section"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300 py-2 md:py-0"
          title="Go to Skills Section"
        >
          Skills
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
