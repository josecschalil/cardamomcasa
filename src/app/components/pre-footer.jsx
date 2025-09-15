"use client";
const LuxuryBookingWidget = () => {
  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/IMG_r3822.jpg')`,
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto py-3">
          {/* Main Heading */}
          <h1 className="text-white mb-8">
            <span
              className="block text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Book Now for Unforgettable Luxury and Tranquility
            </span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-400 text-base sm:text-md lg:text-lg leading-relaxed mb-12 max-w-4xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Indulge in the epitome of luxury with our high premium rooms, each
            offering a balcony that opens up to breathtaking views of the
            verdant mountains. Every room is meticulously designed for comfort
            and convenience, ensuring a memorable stay. Revel in the cool
            climate and savor the tranquility that comes with it.
          </p>

          {/* CTA Button */}
          <button
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ fontFamily: "Inter, sans-serif" }}
            onClick={() => {
              // You can replace this with your actual contact functionality
              window.location.href = "/contact";
            }}
          >
            CONTACT US
          </button>
        </div>
      </section>
    </>
  );
};

export default LuxuryBookingWidget;
