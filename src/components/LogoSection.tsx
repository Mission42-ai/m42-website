import React from "react";

const LogoSection = () => {
  const logos = [
    { name: "SMB Academy", path: "/customer-logos/SMB-Academy-Logo.png" },
    { name: "dotlux", path: "/customer-logos/dotlux-logo.png" },
    { name: "Fork", path: "/customer-logos/fork-logo.webp" },
    { name: "KIO Rocks", path: "/customer-logos/kio-rocks-logo.svg" },
    { name: "Robos Labels", path: "/customer-logos/robos-labels-logo.png" },
  ];

  return (
    <section className="py-12 bg-brand-blue">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-20 w-48 flex items-center justify-center p-6"
            >
              <img
                src={logo.path}
                alt={`${logo.name} Logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
