"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import GalleryOfSerenity from "./gallery/page";
import ActivitiesWidget from "./activities/page";
import FeaturedSection from "./components/featured";

const CardamomCasaHero = () => {
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
      <div className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-75"
            src="https://cardamomcasa.com/wp-content/uploads/2023/12/cardamom.jpg"
            alt="Cardamom Casa Villa"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/15 bg-opacity-20"></div>
        </div>

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Cormorant+Garamond:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />

        <nav className="w-full top-0 z-50 transition-all duration-300 py-4  bg-black/1 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 group">
                <img
                  src="https://cardamomcasa.com/wp-content/uploads/2023/12/logo-cardamam-2.jpg"
                  alt="Cardamom Casa"
                  className="transition-all duration-300 group-hover:scale-105 h-18 w-auto object-contain shadow-lg"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-1">
                {navigationItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-6 py-2 font-inter font-medium text-sm tracking-wider transition-all duration-300 group `}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div
                      className={`absolute inset-0 rounded-3xl  opacity-20 transform scale-95 group-hover:scale-100 transition-all duration-300 ${
                        item.name === "HOME" ? "bg-gray-400" : ""
                      }`}
                    ></div>
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="lg:hidden ">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 text-white hover:text-emerald-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#575b3e] focus:ring-offset-2 focus:ring-offset-[#575b3e] rounded-lg"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
                {isMenuOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white/1 backdrop-blur-lg lg:hidden rounded-lg mt-3 mx-3 shadow-lg">
                    <div className="px-6 py-4 space-y-4">
                      {navigationItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block text-white hover:text-green-300 transition-colors duration-300 text-sm py-1 font-medium tracking-wide"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-250px)] text-center px-6">
          <div className="max-w-4xl">
            {/* Welcome Text */}
            <p className="text-white text-lg md:text-xl font-light italic mb-6 opacity-90">
              Welcome to Cardamom Casa
            </p>

            {/* Main Heading */}
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
              Where views meet
              <br />
              <span className="block">luxury.</span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator - Optional */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-white opacity-70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
      <FeaturedSection />
      <GalleryOfSerenity />
      <ActivitiesWidget />
    </>
  );
};

export default CardamomCasaHero;
