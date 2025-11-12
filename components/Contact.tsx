import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-white"
                        style={{ fontFamily: "'Roboto Slab', serif" }}
                    >
                        Kontaktieren Sie uns
                    </h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Haben Sie ein Projekt im Sinn? Wir freuen uns darauf, von Ihnen zu hören.
                        Fordern Sie jetzt eine kostenlose Beratung an!
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-dark-bg p-8 rounded-lg shadow-xl">
                    {/* Kontaktinfo */}
                    <div className="text-gray-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Kontaktinformationen</h3>
                        <p className="mb-4">
                            Wir sind für Sie da, um Ihre Fragen zu beantworten und Ihr nächstes Projekt zu planen.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span>📍 Donauwörth, Deutschland</span>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="tel:+491739413408"
                                    className="hover:text-primary transition-colors"
                                >
                                    📞 +49 173 9413408
                                </a>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="mailto:matini_bau23@web.de"
                                    className="hover:text-primary transition-colors"
                                >
                                    ✉️ matini_bau23@web.de
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulari me Formspree */}
                    <form
                        action="https://formspree.io/f/mldadrgj" // ← vendose linkun tënd nga Formspree
                        method="POST"
                        className="space-y-4"
                    >
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="project"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Projekt
                            </label>
                            <input
                                type="text"
                                id="project"
                                name="project"
                                placeholder="z. B. Gartenbau, Renovierung..."
                                className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-medium text-gray-300 mb-1"
                            >
                                Nachricht
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md"
                        >
                            Nachricht senden
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
