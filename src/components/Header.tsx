
import React from 'react';
import { Button } from "@/components/ui/button";
import { imagePaths } from '../utils/imageUtils';

const Header = () => {
  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-8 fixed top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src={imagePaths.brand.logo}
            alt="Mission42 Logo" 
            className="h-10 md:h-12 logo-transition" 
          />
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href="#angebot" className="text-gray-700 hover:text-brand-orange transition-colors">Unser Angebot</a>
          <a href="#impact" className="text-gray-700 hover:text-brand-orange transition-colors">KI Impact</a>
          <a href="#testimonials" className="text-gray-700 hover:text-brand-orange transition-colors">Testimonials</a>
          <a href="#faq" className="text-gray-700 hover:text-brand-orange transition-colors">FAQ</a>
        </nav>
        
        <Button className="bg-brand-orange hover:bg-brand-blue text-white shadow-sm transition-all">
          Jetzt starten
        </Button>
      </div>
    </header>
  );
};

export default Header;
