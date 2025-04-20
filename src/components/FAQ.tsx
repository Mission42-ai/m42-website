
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wir haben nicht genug Ressourcen – weder Zeit noch Personal – für KI-Projekte. Wie können wir KI trotzdem nutzen?",
      answer: "Unsere Community bietet fertige Lösungen und Frameworks, die speziell für ressourcenbeschränkte Unternehmen entwickelt wurden. Mit unseren Vorlagen und Anleitungen lassen sich KI-Projekte mit minimalem Aufwand umsetzen – ideal für Teams, die ohne Neueinstellungen oder große Zeitinvestitionen starten wollen."
    },
    {
      question: "Wir sind uns unsicher über die Kosten und den ROI von KI-Initiativen. Lohnt sich die Investition wirklich?",
      answer: "Unsere Mitglieder berichten von durchschnittlichen ROIs zwischen 3,5x und 10x ihrer Investitionen. In der Community teilen wir transparente ROI-Berechnungen für verschiedene KI-Anwendungsfälle und helfen dir, deine eigenen Zahlen zu berechnen. Du investierst nur dort, wo wir gemeinsam einen klaren Business Case entwickeln."
    },
    {
      question: "Uns fehlt das technische Know-how, um KI-Agenten zu entwickeln. Können wir das überhaupt schaffen?",
      answer: "Absolut! Unser Programm ist für technische Laien konzipiert. 80% unserer Mitglieder haben keine IT-Ausbildung. Wir bieten Step-by-Step Anleitungen und direkte Unterstützung, damit du auch ohne Programmierkenntnisse leistungsstarke KI-Anwendungen erstellen kannst."
    },
    {
      question: "Wir sind skeptisch gegenüber Beratern aufgrund schlechter Erfahrungen. Warum sollten wir euch vertrauen?",
      answer: "Wir sind keine klassischen Berater, sondern bauen eine Community von Praktikern auf. Unsere Garantie gibt dir Sicherheit: Wenn wir gemeinsam nicht mindestens einen erfolgreichen KI-Anwendungsfall implementieren, erhältst du deine volle Investition zurück. Die Testimonials unserer Mitglieder sprechen für sich."
    },
    {
      question: "Dauert die Einführung von KI nicht super lange?",
      answer: "Mit unserem erprobten Framework können erste KI-Projekte innerhalb von 1-2 Wochen umgesetzt werden. Unsere Mitglieder berichten regelmäßig von schnellen Erfolgen, die sofort Wirkung zeigen - von Automatisierungen, die täglich Stunden sparen, bis hin zu KI-Assistenten, die innerhalb von Tagen einsatzbereit sind."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">Du hast Fragen, <br />wir haben Antworten</h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-2"></div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-medium text-left text-brand-blue hover:text-brand-orange">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
