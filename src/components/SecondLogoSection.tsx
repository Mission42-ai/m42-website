
import React from 'react';

const SecondLogoSection = () => {
  const partnerLogos = [
    { name: "Technologie Partner 1" },
    { name: "Technologie Partner 2" },
    { name: "Technologie Partner 3" },
    { name: "Technologie Partner 4" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <p className="text-lg text-gray-600">Unsere Technologiepartner</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="h-12 w-36 bg-gray-100 rounded-md flex items-center justify-center">
              <span className="text-gray-500 font-medium">{logo.name}</span>
            </div>
          ))}
          <div className="h-12 w-auto flex items-center justify-center">
            <img 
              src="/lovable-uploads/aa422c90-2222-446e-ad6c-19bdbb3d3531.png" 
              alt="Mission42 Logo" 
              className="h-10" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondLogoSection;
