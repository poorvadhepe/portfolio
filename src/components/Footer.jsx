import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-20 border-t border-gray-200 text-sm text-gray-600">
      <div className="space-y-1">
        <p className="font-medium text-gray-800">Poorva Dilip Dhepe</p>
        <p>Pune, Maharashtra, India</p>
        <p>
          Email: <a href="mailto:poorvadhepe@gmail.com" className="text-blue-600 hover:underline">poorvadhepe@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/poorvadhepe" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/poorvadhepe</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/poorvadhepe" target="_blank" className="text-blue-600 hover:underline">github.com/poorvadhepe</a>
        </p>
        <p className="pt-2 text-xs text-gray-400">© {new Date().getFullYear()} Poorva Dhepe. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
