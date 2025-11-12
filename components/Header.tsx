import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Über Uns' },
    { href: '#why-us', label: 'Warum Wir' },
    { href: '#services', label: 'Leistungen' },
    { href: '#gallery', label: 'Galerie' },
    { href: '#testimonials', label: 'Kunden' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="bg-white rounded-full p-1">
      <img src="/favicon.png" alt="Matini Bau Logo" className="h-10 w-10 rounded-full" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">Matini Bau</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-primary transition duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md">
          Angebot anfordern
        </a>
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;