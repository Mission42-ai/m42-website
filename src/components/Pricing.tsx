import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "KI-Champion Basic",
      price: "990",
      ideal: "Erste Schritte & kleine Teams",
      features: [
        "2 Plätze für KI-Champions/Executives",
        "Zugang Community Productivity Labs (2x wöchentl.)",
        "Zugang zur Mission42 Community (für Teilnehmer)",
        "Zugang zum monatl. Executive Briefing",
        "Coach Check-in (15 Min, monatlich)",
      ],
    },
    {
      name: "KI-Champion Professional",
      price: "2.900",
      ideal: "Umfassender Aufbau & mittlere Teams",
      isHighlighted: true,
      features: [
        "6 Plätze für KI-Champions/Executives",
        "Zugang Community Productivity Labs (2x wöchentl.)",
        "Zugang zur Mission42 Community (für Teilnehmer)",
        "Zugang zum monatl. Executive Briefing",
        "Coach Check-in (15 Min, 14-täglich)",
        "EU AI Act Zertifizierung für Mitarbeiter",
      ],
    },
    {
      name: "KI-Enterprise Transformation",
      price: "4.900",
      ideal: "Skalierte Transformation & große Teams",
      features: [
        "15 Plätze für KI-Champions/Executives",
        "Zugang Community Productivity Labs (2x wöchentl.)",
        "Exklusive Productivity Labs für Dein Team (1x wöchentlich)",
        "Zugang zur Mission42 Community (für alle Mitarbeiter)",
        "Zugang zum monatl. Executive Briefing",
        "Coach Check-in (15 Min, wöchentlich)",
        "EU AI Act Zertifizierung für Mitarbeiter",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Dein Weg zur garantierten KI-Produktivität: Unsere Pakete
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Alle vier Säulen unseres Ansatzes – von den Productivity Labs über
            die Ausbildung Deiner Champions und Executives bis zur Community und
            den Coachings – bündeln wir für Dich in drei maßgeschneiderten
            Paketen. Wähle den AI Productivity Accelerator, der am besten zu
            Deinen Zielen und Deiner Unternehmensgröße passt:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 px-4 md:px-0">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 md:p-8 flex flex-col h-full ${
                pkg.isHighlighted
                  ? "bg-brand-blue text-white shadow-xl md:scale-105"
                  : "bg-gray-50"
              }`}
            >
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-sm mb-4 opacity-80">{pkg.ideal}</p>
                <div className="text-3xl font-bold mb-6">
                  €{pkg.price},-
                  <span className="text-sm font-normal"> /Monat zzgl. MwSt.</span>
                </div>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check
                        className={`h-5 w-5 ${pkg.isHighlighted ? "text-brand-orange" : "text-brand-blue"}`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a href="https://calendar.app.google/gzKyuKMMiJdvN1fz9" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button
                    className={`w-full ${
                      pkg.isHighlighted
                        ? "bg-brand-orange hover:bg-brand-orange/90"
                        : "bg-brand-blue hover:bg-brand-blue/90"
                    }`}
                  >
                    Jetzt Beratungsgespräch vereinbaren
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;