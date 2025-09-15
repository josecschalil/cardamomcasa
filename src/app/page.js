"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryOfSerenity from "./gallery/page";
import ActivitiesWidget from "./activities/page";
import FeaturedSection from "./components/featured";

const CardamomCasaHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Luxury hotel/villa images for carousel
  const carouselImages = [
    "https://cardamomcasa.com/wp-content/uploads/2024/05/SAI07747.jpg",
    "https://cardamomcasa.com/wp-content/uploads/2023/12/cardamom.jpg",
    "https://lh3.googleusercontent.com/rd-d/ALs6j_HwZL43jLzgncb_8hg3_J-0NQHRxY57N9zIxwAiD0kAgMZFMONFIq0ELfk7aBSETUlsxXnPh-rQ3gIu6PZSxDe1znsM7fResNjOtco1IQ0ZhlySnTeuKwSFFWSXJA1BbZkht5UTxYdstWApNB8LBsFpZCnQEm1vL4kftOlpvTllxm6em7lfSxz3cCaiH9qm0fon8YNZAejzwzU8xxJGso0BsYRp56zNKb2GRevjhOUI1tq6wc3LC4BZ4jPg3bCU26_6F-vRR871TvJrxT9JV0jq10FOXOQZ9zBLMsFySTnWiXUmHJRdPudvdTerYlo9T9viSRAqq3iLpyveTyFm6hqssqk37BDLdncN52T4N06j1Y2sLaRNPypdm_r--0izVZixSQfpg6RdpveJ55LkYMHstx5H-q0HWwbMLIAYje-BBp4hGDmp-rVMRftSBiG1BYGBgbKXop6i7k1vEdfaA6FPByjXZi-dpJPYgvSr9PgDvg_3g2yKX8s0HZE-Fob_ztsWmeYGZktKQaqH3cE7P6Wa75vS-g_Vp8YVc1o1eWPGtR8r5I-8y6KcHhIy6x97nXsA187owImdJPhZ9nqjK8un52-Wodc87oJUIZEPUBgsqAFddETsW7qNkTPRZf7Fd1vh7csGFCZOeBoagjx7ro8wn57AGv_hbA3Fa3cyCYSz1sh0sS9NTqh21mY9aaUmR1YWbgx_kCKjxRBicxZOCokw20q8MHZiN_ibOPW6OLz2FxPJBdN0n2qTkA1xsHqodm-3k_5jisTcY4To6HNHeG6RTmpAKR0KFkzZbzc4ICZJ6Cx7Pmqaf3aImVGQYWmtlyc81dQg6q5JojLW3oqHev5zdOXzV_57Dz_16JBzjfEY3VKeJ4YaoJjYRWsDEf9rAuNllq2JNHRtItpsDkEG0WX8q4fRT0LowNJAj_pmU50z7Y8JmY2xuxlTs3p4XvV-pe9ROIhA4MLphiJMXK18TdznIA=w1213-h968?auditContext=prefetch",
    "https://lh3.googleusercontent.com/rd-d/ALs6j_HAHdr-Fw-Yl3irrQM7gidt6Nxueas3iXQvaAUS7BFaOxP30Ib18NNs-bNGjI5zMh8-WxezQF_y3lZsMAomZdpW1LwItTyHfLaPM-cSLdgIMH-eO4YkOuHfSPK-tfw0B3a8WSrmvSffbdz4GhhAgp3CNETkSLXXiBafaxJmwGM8Le6I3ZmcST1GUmnqMEAwcJpX9BOSGudrX3mrpXJMTsGrf4VGRINTesArlXgS7xKrkkPnfeE6ER-ll5VtOXhbB9NHiO3_jYf4FuznEwLJ92-7knFFsUtJSgR0EyHj7qQ6P4dlztltyRm0ENon-ZPmCPFVuywpCD6rnXjq3lEAppcKXdAtnKS5Bx4oM4Onolr8dj3eGwFPSTpsHwTfYMUuibSYwOeEvyhEl8YuR8JlbZPKELMauZQ2PncHqr96AiLsP4HvTY79rEmPGEKHzEiVJkDw7kShFhYvxvUkxALcGRsqt-evP0mZln8MFsx5JxevRHwdOEjQgJCp-05dcx81ALanCQPxxg2TEV_iYnXDlmI4jTaIpZxaNmhYEHmQ38bLR6LkcBfAnZDuvbjgl3BpWLs2F4L5shlK6NYW5DE2M7MepZk8g6lXGKUnSxqCrL_1M5Kr2EOHEgiPgHQzmWtuovwK6xUYJmK73yCNebV0XAduthZSPOfjunULuwQ6RRWPLgaNXUzKjhrYXctZsj2skcRlLj-rZfpgITts0gd0X2AfsC2ucjVmLyvkRMIZnuCVMJvJh3BmEzz3CBxErF4gmZib6LkL_OW3AvUzJJ5T8pqiwdulIiiRI4jUA3KXY8LpU5WeRklZmw2UQvXelHWDQf5-QCnNj-6BRcZ6om7VnvCN7-I-bhOhC9He6BKoYumpzWwdiDDCf9rKzZtk7e1UC57epP_j06tDggymp6Rmi10F3ChDaszE3I9oZ47xS5f9F14YWiRfon_hKIhY_vp4tw_7kl4PdNY44oDQ_ok1e5tA4g=w1213-h968?auditContext=forDisplay",
  ];

  const navigationItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "GALLERY", href: "/gallery" },
    { name: "ACTIVITIES", href: "/activities" },
    { name: "ATTRACTIONS", href: "/attractions" },
    { name: "CONTACT", href: "/contact" },
  ];

  // Auto-slide carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap");

        .luxury-text {
          font-family: "Cormorant Garamond", serif;
        }

        .elegant-text {
          font-family: "Crimson Text", serif;
        }

        .modern-text {
          font-family: "Inter", sans-serif;
        }

        .slide-enter {
          opacity: 0;
          transform: scale(1.1);
        }

        .slide-active {
          opacity: 1;
          transform: scale(1);
          transition: all 0.8s ease-in-out;
        }

        .text-shadow-luxury {
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5),
            0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .backdrop-luxury {
          backdrop-filter: blur(20px) saturate(180%);
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.1) 100%
          );
        }

        .gold-accent {
          background: linear-gradient(
            135deg,
            #d4af37 0%,
            #f7e98e 50%,
            #d4af37 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="relative min-h-screen overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={`Cardamom Casa Villa ${index + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-80"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>

        {/* Enhanced Navigation */}
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

        {/* Enhanced Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-6">
          <div className="max-w-5xl">
            {/* Luxury Accent Line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8 mx-auto"></div>

            {/* Welcome Text */}
            <p className="text-yellow-200 text-lg md:text-xl elegant-text font-light italic tracking-widest uppercase opacity-90 mb-6 text-shadow-luxury">
              Welcome to
            </p>

            {/* Main Brand Name */}
            <h1 className="luxury-text font-light text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-wide text-shadow-luxury">
              CARDAMOM
              <span className="block gold-accent font-medium">CASA</span>
            </h1>

            {/* Tagline */}
            <h2 className="text-white text-xl md:text-3xl lg:text-4xl luxury-text font-light leading-relaxed mb-8 text-shadow-luxury">
              Where Elegance Meets
              <span className="block italic text-yellow-200">
                Breathtaking Views
              </span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-px bg-yellow-400"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full mx-4 transform rotate-45"></div>
              <div className="w-12 h-px bg-yellow-400"></div>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-sm md:text-base elegant-text font-normal leading-relaxed max-w-2xl mx-auto mb-8 text-shadow-luxury">
              Experience unparalleled luxury in the heart of nature's paradise.
              Your exclusive retreat awaits.
            </p>
          </div>
        </div>

        {/* Floating Elements for Luxury Feel */}
        <div className="absolute top-1/4 left-12 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 right-16 w-1 h-1 bg-white/40 rounded-full animate-ping hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-20 w-3 h-3 bg-yellow-200/20 rounded-full animate-bounce hidden lg:block"></div>
      </div>
      <FeaturedSection />
      <GalleryOfSerenity />
      <ActivitiesWidget />
    </>
  );
};

export default CardamomCasaHero;
