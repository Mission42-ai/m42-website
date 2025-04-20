
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
        "Garantierte Produktivitätssteigerung von mind. 10%"
      ]
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
        "Garantierte Produktivitätssteigerung von mind. 15%"
      ]
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
        "Garantierte Produktivitätssteigerung von mind. 15%"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Dein Weg zur garantierten KI-Produktivität: Unsere Pakete
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            Alle vier Säulen unseres Ansatzes – von den Productivity Labs über die Ausbildung Deiner Champions und Executives bis zur Community und den Coachings – bündeln wir für Dich in drei maßgeschneiderten Paketen. Wähle den AI Productivity Accelerator, der am besten zu Deinen Zielen und Deiner Unternehmensgröße passt:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 ${
                pkg.isHighlighted
                  ? "bg-brand-blue text-white shadow-xl scale-105"
                  : "bg-gray-50"
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-sm mb-4 opacity-80">{pkg.ideal}</p>
              <div className="text-3xl font-bold mb-6">
                €{pkg.price},-
                <span className="text-sm font-normal"> /Monat zzgl. MwSt.</span>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`h-5 w-5 ${pkg.isHighlighted ? "text-brand-orange" : "text-brand-blue"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  pkg.isHighlighted
                    ? "bg-brand-orange hover:bg-brand-orange/90"
                    : "bg-brand-blue hover:bg-brand-blue/90"
                }`}
              >
                {pkg.name} wählen
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-gray-600">
            Alle Pakete sind als Jahresprogramm mit bequemer monatlicher Zahlung konzipiert.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              <strong>Wie funktioniert unsere Garantie?</strong> Wir stehen zu unserem Versprechen! Zu Beginn definieren wir gemeinsam messbare Ziele (KPIs) für ausgewählte Prozesse. Sollten wir diese Ziele wider Erwarten nicht innerhalb des vereinbarten Zeitraums erreichen, greift unsere Zufriedenheitsgarantie.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xl text-gray-700">
              Egal, für welches Paket Du Dich entscheidest: Du investierst in eine nachhaltige Transformation mit messbaren Ergebnissen, baust wertvolles internes Know-how auf und profitierst von der Sicherheit unseres Garantieversprechens und der Kraft unserer Community.
            </p>
            <p className="text-2xl font-semibold text-brand-blue">
              Bereit, den nächsten Schritt zu gehen?
            </p>
            <p className="text-gray-700">
              Wähle Dein Paket oder vereinbare ein unverbindliches Strategiegespräch, um gemeinsam die beste Lösung für Dein Unternehmen zu finden.
            </p>
            <Button size="lg" className="bg-brand-orange hover:bg-brand-orange/90">
              Jetzt Strategiegespräch vereinbaren
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
