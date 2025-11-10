import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white" style={{ fontFamily: "'Roboto Slab', serif" }}>Kontaktieren Sie uns</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                        Haben Sie ein Projekt im Sinn? Wir freuen uns darauf, von Ihnen zu hören. Fordern Sie jetzt eine kostenlose Beratung an!
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 bg-dark-bg p-8 rounded-lg shadow-xl">
                    <div className="text-gray-300">
                        <h3 className="text-2xl font-bold text-white mb-4">Kontaktinformationen</h3>
                        <p className="mb-4">
                            Wir sind für Sie da, um Ihre Fragen zu beantworten und Ihr nächstes Projekt zu planen.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Donauwörth, Deutschland</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <a href="tel:+491739413408" className="hover:text-primary transition-colors">+49 173 9413408</a>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <a href="mailto:matini_bau23@web.de" className="hover:text-primary transition-colors">matini_bau23@web.de</a>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                                <input type="text" id="name" name="name" className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                                <input type="email" id="email" name="email" className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Nachricht</label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-light-bg border border-gray-600 rounded-md py-2 px-3 text-text-dark focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark transition duration-300 shadow-md">
                                Nachricht senden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;