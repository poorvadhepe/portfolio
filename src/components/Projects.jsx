import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Landmark Detection using CNN',
    description:
      'A deep learning-based image classification model to detect famous Indian landmarks. Achieved 100% test accuracy and integrated Google Custom Search API for more insights.',
    tech: ['Python', 'CNN', 'Google API'],
  },
  {
    title: 'Canteen Management System (MERN)',
    description:
      'A full-stack web application for ordering and managing food items in a canteen. Built using MongoDB, Express.js, React, and Node.js with real-time tracking and admin panel.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    title: 'Heart Attack Prediction using ML',
    description:
      'A machine learning model to predict heart attack risk using logistic regression and decision trees. Trained on UCI dataset with high accuracy and medical insights.',
    tech: ['Python', 'Logistic Regression', 'Scikit-learn'],
  },
  {
    title: 'Instagram Fake/Spammer Account Detection',
    description:
      'Analyzed account metadata and user activity to identify spam accounts on Instagram. Used classification algorithms to flag suspicious profiles with high precision.',
    tech: ['Python', 'Classification', 'Pandas'],
  },
  {
    title: 'Uber Trip Analysis',
    description:
      'Performed data analysis on Uber ride data to identify demand trends, peak hours, and location insights. Built using Python and Jupyter Notebook with Matplotlib and Pandas.',
    tech: ['Python', 'Matplotlib', 'Pandas'],
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'A fully responsive and animated portfolio website built using React, Tailwind CSS, and Framer Motion. Showcases projects, skills, achievements, and contact form with modern UI design.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-white border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2 text-center md:text-left">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
