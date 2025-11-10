
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url(/assets/gallery/hero.jpeg)" }}></div>
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="relative z-20 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight" style={{ fontFamily: "'Roboto Slab', serif" }}>
          Matini Garten- und Landschaftsbau
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
          Schnell, zuverlässig und professionell. Ihr Experte für Pflaster, Stein und Gärten in Donauwörth.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a href="#gallery" className="bg-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-primary-dark transition duration-300 transform hover:scale-105 shadow-xl">
            Unsere Arbeit
          </a>
          <a href="#contact" className="bg-gray-200 text-text-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-white transition duration-300 transform hover:scale-105 shadow-xl">
            Kontaktieren Sie uns
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;