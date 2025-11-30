import React, { useState } from 'react';

const galleryImages = [
    { src: '/assets/gallery/f1.jpg'},
    { src: '/assets/gallery/f4.jpg' },
    { src: '/assets/gallery/f3.jpg'},
    { src: '/assets/gallery/f2.jpg' },
    { src: '/assets/gallery/f5.jpg'},
    { src: '/assets/gallery/f6.jpg' },
    { src: '/assets/gallery/f7.jpg' },
  { src: '/assets/gallery/sc1.png' },
  { src: '/assets/gallery/4.jpg' },
  { src: '/assets/gallery/img3.jpeg' },
  { src: '/assets/gallery/img4.jpeg'},
  { src: '/assets/gallery/img2.jpeg', alt: 'Fertiggestellte Pflasterfläche vor einer Doppelgarage' },
  { src: '/assets/gallery/img1.jpeg', alt: 'Präzise Pflasterarbeiten für eine langlebige und stabile Straßenoberfläche' },
  { src: '/assets/gallery/1.jpg', alt: 'Gepflasterte Terrasse mit moderner Sitzgruppe' },
  { src: '/assets/gallery/2.jpg', alt: 'Untergrundvorbereitung für einen Parkplatz an einem Mehrfamilienhaus' },
  { src: '/assets/gallery/3.jpg', alt: 'Verlegung von Rasengittersteinen für stabile Parkfläche' },
  { src: '/assets/gallery/4.jpg', alt: 'Neuanlage eines barrierefreien Wartebereichs mit taktilen Leitsystemen und dunklen Kontrastplatten.' },
{ src: '/assets/gallery/5.jpg', alt: 'Fertiggestellte Zufahrt und Stellfläche aus modernen grauen Betonpflastersteinen vor einer Doppelgarage.' },
{ src: '/assets/gallery/6.jpg', alt: 'Anlegen und Einfassen von zwei separaten Flächen für Garten- oder Terrassengestaltung mit Blick ins Grüne.' },];

const Gallery: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // nëse showAll është false → shfaq vetëm 6 foto
  const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

  return (
    <section id="gallery" className="py-20 bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>
            Unsere Projekte
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Ein Einblick in unsere abgeschlossenen Projekte. Sehen Sie selbst die Qualität unserer Arbeit.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Butoni “mehr anzeigen” */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
          >
            {showAll ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
