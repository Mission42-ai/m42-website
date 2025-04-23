import React from "react";

type TestimonialProps = {
  name: string;
  title: string;
  company: string;
  content: string;
  imagePath?: string;
};

const TestimonialCard = ({
  name,
  title,
  company,
  content,
  imagePath,
}: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center">
      <div className="mb-6 flex flex-col items-center">
        <div className="h-40 w-40 rounded-full overflow-hidden mb-4 border-2 border-brand-orange">
          {imagePath ? (
            <img
              src={imagePath}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-brand-blue/10 flex items-center justify-center">
              <span className="text-2xl font-semibold text-brand-blue">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      <p className="text-gray-700 mb-6 text-center leading-relaxed">
        "{content}"
      </p>

      <div className="text-center">
        <h4 className="font-semibold text-brand-blue">{name}</h4>
        <p className="text-sm text-gray-600">
          {title}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Bernd Müller",
      title: "Gründer und Geschäftsführer",
      company: "Auto-Innovativ GmbH",
      content:
        "In meiner kurzen Zeit in der Community konnte ich bereits eine Vielzahl an praktischen Tools und Anwendungsfällen für KI kennenlernen. Der Austausch hat dazu geführt, dass ich viele neue Ideen für den Einsatz von KI identifizieren konnte. Mein persönliches Highlight war die Arbeit mit KI-Agenten.",
      imagePath: "/testimonial-pictures/bernd-mueller.jpeg",
    },
    {
      name: "Jens Wemheuer",
      title: "Gründer und Geschäftsführer",
      company: "Infinitas GmbH",
      content:
        "Die inspirierenden Workshops haben uns gezeigt, wie wir KI ohne großen Aufwand in unsere Prozesse integrieren können. Das hat unsere Sicht auf zukünftige Projekte nachhaltig beeinflusst.",
      imagePath: "/testimonial-pictures/jens-wemheuer.jpeg",
    },
    {
      name: "Jessica Hutchinson",
      title: "Head of Retention",
      company: "Purelei GmbH",
      content:
        "Die Sessions in der Mission42 haben mir praktische Wege aufgezeigt, wie ich KI im Alltag nutzen kann, um produktiver zu sein. Die Inhalte und Sessions werden auf Basis des Community-Feedbacks kontinuierlich angepasst und liefern echten Mehrwert.",
      imagePath: "/testimonial-pictures/jessica.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-brand-orange uppercase font-semibold tracking-wider mb-3">
            Erfahrungen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Und das sagen unsere Mitglieder
          </h2>
          <div className="h-1 w-20 bg-brand-orange mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;