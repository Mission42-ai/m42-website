
import React from "react";
import { Check } from "lucide-react";

const Offer = () => {
  const benefits = [
    {
      title: "Execute – Sofortige Resultate",
      description: "Nutze unsere Productivity Labs, um gemeinsam mit unseren Experten direkte und messbare Erfolge zu realisieren."
    },
    {
      title: "Enable – Eigene KI-Champions",
      description: "Bilde deine Mitarbeiter zu KI-Champions aus, die als interne Multiplikatoren deinen nachhaltigen Erfolg sicherstellen."
    },
    {
      title: "Align – Nachhaltige Strategie",
      description: "Verankere mit deinem persönlichen Coach euer strategisches Vorgehen und stelle so euren langfristigen ROI sicher."
    },
    {
      title: "Amplify – Starkes Netzwerk",
      description: "Nutze das exklusive Mission42-Netzwerk für Austausch, Vorlagen und praktische Unterstützung rund um die Uhr."
    }
  ];

  return (
    <section
      id="angebot"
      className="py-20 px-4 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-orange uppercase font-semibold tracking-wider mb-3">
            Unser Angebot für dich
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Der AI-Productivity-Accelerator
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-gray-700 mb-12">
            Das Wachstumsprogramm für Unternehmen, die es mit KI ernst meinen
            und nachhaltig ihre Profitabilität steigern wollen (und das in
            Monaten, nicht Jahren).
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-brand-blue mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
