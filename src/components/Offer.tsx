
import React from "react";
import { Check, Target, Lightbulb, Compass, Megaphone } from "lucide-react";

const Offer = () => {
  const benefits = [
    {
      icon: <Target className="h-5 w-5 text-brand-orange" />,
      title: "Durchbrüche durch fokussierte Umsetzung",
      description:
        'Echter Fortschritt entsteht im Tun. Statt endloser Planung setzen wir auf die Kraft konzentrierter Arbeitsphasen ("Deep Work"). In kurzer Zeit konkrete, messbare Ergebnisse zu erzielen, schafft nicht nur sofortigen Nutzen, sondern erzeugt entscheidendes Momentum und überwindet die natürliche Trägheit in Organisationen.',
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-brand-orange" />,
      title: "Nachhaltige Transformation durch interne Multiplikatoren",
      description:
        "Wahre Transformation kommt von innen. Langfristiger Erfolg mit KI hängt davon ab, das eigene Team zu befähigen. Der Aufbau interner Wissensmultiplikatoren, die sowohl das Geschäft als auch die KI-Werkzeuge verstehen, ist der Schlüssel zur Skalierung, zur Unabhängigkeit und zur Entwicklung einer lernenden Organisation.",
    },
    {
      icon: <Compass className="h-5 w-5 text-brand-orange" />,
      title: "Wirkung durch strategische Ausrichtung",
      description:
        "Technologie muss der Strategie folgen, nicht umgekehrt. Nur wenn KI-Initiativen klar auf die Unternehmensziele einzahlen, Führungskräfte den Wandel vorleben und Prozesse angepasst werden, entfaltet KI ihr volles Potenzial. Aktives Change Management und klare Verantwortlichkeiten sind unerlässlich, um alle an Bord zu holen und Reibungsverluste zu minimieren.",
    },
    {
      icon: <Megaphone className="h-5 w-5 text-brand-orange" />,
      title: "Beschleunigung durch kollektive Intelligenz",
      description:
        "Niemand muss das Rad neu erfinden. Lernen und Wachstum beschleunigen sich exponentiell, wenn Erfahrungen, bewährte Lösungen und Herausforderungen in einem vertrauensvollen Netzwerk geteilt werden. Der Zugang zu kollektiver Intelligenz und Peer-Support steigert den Erfolg jedes Einzelnen und der gesamten Organisation.",
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
            Unser Erfolgsrezept
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Das Mission42 Framework
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-gray-700 mb-12">
            KI-Transformation ist eine strategische Reise, kein IT-Projekt.
            Einfach nur Tools einzuführen, reicht nicht aus. Für nachhaltigen
            Erfolg braucht es einen klaren Plan, die richtigen internen
            Fähigkeiten und eine Kultur, die den Wandel aktiv gestaltet. Deshalb
            basiert unser Ansatz auf vier universellen Erfolgsprinzipien, die
            sicherstellen, dass dein Unternehmen dauerhaft von KI profitiert:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    {benefit.icon}
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
