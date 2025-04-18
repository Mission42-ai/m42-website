
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Framework = () => {
  const frameworkData = [
    {
      id: "execute",
      title: "Execute",
      subtitle: "Schnelle, messbare Erfolge",
      description: "Konkrete Produktivitätsgewinne durch fokussierte \"Doing\"-Sessions.",
      stats: [
        "Eine UK-Studie mit ca. 10.000 KMUs zeigt: KI-\"Quick Wins\" steigern die Produktivität um 27-133% in den ersten Monaten",
        "Accenture belegt: Unternehmen mit vollständig KI-geführten Prozessen erreichen eine 2,4-fach höhere Produktivität als ihre Wettbewerber",
        "74% der Unternehmen berichten, dass ihre wichtigsten KI-Initiativen die ROI-Erwartungen bereits erfüllen oder übertreffen"
      ]
    },
    {
      id: "enable",
      title: "Enable",
      subtitle: "Nachhaltige interne Kompetenz aufbauen",
      description: "Dauerhafte interne Fähigkeiten und Multiplikatoren entwickeln (Menschen, Skills, Playbooks).",
      stats: [
        "Transformationen mit gezieltem Kompetenzaufbau erreichen ihre Ziele in 79% der Fälle – ohne nur in 26%",
        "Produktivitätsführer investieren 33% mehr in Schulungen und verzeichnen ein Outputwachstum von über 8% pro Jahr"
      ]
    },
    {
      id: "align",
      title: "Align",
      subtitle: "Strategische Kohärenz schaffen",
      description: "Prozesse, Governance und Führung ziehen in eine Richtung.",
      stats: [
        "Wenn Führungskräfte neue Arbeitsweisen vorleben, werden Veränderungsinitiativen 5,3-mal wahrscheinlicher erfolgreich",
        "Deloitte stellt fest: Fast 70% der Verzögerungen bei der KI-Einführung stammen von fehlausgerichteter Governance und Talentprozessen"
      ]
    },
    {
      id: "amplify",
      title: "Amplify",
      subtitle: "Netzwerkeffekte nutzen",
      description: "Community-Effekte nutzen, damit jeder neue Anwender den Wert für alle steigert.",
      stats: [
        "Systematische Überprüfung von 50 Communities-of-Practice (CoP) Studien: In 8 von 9 quantitativen Untersuchungen wurden statistisch signifikante Leistungsverbesserungen nachgewiesen",
        "Netzwerkeffekt-Forschung zeigt: Ökosystem-Nutzen, Komplementarität und Kompatibilität treiben gemeinsam exponentielles Wachstum"
      ]
    }
  ];

  return (
    <section className="py-20 bg-brand-blue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            KI Impact – Der entscheidende Wettbewerbsvorteil
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-4 mb-8"></div>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 text-gray-200">
            Generative KI verändert den Markt in atemberaubender Geschwindigkeit. Führende Studien zeigen klar: Unternehmen, die jetzt handeln, sichern sich nachhaltige Wettbewerbsvorteile, während Zögernde zurückbleiben.
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-12 text-gray-200">
            Die Zahlen sprechen für sich: Unternehmen, die bereits konsequent auf KI setzen, erzielen nachweislich enorme Vorteile – von signifikanten Kosteneinsparungen über massive Produktivitätssteigerungen bis hin zu völlig neuen Geschäftsmodellen.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="aspect-square bg-white/10 rounded-lg mb-8 backdrop-blur-sm flex items-center justify-center">
              <span className="text-gray-300">Infografik Platzhalter</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Das Vier-Säulen-Framework
            </h3>
            <p className="text-gray-200 mb-8 text-center lg:text-left">
              Unser bewährtes Framework basiert auf vier Säulen, die gemeinsam den Erfolg deiner KI-Transformation sicherstellen:
            </p>
          </div>

          <div className="lg:w-2/3">
            <Tabs defaultValue="execute" className="w-full">
              <TabsList className="flex flex-wrap mb-6 bg-white/10 p-1">
                {frameworkData.map((pillar) => (
                  <TabsTrigger
                    key={pillar.id}
                    value={pillar.id}
                    className="flex-1 data-[state=active]:bg-brand-orange data-[state=active]:text-white"
                  >
                    {pillar.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {frameworkData.map((pillar) => (
                <TabsContent key={pillar.id} value={pillar.id} className="mt-6">
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold mb-2 text-brand-orange">
                      {pillar.subtitle}
                    </h4>
                    <p className="text-gray-200 mb-6">{pillar.description}</p>
                    <div className="space-y-4">
                      <h5 className="font-semibold mb-2">Die Zahlen belegen es:</h5>
                      <ul className="space-y-3">
                        {pillar.stats.map((stat, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-brand-orange mr-2">•</span>
                            <span className="text-gray-200">{stat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
