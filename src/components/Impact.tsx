
import React from 'react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 px-4 bg-brand-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">KI Impact – Der entscheidende Wettbewerbsvorteil</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-12">
            Generative KI verändert den Markt in atemberaubender Geschwindigkeit. Führende Studien zeigen klar: Unternehmen, die jetzt handeln, sichern sich nachhaltige Wettbewerbsvorteile, während Zögernde zurückbleiben.
          </p>
          
          <p className="text-lg mb-12">
            Die Zahlen sprechen für sich: Unternehmen, die bereits konsequent auf KI setzen, erzielen nachweislich enorme Vorteile – von signifikanten Kosteneinsparungen über massive Produktivitätssteigerungen bis hin zu beeindruckenden Umsatzzuwächsen. Der Schlüssel liegt darin, nicht nur zu experimentieren, sondern die KI konsequent und strategisch einzusetzen.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <span className="text-4xl md:text-5xl font-bold text-brand-orange">2,5x</span>
                <span className="ml-3 text-xl font-medium">mehr Umsatz</span>
              </div>
              <p className="text-gray-200">
                Unternehmen, die ihre Prozesse vollständig mit KI modernisiert haben, wachsen durchschnittlich 2,5-mal schneller und erreichen eine um 2,4-mal höhere Produktivität pro Mitarbeiter als ihre Wettbewerber (Accenture, 2024).
              </p>
            </div>
            
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <span className="text-4xl md:text-5xl font-bold text-brand-orange">3,7€</span>
                <span className="ml-3 text-xl font-medium">mehr ROI</span>
              </div>
              <p className="text-gray-200">
                Jeder investierte Euro in generative KI bringt durchschnittlich 3,70 Euro zurück – die erfolgreichsten Unternehmen erreichen sogar einen ROI von über 10x (IDC, 2024).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
