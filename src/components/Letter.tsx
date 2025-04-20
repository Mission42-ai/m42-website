import React from 'react';
import { format, subDays } from 'date-fns';
import { de } from 'date-fns/locale';

const Letter = () => {
  const date = format(subDays(new Date(), 2), 'd. MMMM yyyy', { locale: de });

  return (
    <section className="py-16 md:py-24 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("/background/orange.png")' }}>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-lg shadow-xl border border-gray-200 rotate-[0.5deg]">
          <div className="mb-6 text-right text-gray-500">
            <p>Aktualisiert: {date}</p>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-blue">Liebe Unternehmerin, lieber Unternehmer,</h2>

          <div className="space-y-4 text-gray-700">
            <p>Hand aufs Herz:<br />
            KI fühlt sich gerade nicht nach Revolution an, sondern nach purer Überforderung.</p>

            <p>Jeden Tag wirst du von neuen KI-Ideen überflutet. Jeder LinkedIn-Post, jeder Newsletter schreit dir zu: „Mach jetzt KI, sonst bist du weg vom Fenster!"<br />
            Und obwohl du spürst, dass da tatsächlich etwas Großes passiert, fühlst du dich festgefahren, überfordert und ehrlich gesagt ein bisschen genervt.</p>

            <p>Klar, du hast ChatGPT ausprobiert. Vielleicht sogar ein paar Tools gekauft. Aber statt Klarheit herrscht Chaos.<br />
            Du fragst dich, ob du jetzt tatsächlich jeden einzelnen Prozess automatisieren musst. Ob du das überhaupt alleine stemmen kannst – oder ob du dir sündhaft teure Agenturen ins Haus holen sollst, die dann dein Business gar nicht richtig verstehen.</p>

            <p>Dazu kommen noch die ständigen Zweifel deiner Mitarbeiter:<br />
            „Wird KI meinen Job überflüssig machen?"<br />
            „Schon wieder ein neues Tool, was sollen wir denn noch alles lernen?"</p>

            <p>Kein Wunder, dass du inzwischen nachts wach liegst.<br />
            Du bist müde von der ständigen Unsicherheit. Müde vom Aktionismus.<br />
            Und du willst nicht noch ein halbes Jahr mit blindem Experimentieren verschwenden, nur um am Ende des Jahres exakt da zu stehen, wo du heute bist.</p>

            <p>Das Problem ist nicht, dass du die Chancen von KI nicht erkennst. Das Problem ist, dass niemand dir bisher einen klaren, nachvollziehbaren Weg gezeigt hat, der wirklich zu deinem Unternehmen passt.</p>

            <p>Wir verstehen das. Sehr gut sogar.<br />
            Denn genau dafür sind wir angetreten: Um dich aus diesem KI-Chaos herauszuführen.<br />
            Klar, strukturiert und mit messbaren Ergebnissen, die dich endlich wieder ruhig schlafen lassen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;