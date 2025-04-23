import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-52 md:pb-40 lg:pt-64 lg:pb-52 px-4 relative bg-transparent">
      <img
        src="/background/hero.webp"
        width={1920}
        height={900}
        alt="Unternehmer sieht KI-Dashboard von Mission42"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        loading="eager"
        style={{ objectPosition: 'center center' }}
      />
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-brand-blue mb-6 max-w-5xl mx-auto leading-tight">
          Das KI-Doping* für dein Unternehmen.
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
          KI für dein Unternehmen zu adaptieren ist schwer. Wir machen es
          einfacher, vorhersehbarer, weniger stressig - und viel spaßiger.
        </p>
        <a
          href="https://calendar.app.google/gzKyuKMMiJdvN1fz9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-brand-orange hover:bg-brand-blue text-white text-lg px-6 py-5 rounded-md shadow-lg transition-all w-full md:w-auto whitespace-normal md:whitespace-nowrap">
            Beratungsgespräch vereinbaren
          </Button>
        </a>
        <div className="flex justify-center mt-6">
          <div className="flex items-center gap-3 bg-emerald-100 border border-emerald-300 rounded-xl px-4 py-2 w-max">
            <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2l2 5h5l-4 3.5 1.5 5L10 13l-4.5 2.5L7 10.5 3 7h5l2-5z" />
            </svg>
            <span className="text-sm font-semibold text-emerald-700">
              100 % Use-Case-Garantie
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          *nur 100% legal (versprochen!)
        </p>
      </div>
    </section>
  );
};

export default Hero;
