import Header from './components/header.js'
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Experience from './components/experience.js'
import React from "react";
import Projects from './components/projects.js';
import Skills from './components/skills.js';
import Footer from './components/footer.js';
import './App.css';

function App() {
  return (
    <div style={{ fontFamily: 'Futura, sans-serif' }}>
      <Navbar/>
      {/* <Header/> */}
      <About/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Footer/>
  </div>
  );
}

export default App;
