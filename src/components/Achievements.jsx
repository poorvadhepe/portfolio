import React from 'react';
import { motion } from 'framer-motion';

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="py-20 bg-white border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2 text-center md:text-left">
          Achievements
        </h2>

        {/* Profiles */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Online Profiles</h3>
          <ul className="list-disc list-inside text-blue-600 space-y-2 text-sm">
            <li>
              Codestudio: <span className="text-gray-800">PoorvaD</span>
            </li>
            <li>
              Leetcode: <span className="text-gray-800">poorvad09</span>
            </li>
          </ul>
        </div>

        {/* Extra-Curricular */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Extra-Curricular Activities</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
            <li>
              Public Relations Officer – Civil Service Aspirants Club, PICT. Organized workshops and seminars.
            </li>
            <li>
              Represented DEBSOC Club, PICT in Elocution Competition at SP College, Pune.
            </li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;
