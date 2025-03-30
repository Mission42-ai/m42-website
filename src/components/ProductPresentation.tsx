
import React from 'react';
import { CheckCircle } from 'lucide-react';

const ProductPresentation = () => {
  const features = [
    "Für jede Rolle das Richtige: Eigene Kurse und Inhalte speziell zugeschnitten auf Führungskräfte und Mitarbeitende",
    "Über 200 inspirierende Live-Sessions: Regelmäßige, praxisnahe Sessions zu KI-Strategien, innovativen KI-Tools und mehr",
    "Community statt Konkurrenzdenken: Triff auf KI-Enthusiasten und gleichgesinnte Unternehmer:innen",
    "Ein geschützter Raum für KI-Führungskräfte: Tausche dich auf Augenhöhe und vertraulich aus",
    "Direkt anwendbare KI-Lösungen: Greife auf eine ständig wachsende Bibliothek voller erprobter KI-Anwendungsfälle zu"
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-12">
          Die effektivste Plattform, um dein Unternehmen KI-Ready zu machen.
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-10 text-center">
            Stell dir vor, es gäbe einen Ort, an dem wirklich jeder in deinem Unternehmen – von der Geschäftsführung bis hin zu den Mitarbeiter:innen – genau die Unterstützung erhält, die er oder sie für die erfolgreiche KI-Transformation braucht. Genau das haben wir geschaffen:
          </p>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex">
                <div className="mr-4 text-brand-orange">
                  <CheckCircle size={24} />
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-10 text-lg">
            In der Mission42 Community bekommst du alles, was du brauchst, um die KI-Transformation deines Unternehmens wirklich umzusetzen – ohne Umwege, ohne Unsicherheit, dafür mit viel Spaß und echter Begeisterung.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPresentation;
