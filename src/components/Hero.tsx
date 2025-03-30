
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-blue mb-6 max-w-5xl mx-auto leading-tight">
          Das KI-Doping* für dein Unternehmen.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          KI für dein Unternehmen zu adaptieren ist schwer. Wir machen es einfacher, vorhersehbarer, weniger stressig - und viel spaßiger.
        </p>
        <Button className="bg-brand-orange hover:bg-brand-blue text-white text-lg px-8 py-6 rounded-md shadow-lg transition-all">
          Mehr erfahren
        </Button>
        <p className="text-sm text-gray-500 mt-6">
          *nur 100% legal (versprochen!)
        </p>
      </div>
    </section>
  );
};

export default Hero;
