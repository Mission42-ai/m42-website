
import React from 'react';
import { Shield } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-16 px-4 bg-brand-blue text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          <Shield size={64} className="text-brand-orange mb-6" />
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Wir sind fest davon überzeugt, dass Mission42 dein Unternehmen nachhaltig verändern wird. Deshalb geben wir dir eine Garantie, die es in sich hat</h2>
          
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mt-6">
            <p className="text-lg">
              Wir garantieren dir, dass wir während des Programms mindestens einen konkreten KI-Anwendungsfall für dein Unternehmen identifizieren und erfolgreich realisieren, der deine Investition vollständig rechtfertigt. Solltest du währenddessen auf Hindernisse stoßen oder nicht die gewünschten Fortschritte erzielen, erhältst du von uns so lange individuelles Coaching, bis dein Use Case erfolgreich umgesetzt ist.
            </p>
            <p className="text-lg mt-4">
              Und falls wir trotz aller gemeinsamen Anstrengungen dieses Ziel nicht erreichen, bekommst du dein Investment vollständig zurückerstattet – ohne Kleingedrucktes, ohne Diskussion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
