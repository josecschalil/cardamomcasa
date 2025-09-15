"use client";
import { useState } from "react";
import { Lora } from "next/font/google";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Search,
  Share2,
} from "lucide-react";
const lora = Lora({
  weight: "600",
  subsets: ["latin"],
});
const GalleryOfSerenity = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "/1.jpg",
      alt: "Luxury bedroom with mountain view",
      size: "large",
    },
    {
      id: 2,
      src: "/2.jpg",

      alt: "Modern kitchen with blue cabinets",
      size: "medium",
    },
    {
      id: 3,
      src: "/3.jpg",
      alt: "Balcony with mountain view",
      size: "tall",
    },
    {
      id: 4,
      src: "/4.jpg",
      alt: "Kitchen interior design",
      size: "medium",
    },
    {
      id: 5,
      src: "/5.jpg",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 6,
      src: "/6.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 7,
      src: "/7.jpg",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 8,
      src: "/8.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 9,
      src: "/9.jpg",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 10,
      src: "/10.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 11,
      src: "/11.jpg",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 12,
      src: "/12.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },

    {
      id: 13,
      src: "/13.jpg",
      alt: "Modern kitchen with blue theme",
      size: "medium",
    },
    {
      id: 14,
      src: "/14.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 15,
      src: "/15.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 16,
      src: "/16.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 17,
      src: "/17.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 18,
      src: "/18.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
    {
      id: 19,
      src: "/19.jpg",
      alt: "Kitchen with modern appliances",
      size: "medium",
    },
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  const getSizeClasses = (size) => {
    switch (size) {
      case "large":
        return "col-span-2 row-span-2";
      case "tall":
        return "col-span-1 row-span-2";
      case "wide":
        return "col-span-2 row-span-1";
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Gallery Title */}
          <h2
            className={`text-3xl sm:text-3xl lg:text-4xl text-[#173F29] font-medium mb-12  ${lora.className}`}
          >
            A Gallery of Serenity
          </h2>

          {/* Gallery Grid */}
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:auto-rows-[250px]">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-64 md:h-auto md:${getSizeClasses(
                  image.size
                )}`}
                onClick={() => openModal(image, index)}
              >
                <div className="relative w-full h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          {/* Modal Header */}
          <div className="absolute top-0 left-0 right-0 z-60 bg-gradient-to-b from-black/50 to-transparent p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-white text-sm font-medium">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                <h3
                  className="text-white text-xl font-medium"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  A Gallery of Serenity
                </h3>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Share"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-60"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors z-60"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <div className="max-w-6xl max-h-[90vh] mx-4">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain shadow-2xl"
            />
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 bg-black/30 backdrop-blur-sm p-4 max-w-2xl overflow-x-auto">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openModal(image, index)}
                className={`flex-shrink-0 w-24 h-18 rounded overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? "ring-2 ring-white opacity-100 scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Close on backdrop click */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default GalleryOfSerenity;
