import React from "react";
import { useLanguage, Language } from "./LanguageContext";
import { translations } from "./translations";
import { Globe, Facebook, Instagram, Menu } from "lucide-react";
import { getLogoConfig, logoStyles } from "../src/config/logos";

export const Header: React.FC = () => {
  const { language, setLanguage, direction } = useLanguage();
  const logoConfig = getLogoConfig(language);

  const navItems = translations.header.nav[language];
  const isRTL = direction === "rtl";

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* THIS LINE CONTROLS THE HEADER THICKNESS: */}
      <div className="container mx-auto px-4 py-[2px]">
        {/*                                     ^^^^^^^^^^ 
            Ultra-thin header with minimal vertical padding:
            - py-[2px] = 2px top/bottom padding (all screen sizes)
            
            Alternative ultra-thin options:
            - py-0 = 0px padding
            - py-[1px] = 1px padding
            - py-[3px] = 3px padding
        */}
        <div
          className={`flex items-center justify-between ${isRTL ? "flex-row-reverse" : ""}`}
        >
          {/* Logo - unified for all languages - Made smaller */}
          <div className="flex items-center">
            <div className={logoStyles.container}>
              {/* Language-specific logo with fallback */}
              <img 
                src={logoConfig.src}
                alt={logoConfig.alt}
                className={logoStyles.image}
                onError={(e) => {
                  if (logoConfig.fallback) {
                    // Try fallback logo
                    e.currentTarget.src = logoConfig.fallback;
                  } else {
                    // Show fallback text if no fallback logo
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }
                }}
              />
              
              {/* Fallback text logo (hidden by default, shows if image fails) */}
              <h1 className={logoStyles.fallbackText}>
                🤝 Partnership Association
              </h1>
            </div>
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav
            className={`hidden lg:flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-6`}
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#section-${index}`}
                className="text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium text-sm"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Right side - Language toggle and social icons */}
          <div
            className={`flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-4`}
          >
            {/* Social media icons */}
            <div
              className={`hidden sm:flex items-center ${isRTL ? "space-x-reverse" : ""} space-x-2`}
            >
              <a
                href="#"
                className="text-blue-900 hover:text-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-orange-500 hover:text-orange-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Language selector */}
            <div className="flex items-center space-x-1">
              <Globe size={16} className="text-gray-600" />
              <select
                value={language}
                onChange={(e) =>
                  setLanguage(e.target.value as Language)
                }
                className="bg-transparent border-none text-sm font-medium text-gray-700 focus:outline-none cursor-pointer"
                dir={direction}
              >
                <option value="he">
                  {translations.header.languages.he}
                </option>
                <option value="ar">
                  {translations.header.languages.ar}
                </option>
                <option value="en">
                  {translations.header.languages.en}
                </option>
              </select>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};