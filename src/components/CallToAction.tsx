import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
          Was wir dir eigentlich sagen wollen: Du solltest wirklich mit uns
          reden…
        </h2>

        <p className="text-lg mb-10">
          Starte noch heute und werde Teil unserer wachsenden KI-Community.
          Sichere dir deinen Platz und lass uns gemeinsam dein Unternehmen
          transformieren.
        </p>

        <a href="https://calendar.app.google/gzKyuKMMiJdvN1fz9" target="_blank" rel="noopener noreferrer">
          <Button className="bg-brand-orange hover:bg-brand-blue text-white text-lg px-6 py-5 rounded-md shadow-lg transition-all w-full md:w-auto whitespace-normal md:whitespace-nowrap">
            Beratungsgespräch vereinbaren
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
