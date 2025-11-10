import React from 'react';

// Përdorimi i imazheve përkatëse për secilën shërbim
const points = [
  {
    title: 'Expertise',
    description: 'Wir kombinieren Erfahrung und Fachwissen, um hervorragende Ergebnisse zu erzielen.',
    image: '/assets/gallery/map-point.png',
    alt: 'Expertise Icon',
  },
  {
    title: 'Kundenorientierung',
    description: 'Unser Fokus liegt immer auf den Bedürfnissen unserer Kunden und deren Zufriedenheit.',
    image: '/assets/gallery/people.png',
    alt: 'Customer Focus Icon',
  },
  {
    title: 'Qualität',
    description: 'Wir garantieren höchste Qualität und Präzision in jedem Projekt.',
    image: '/assets/gallery/badge.png',
    alt: 'Quality Icon',
  },
  {
    title: 'Lokale Expertise',
    description: 'Als lokales Unternehmen kennen wir die Bedürfnisse der Region und bieten maßgeschneiderte Lösungen.',
    image: '/assets/gallery/rating.png',
    alt: 'Local Expertise Icon',
  },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>Warum Matini Bau?</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Wir kombinieren Handwerkskunst mit Leidenschaft, um Ihre Visionen zu übertreffen.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {points.map((point, index) => (
                        <div key={index} className="group relative rounded-lg shadow-2xl overflow-hidden h-80 border-2 border-gray-600 hover:border-primary transition-all duration-300 transform hover:scale-105">
                            <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
                                <div className="mb-4">
                                    <img src={point.image} alt={point.alt} className="h-16 w-16 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-sm md:text-base font-bold mb-3 break-words">{point.title}</h3> {/* Zvogëloni fontin për të gjithë titujt */}
                                <p className="text-gray-300 text-sm md:text-base">{point.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
