
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Matini Garten- und Landschaftsbau. Alle Rechte vorbehalten.</p>
        <p className="text-sm mt-1">Website designed by Aumebx-Marketing</p>
      </div>
    </footer>
  );
};

export default Footer;
