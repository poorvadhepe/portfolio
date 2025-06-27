import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.section
      id="education"
      className="py-20 bg-gray-50 border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2 text-center md:text-left">
          Education
        </h2>

        {/* Education Details */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Pune Institute of Computer Technology, Pune
            </h3>
            <p className="text-sm text-gray-600">Aug 2023 – July 2026</p>
            <p className="mt-1 text-gray-700">
              Bachelor of Engineering in Computer Engineering <br />
              <strong>GPA:</strong> 9.57<br />
              Learned Data Structures, Operating Systems, CN, and DBMS.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-indigo-700">
              Dr. Babasaheb Ambedkar Technological University, Lonere
            </h3>
            <p className="text-sm text-gray-600">Dec 2020 – July 2023</p>
            <p className="mt-1 text-gray-700">
              Diploma in Computer Engineering <br />
              <strong>Percentage:</strong> 95.20%<br />
              Acquired strong foundation in computer engineering and practical skills.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-indigo-700">
              Unified Mentor – Data Science Intern
            </h4>
            <p className="text-sm text-gray-600">Jan 2025 – Mar 2025 (Remote)</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1 text-sm">
              <li>Performed data analysis and visualization to extract insights.</li>
              <li>Cleaned and transformed data to improve quality and consistency.</li>
              <li>Used statistical tools to support data-driven decisions.</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
