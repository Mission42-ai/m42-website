
import React from 'react';
import { Button } from "@/components/ui/button";

const TextWithImage = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-brand-blue mb-6">Schnauze voll von teuren Experimenten?</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Wie viele Technologien zuvor erfordert auch der erfolgreiche Einsatz von KI eine grundlegende Transformation deines Unternehmens. Vielleicht hast du es selbst schon erlebt: Schnell werden mal eben tausende von Euros investiert – ohne jeglichen Mehrwert, ohne echte Ergebnisse.
              </p>
              <p>
                Viele Unternehmer:innen versuchen, die KI-Transformation allein umzusetzen – ganz nach dem Motto „Einfach mal machen". Das Ergebnis: teure Fehlschläge, unnötiger Stress und verpasste Chancen. Wir nennen das liebevoll das „Einsamer-Wolf-Syndrom" – und es ist unzuverlässig, extrem stressig und in der Regel sehr teuer.
              </p>
              <p>
                Das musst du nicht alleine durchmachen: In der Mission42 Community profitierst du von unserem KI-Wissen, sowie jahrzehntelangen Erfahrung in Technologieprojekten und erfolgreicher Unternehmenstransformation. Wir sind selber Unternehmer und haben in den vergangenen Jahren bereits über 100 Technologie- und Transformationsprojekte erfolgreich umgesetzt. Deshalb kennen wir die Stolperfallen ganz genau.
              </p>
            </div>
            <div className="mt-8">
              <Button className="bg-brand-orange hover:bg-brand-blue text-white px-6 py-2">
                Jetzt Teil der Community werden
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Bild: KI-Transformation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
