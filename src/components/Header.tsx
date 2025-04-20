
import React from 'react';
import { Button } from "@/components/ui/button";
import { imagePaths } from '../utils/imageUtils';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Function to handle creating the correct link format
  const getNavLink = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };
  
  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-8 fixed top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={imagePaths.brand.logo}
              alt="Mission42 Logo" 
              className="h-10 md:h-12 logo-transition" 
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-6 items-center">
          <a href={getNavLink('framework')} className="text-gray-700 hover:text-brand-orange transition-colors">Framework</a>
          <a href={getNavLink('offer')} className="text-gray-700 hover:text-brand-orange transition-colors">Angebot</a>
          <a href={getNavLink('pricing')} className="text-gray-700 hover:text-brand-orange transition-colors">Preise</a>
          <a href={getNavLink('testimonials')} className="text-gray-700 hover:text-brand-orange transition-colors">Referenzen</a>
        </nav>
        
        <Button className="bg-brand-orange hover:bg-brand-blue text-white shadow-sm transition-all">
          Jetzt starten
        </Button>
      </div>
    </header>
  );
};

export default Header;
