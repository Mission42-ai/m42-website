import React from "react";
import { Check, Target, Lightbulb, Compass, Megaphone } from "lucide-react";

const Offer = () => {
  const benefits = [
    {
      icon: <Target className="h-5 w-5 text-brand-orange" />,
      title: "Durchbrüche durch fokussierte Umsetzung",
      description:
        "Wir glauben an die Kraft des Machens! Statt Dich in Theorie zu verlieren, konzentrieren wir uns auf sofortige, messbare Erfolge, die Dich und Dein Team motivieren. Deshalb setzt Du in unseren wöchentlichen Productivity Labs KI-Lösungen direkt praktisch um und siehst sofort Resultate für Dein Unternehmen.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-brand-orange" />,
      title: "Nachhaltige Transformation durch interne Multiplikatoren",
      description:
        "Nachhaltige KI-Transformation lebt von internem Know-how. Damit Du unabhängig von externen Experten wirst, bilden wir Deine Mitarbeiter in der KI-Champion Class zu zertifizierten Multiplikatoren aus. Sie lernen, KI-Tools souverän anzuwenden und das Wissen im Unternehmen zu verankern.",
    },
    {
      icon: <Compass className="h-5 w-5 text-brand-orange" />,
      title: "Wirkung durch strategische Ausrichtung",
      description:
        "Technologie allein ist nicht alles. Damit KI wirklich wirkt, müssen Strategie, Führung und Abläufe Hand in Hand gehen. In der KI-Executive Class bilden wir Deine Führungskräfte aus, damit sie eine klare Vision entwickeln und ein effektives Operating System für die KI-Implementierung in Deinem Unternehmen etablieren können. Regelmäßige Coach Check-ins helfen Dir zusätzlich dabei, den Fokus zu halten und Deine Fortschritte konsequent an der Strategie auszurichten.",
    },
    {
      icon: <Megaphone className="h-5 w-5 text-brand-orange" />,
      title: "Beschleunigung durch kollektive Intelligenz",
      description:
        "Du musst nicht jeden Fehler selbst machen oder das Rad neu erfinden. Unsere exklusive Mission42 Community verstärkt Deinen Erfolg: Profitiere vom Austausch mit Gleichgesinnten, Experten-Support und einer wachsenden Bibliothek an Vorlagen und erprobten Best Practices.",
    },
  ];

  return (
    <section
      id="angebot"
      className="py-20 px-4"
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
                <div className="flex flex-col items-center">
                  <div className="mb-4">
                    <div className="bg-gray-50 p-4 rounded-full">
                      {React.cloneElement(benefit.icon as React.ReactElement, {
                        className: "h-8 w-8 text-brand-orange",
                      })}
                    </div>
                  </div>
                  <div className="text-center">
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
