import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white border-t border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-800 mb-10 border-b-4 border-indigo-500 inline-block pb-2 text-center md:text-left">
          Contact Me
        </h2>

        <form
  name="contact"
  method="POST"
  data-netlify="true"
  action="/success"
  className="bg-gray-50 shadow-md rounded-lg p-6 space-y-4"
>
  <input type="hidden" name="form-name" value="contact" />

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    required
    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <input
    type="email"
    name="email"
    placeholder="Your Email"
    required
    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    required
    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
  ></textarea>

  <button
    type="submit"
    className="bg-indigo-800 text-white px-6 py-2 rounded hover:bg-indigo-900 transition"
  >
    Send Message
  </button>
</form>


        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>You can also reach me at:</p>
          <div className="mt-2 space-y-1 text-indigo-700">
            <p>
              Email:{" "}
              <a
                href="mailto:poorvadhepe@gmail.com"
                className="underline"
              >
                poorvadhepe@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/poorvadhepe"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                linkedin.com/in/poorvadhepe
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
