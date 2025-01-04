import React from 'react';

// Reusable SkillContainer component
const SkillContainer = ({ skill }) => {
  return (
    <div className="bg-gray-100 hover:scale-105 transition-transform duration-300 shadow-md rounded-lg p-6 flex justify-center items-center w-40 h-24 sm:w-48 sm:h-32">
      <p className="text-xl sm:text-3xl font-semibold text-gray-800">{skill}</p>
    </div>
  );
};

const Skills = () => {
  const skills = ['C++', 'React.js', 'JavaScript', , 'CSS' , 'Tailwind CSS', 'C#', 'Github' , 'AWS' , 'Python' , 'Verilog' , 'Assembly' , 'TypeScript' , 'Excel' , 'Circuit Constructing' , 'Soldering' , 'Digital Design'];

  return (
    <section
      id="skills"
      className="scroll-mt-20  min-h-screen flex flex-col items-center text-center px-4 py-8 gap-8"
    >
      <h2 className="text-[2rem] sm:text-[3rem] font-bold text-text mt-4 mb-4 tracking-[1px]">
        Skills
      </h2>
      <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <SkillContainer key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

