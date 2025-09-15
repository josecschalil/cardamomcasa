import Image from "next/image";

const FeaturedSection = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 7h18l-2 10H5L3 7zM3 7L2 3H1M16 13h2a2 2 0 012 2v2a2 2 0 01-2 2h-2M8 13H6a2 2 0 00-2 2v2a2 2 0 002 2h2"
          />
        </svg>
      ),
      title: "Premium Rooms",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 3v18m-4-8l4 4 4-4M5 7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
          />
        </svg>
      ),
      title: "Nature Friendly",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 3l14 9-14 9V3z"
          />
        </svg>
      ),
      title: "Panoramic Views",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Spice Discovery",
    },
  ];

  return (
    <section className="bg-gray-50 pt-16 pb-1 lg:pt-24 lg:pb-24 lg:px-25 ">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-light text-gray-800 leading-tight">
                Elevate your senses
                <br />
                <span className="text-green-900">at Cardamom Casa</span>
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 text-md leading-relaxed font-light">
                Welcome to Cardamom Casa, an enchanting plantation villa resort
                tucked away in the picturesque Bison Valley of Munnar. Immerse
                yourself in the natural beauty that surrounds this haven, where
                lush cardamom plantations and majestic mountains create a
                tranquil and rejuvenating atmosphere.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8 ">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-green-900 flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-gray-800 font-medium text-md">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* About Us Button */}
            <div className="pt-4">
              <button className="border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wider uppercase">
                About Us
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/sl.jpg" // Replace with your image path
                alt="Cardamom Casa Villa"
                className="w-full h-[400px] lg:h-[600px] object-cover"
              />
              {/* Gradient overlay for better image presentation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Decorative element - optional */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-100 rounded-full -z-10 hidden lg:block"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-green-200 rounded-full -z-10 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
