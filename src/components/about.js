import React from 'react';
import '../App.css';
import pfp from "../images/IMG_9133.jpg"
const About = () => {
  return (
    <section id="about" className="bg-slate-200 min-h-screen flex flex-col justify-center items-center text-center p-10 gap-4">
      <h2 className="text-[3rem] font-bold text-text mt-20 tracking-[1px]">
        Hello World, I am Anson!
      </h2>
      <hr className="w-full max-w-[20rem] border-t-[2px] border-[#708090] my-6" />
      <img
        src={pfp} // Ensure the image is placed in the public/images folder
        alt="I AM A HERO"
        className="w-64 h-auto object-cover rounded-lg shadow-lg mt-4 mb-4"
      />

      <h3 className="text-lg font-light max-w-prose">
        Hello! I am Anson, a 4th-year student majoring in Computer Engineering aiming to apply academic knowledge while learning from experienced engineers to gain hands-on experience in a related field through an internship :)
      </h3>
      <h3 className="text-lg font-light max-w-prose">
        In my free time, I love to play different types of sports, travel, and play board games with my loved ones!
      </h3>
    </section>
  );
};

export default About;
