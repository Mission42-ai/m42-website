import React from "react";
import { Check } from "lucide-react";

const Offer = () => {
  const benefits = [
    {
      title: "Execute – Productivity Labs",
      description:
        "Wöchentliche, moderierte Deep-Work-Sprints, in denen du konkrete KI-Lösungen für dein Unternehmen entwickelst – mit sofort messbaren Ergebnissen. Keine Theorie, sondern echte Umsetzung mit Expert:innen an deiner Seite.",
    },
    {
      title: "Enable – Bilde deine KI-Champions aus",
      description:
        "Entwickle deine internen Multiplikatoren: Von No-Code Agent-Entwicklung bis zur EU-AI-Act-Konformität. Mit unserer Learning-Tracks und regelmäßigen Coach-Check-ins bauen wir gemeinsam deine internen KI-Experten auf.",
    },
    {
      title: "Align – Nachhaltige Strategie",
      description:
        "Verankere mit deinem persönlichen Coach euer strategisches Vorgehen und stelle so euren langfristigen ROI sicher. Wir begleiten dich von der Vision bis zur vollständigen Integration in deine Unternehmensprozesse.",
    },
    {
      title: "Amplify – Starkes Netzwerk",
      description:
        "Nutze das exklusive Mission42-Netzwerk für Austausch, Vorlagen und praktische Unterstützung rund um die Uhr. Lerne von anderen Unternehmer:innen, die denselben Weg gehen, und beschleunige deinen Erfolg.",
    },
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
            Das Transformationsprogramm für Unternehmen, die es mit KI ernst
            meinen und nachhaltig ihre Profitabilität steigern wollen (und das
            in Monaten, nicht Jahren).
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-brand-blue mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
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
