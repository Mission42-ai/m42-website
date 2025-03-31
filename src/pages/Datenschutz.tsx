
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="container mx-auto py-24 flex-grow px-4 md:px-6">
        <div className="max-w-3xl mx-auto prose prose-headings:text-brand-blue prose-a:text-brand-orange">
          {/* Platzhalter für Datenschutztext - Bitte HTML hier einfügen */}
          <h1>Datenschutzerklärung</h1>
          <p>Bitte fügen Sie hier Ihren Datenschutztext ein.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
