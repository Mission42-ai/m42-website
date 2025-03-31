
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Impressum = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="container mx-auto py-24 flex-grow px-4 md:px-6">
        <div className="max-w-3xl mx-auto prose prose-headings:text-brand-blue prose-a:text-brand-orange">
          <h1>Impressum</h1>

          <p>Konstantin Kalheber<br />
          Konstantin Kalheber (Einzelunternehmer)<br />
          Boxhagener Str. 33<br />
          10245 Berlin</p>

          <h2>Kontakt</h2>
          <p>E-Mail: konstantin@mission42.ai</p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
          DE367157144</p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Konstantin Kalheber<br />
          Boxhagener Str. 33<br />
          10245 Berlin</p>

          <h2>EU-Streitschlichtung</h2>
          <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <h2>Zentrale Kontaktstelle nach dem Digital Services Act - DSA (Verordnung (EU) 2022/265)</h2>
          <p>Unsere zentrale Kontaktstelle f&uuml;r Nutzer und Beh&ouml;rden nach Art. 11, 12 DSA erreichen Sie wie folgt:</p>
          <p>E-Mail: konstantin@mission42.ai</p>
          <p>Die für den Kontakt zur Verf&uuml;gung stehenden Sprachen sind: Deutsch, Englisch.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
