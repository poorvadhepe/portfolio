import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Achievements from './components/Achievements';
import ScrollToTop from './components/ScrollToTop'; // ⬅️ Add this

function App() {
  return (
    <div className="relative">
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
      <ScrollToTop /> {/* ⬆️ This floats on screen */}
    </div>
  );
}

export default App;
