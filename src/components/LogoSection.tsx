import React from "react";
import { imagePaths } from "../utils/imageUtils";

const LogoSection = () => {
  const logos = [
    { name: "Partner 1" },
    { name: "Partner 2" },
    { name: "Partner 3" },
    { name: "Partner 4" },
    { name: "Partner 5" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center"
            >
              <span className="text-gray-500 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
