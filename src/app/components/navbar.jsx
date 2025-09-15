"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ACTIVITIES", href: "/activities" },
    { name: "ATTRACTIONS", href: "/attractions" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <nav className="w-full top-0 z-50 transition-all duration-300 py-4 bg-gradient-to-b from-[#383b1e] via-[#444724] to-[#4a4e28] backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <img
                src="https://cardamomcasa.com/wp-content/uploads/2023/12/logo-cardamam-2.jpg"
                alt="Cardamom Casa"
                // The logo height is now fixed to h-16 (4rem) and doesn't change.
                className="transition-all duration-300 group-hover:scale-105 h-16 w-auto object-contain shadow-lg"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative px-6 py-2 text-white/90 hover:text-white font-inter font-medium text-sm tracking-wider transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-[#575b3e] rounded-3xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-white hover:text-emerald-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:[#575b3e] focus:ring-offset-2 focus:ring-offset-[#575b3e] rounded-lg"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-4 pt-4 pb-6 mt-5 bg-gradient-to-b from-[#3b3e1f] via-[#444724] to-[#4a4e28] backdrop-blur-lg">
            <div className="space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 text-white/90 hover:text-white hover:bg-gray[200] rounded-lg font-inter font-medium text-base tracking-wide transition-all duration-200 transform hover:translate-x-2"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen
                      ? "slideInLeft 0.3s ease-out forwards"
                      : "none",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
