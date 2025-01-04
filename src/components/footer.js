import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-600 text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Anson Lee. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;

