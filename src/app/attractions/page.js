"use client";
const NearestAttractions = () => {
  const attractionsColumn1 = [
    "Devikulam",
    "Lock heart view point",
    "Chinnakkanal Waterfalls",
    "Anayirankal dam boating",
    "Eravikulam (Rajamalai) National Park",
    "Nayamakadu Water Falls",
    "Lakkam Water Falls",
    "Marayoor Sandalwood Forests",
    "Muniyara Caves",
    "Thoovanam water falls",
    "Chinnar wild life",
  ];

  const attractionsColumn2 = [
    "KFDC Flower Garden",
    "Photo Point",
    "Honey Bee Tree",
    "Mattupetty Boating",
    "Shooting point",
    "Echo point",
    "Elephant arrival point",
    "Kundala lake",
    "Top Station",
    "Tea Plantations",
    "Sunset Point (Chithirapuram)",
    "Sengulam Dam Boating",
  ];

  const attractionsColumn3 = [
    "Blossom Hyde Park",
    "Head works dam",
    "Pothemedu View point",
    "Attukad Waterfall",
    "Cheyyapara falls",
    "Vallara",
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="lg:px-30 bg-white">
        <section className="py-16 px-10 sm:px-8 lg:px-15 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Title */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-800 mb-10"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Nearest Attractions
            </h2>

            {/* Hero Image */}
            <img
              src="https://cardamomcasa.com/wp-content/uploads/2023/12/green-hills-of-kolukkumalai-tea-plantations-in-mun-2023-11-27-05-04-57-utc-768x256.jpg"
              alt="Tea plantations in Munnar with rolling green hills"
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            <br></br>
            <br></br>
            <br></br>

            {/* Attractions List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Column 1 */}
              <div className="space-y-4">
                {attractionsColumn1.map((attraction, index) => (
                  <div
                    key={`col1-${index}`}
                    className="flex items-start group cursor-pointer"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: "fadeInLeft 0.6s ease-out forwards",
                    }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                    <p
                      className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {attraction}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {attractionsColumn2.map((attraction, index) => (
                  <div
                    key={`col2-${index}`}
                    className="flex items-start group cursor-pointer"
                    style={{
                      animationDelay: `${
                        (index + attractionsColumn1.length) * 50
                      }ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                    <p
                      className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {attraction}
                    </p>
                  </div>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-4">
                {attractionsColumn3.map((attraction, index) => (
                  <div
                    key={`col3-${index}`}
                    className="flex items-start group cursor-pointer"
                    style={{
                      animationDelay: `${
                        (index +
                          attractionsColumn1.length +
                          attractionsColumn2.length) *
                        50
                      }ms`,
                      animation: "fadeInRight 0.6s ease-out forwards",
                    }}
                  >
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2.5 mr-4 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                    <p
                      className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-sm sm:text-base"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {attraction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
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

export default NearestAttractions;
