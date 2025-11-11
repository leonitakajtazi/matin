import React from 'react';

const galleryImages = [
    { src: '/assets/gallery/sc1.png', alt: 'Breite gepflasterte Einfahrt vor einer modernen Garage' },
    { src: '/assets/gallery/img5.jpeg', alt: 'Neu gepflasterter Bürgersteig neben Straßenbahnschienen in der Stadt' },
    { src: '/assets/gallery/img3.jpeg', alt: 'Nahaufnahme von grauen Pflastersteinen auf einer Baustelle' },
    { src: '/assets/gallery/img4.jpeg', alt: 'Arbeiter verlegen Rasengittersteine zwischen Gleisen' },
    { src: '/assets/gallery/img2.jpeg', alt: 'Fertiggestellte Pflasterfläche vor einer Doppelgarage' },
    { src: '/assets/gallery/img1.jpeg', alt: 'Präzise Pflasterarbeiten für eine langlebige und stabile Straßenoberfläche' },
        { src: '/assets/gallery/1.jpg', alt: 'Gepflasterte Terrasse mit moderner Sitzgruppe' },
{ src: '/assets/gallery/2.jpg', alt: 'Umfassende Untergrundvorbereitung für einen Parkplatz oder Zufahrtsbereich an einem Mehrfamilienhaus.' },
{ src: '/assets/gallery/3.jpg', alt: 'Verlegung von Rasengittersteinen für eine umweltfreundliche und stabile Parkfläche oder Zufahrt.' },
]
const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-20 bg-dark-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>Unsere Projekte</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Ein Einblick in unsere abgeschlossenen Projekte. Sehen Sie selbst die Qualität unserer Arbeit.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;