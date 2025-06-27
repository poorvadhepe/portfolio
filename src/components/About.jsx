import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="pt-32 pb-20 bg-gray-50 border-t border-gray-200" // ⬅️ more top padding
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 md:flex items-center gap-12">

        {/* Profile Photo */}
        <div className="md:w-1/2 mb-10 md:mb-0 text-center">
          <img 
  src="/images/poorvaa.jpeg" 
  alt="Poorva Dhepe" 
  className="w-72 h-85 object-cover object-top rounded-xl mx-auto shadow-md border border-gray-300"
/>


        </div>

        {/* About Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-indigo-800 mb-6 text-center md:text-left">
            <Typewriter
              words={[
                "Hi, I'm Poorva Dhepe",
                "Developer 💻",
                "ML Enthusiast 🤖",
                "Data Explorer 📊",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>

          <div className="bg-white shadow-md rounded-lg p-6 text-gray-700 text-base leading-relaxed">
            <p className="mb-4">
              Hello! I’m <strong>Poorva Dilip Dhepe</strong>, a final-year Computer Engineering student at PICT, Pune.
              I’m passionate about building clean, user-friendly web applications and exploring smart technologies.
            </p>
            <p>
              With experience in frontend development using React and backend logic, I enjoy creating efficient and elegant solutions.
              I’m also exploring AI, computer vision, and full-stack development.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
