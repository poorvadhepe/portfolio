import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Languages": ["C++", "Python", "Java", "JavaScript", "PHP"],
  "Web Technologies": ["HTML", "CSS", "Streamlit"],
  "Databases": ["SQL", "NoSQL", "MongoDB"],
  "Python Libraries": ["NumPy", "Pandas", "Matplotlib", "Seaborn"],
  "Mobile Development": ["Android with Java"],
  "Frameworks & Tools": ["MERN Stack", "Power BI"],
  "Cloud & Deployment": ["Cloud Computing", "API Integration"],
  "Core Concepts": [
    "System Programming and Operating Systems (SPOS)",
    "Database Management Systems (DBMS)",
    "Computer Networks (CN)",
    "Software Engineering (SE)",
  ],
  "Other Skills": ["Data Science", "Machine Learning"],
  "Soft Skills": [
    "Effective Communication",
    "Team Collaboration",
    "Public Speaking",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Leadership & Initiative"
  ]
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 bg-gray-50 border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2 text-center md:text-left">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                {category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
