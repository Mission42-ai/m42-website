
import React from 'react';

const Offer = () => {
  return (
    <section id="angebot" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-orange uppercase font-semibold tracking-wider mb-3">Unser Angebot für dich</p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">Das KI-Meisterschafts-Programm</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-gray-700 mb-8">
            Das Wachstumsprogramm für Unternehmen, die es mit KI ernst meinen und nachhaltig ihre Profitabilität steigern wollen (und das in Monaten, nicht Jahren).
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
