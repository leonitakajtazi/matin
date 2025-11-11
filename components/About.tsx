
import React from 'react';

const values = [
    { title: "Schnell & Zuverlässig", description: "Wir halten Termine ein und liefern pünktlich erstklassige Ergebnisse." },
    { title: "Faire Preise & Saubere Arbeit", description: "Transparente Kosten, saubere Ausführung und höchste Qualität." },
    { title: "Beratung & Besichtigung Kostenlos", description: "Wir beraten Sie umfassend und erstellen ein unverbindliches Angebot." },
];


const CheckIcon = () => (
    <svg className="w-6 h-6 text-primary flex-shrink-0 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="assets/gallery/img1.jpeg" className="rounded-lg shadow-2xl w-full" alt="Team bei der Arbeit" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Roboto Slab', serif" }}>Ihr Partner für hochwertige Außenanlagen</h2>
            <p className="text-lg text-gray-300 mb-6">
              Matini Garten- und Landschaftsbau steht für Qualität und Zuverlässigkeit. Mit Präzision und Leidenschaft verwandeln wir Ihre Außenbereiche in funktionale und ästhetische Lebensräume, die zum Verweilen einladen.
            </p>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckIcon />
                  <div>
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;