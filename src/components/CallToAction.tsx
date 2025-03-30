
import React from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Was wir dir eigentlich sagen wollen: Du solltest wirklich mit uns reden…
        </h2>
        
        <p className="text-lg mb-10">
          Starte noch heute und werde Teil unserer wachsenden KI-Community. Sichere dir deinen Platz und lass uns gemeinsam dein Unternehmen transformieren.
        </p>
        
        <Button className="bg-brand-orange hover:bg-brand-blue text-white text-lg px-8 py-6 rounded-md shadow-lg transition-all">
          Jetzt Beratungsgespräch vereinbaren
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
