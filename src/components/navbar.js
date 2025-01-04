import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#A0B0C0]/90 backdrop-blur-sm flex justify-between px-[3.125rem] h-20 items-center fixed top-0 w-full z-[1000]">
      <div className="left">
        <a
          href="https://www.linkedin.com/in/anson-lee-958550262"
          className="text-text text-[1.5rem] font-semibold"
          aria-label="Linkedin"
        >
          Anson Lee
        </a>
      </div>
      <div className="right flex gap-6">
        <a
          href="#about"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300"
          title="Go to About Section"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300"
          title="Go to Projects Section"
        >
          Projects
        </a>
        <a
          href="#experience"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300"
          title="Go to Experience Section"
        >
          Experience
        </a>
        <a
          href="#skills"
          className="text-text text-[1.375rem] hover:text-white transition-colors duration-300"
          title="Go to Skills Section"
        >
          Skills
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
