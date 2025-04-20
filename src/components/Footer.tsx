import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { getImage, imagePaths } from "@/utils/imageUtils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Function to handle creating the correct link format
  const getFooterLink = (anchor: string) => {
    return isHomePage ? `#${anchor}` : `/#${anchor}`;
  };

  return (
    <footer className="bg-brand-blue text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <img
                src={imagePaths.brand.footerLogo}
                alt="Mission42 Logo"
                className="h-8"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Die Community für Unternehmen, die KI erfolgreich einsetzen
              wollen.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/mission42/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-orange">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-brand-orange" />
                <span>
                  Boxhagener Str. 33, <br />
                  10245 Berlin
                </span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-brand-orange" />
                <span>info@mission42.ai</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/impressum"
                  className="text-gray-300 hover:text-brand-orange"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-gray-300 hover:text-brand-orange"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link
                  to="/agb"
                  className="text-gray-300 hover:text-brand-orange"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} Mission42. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
