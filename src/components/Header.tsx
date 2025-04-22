import React from "react";
import { Button } from "@/components/ui/button";
import { imagePaths } from "../utils/imageUtils";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to handle creating the correct link format
  const getNavLink = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <header className="w-full py-4 px-4 md:px-6 lg:px-8 fixed top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center md:flex-none w-full md:w-auto justify-center md:justify-start">
          <Link to="/">
            <img
              src={imagePaths.brand.logo}
              alt="Mission42 Logo"
              className="h-10 md:h-12 logo-transition mb-4"
            />
          </Link>
        </div>

        <a href="https://calendar.app.google/gzKyuKMMiJdvN1fz9" target="_blank" rel="noopener noreferrer">
          <Button className="hidden md:inline-flex bg-brand-orange hover:bg-brand-blue text-white shadow-sm transition-all whitespace-normal">
            Jetzt Beratungsgespräch<br />vereinbaren
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
