import React from 'react';

// Icons for services
const PavingIcon = () => (
    <img className="w-12 h-12 mb-4" src="/assets/gallery/road.png" alt="Paving Icon" />
);

const StoneworkIcon = () => (
    <img className="w-12 h-12 mb-4" src="/assets/gallery/build.png" alt="Stonework Icon" />
);

const GardenIcon = () => (
    <img className="w-12 h-12 mb-4" src="/assets/gallery/park.png" alt="Garden Icon" />
);

const TrackIcon = () => (
    <img className="w-12 h-12 mb-4" src="/assets/gallery/engineer.png" alt="Track Icon" />
);

const services = [
  { name: 'Pflasterarbeiten', description: 'Professionelle Verlegung für Wege, Einfahrten und Terrassen.', icon: <PavingIcon /> },
  { name: 'Steinarbeiten', description: 'Individuelle Gestaltung mit Naturstein, Mauern und Zier-Elementen.', icon: <StoneworkIcon /> },
  { name: 'Garten- & Landschaftsbau', description: 'Komplette Neuanlagen und Umgestaltungen von Gärten.', icon: <GardenIcon /> },
  { name: 'Gleisbau & Infrastruktur', description: 'Spezialisierte Arbeiten im Bereich Gleisbau und Infrastruktur.', icon: <TrackIcon /> },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>Unsere Leistungen</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Wir bieten ein breites Spektrum an Dienstleistungen, um Ihre Visionen Wirklichkeit werden zu lassen.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-dark-bg p-8 rounded-lg shadow-xl text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
              {service.icon}
              <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
