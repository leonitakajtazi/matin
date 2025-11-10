import React from 'react';

// Quote Icon
const QuoteIcon = () => (
    <svg className="w-12 h-12 text-primary/50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
);

// Star Icon
const StarIcon = () => (
    <svg className="w-5 h-5 text-secondary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.455 8.55l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.545 8.55a1.535 1.535 0 0 0 .379-.925Z"/>
    </svg>
);

const testimonials = [
    {
        quote: "Matini Bau hat unsere Einfahrt komplett neu gepflastert. Das Ergebnis ist fantastisch! Pünktlich, sauber und absolut professionell. Sehr zu empfehlen!",
        name: "Familie Schmidt",
        location: "Gartenrenovierung, Donauwörth",
        rating: 5,
    },
    {
        quote: "Von der ersten Beratung bis zur finalen Umsetzung fühlten wir uns bestens aufgehoben. Unser Garten ist jetzt eine echte Wohlfühloase. Vielen Dank an das ganze Team!",
        name: "Markus L.",
        location: "Terrassenbau, Mertingen",
        rating: 5,
    },
    {
        quote: "Zuverlässig und mit einem super Preis-Leistungs-Verhältnis. Die Steinarbeiten an unserer Grundstücksgrenze wurden genau nach unseren Vorstellungen umgesetzt.",
        name: "H. Wagner",
        location: "Steinarbeiten, Rain am Lech",
        rating: 5,
    },
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>Was unsere Kunden sagen</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Ihre Zufriedenheit ist unser größter Ansporn und die beste Referenz.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-dark-bg p-8 rounded-lg shadow-xl flex flex-col justify-between transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="flex-grow">
                                <QuoteIcon />
                                <p className="text-gray-300 italic my-6">"{testimonial.quote}"</p>
                            </div>
                            <div className="flex-shrink-0">
                                <div className="flex items-center mb-2">
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <StarIcon key={i} />
                                    ))}
                                </div>
                                <p className="font-bold text-white text-lg">{testimonial.name}</p>
                                <p className="text-gray-400 text-sm">{testimonial.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;