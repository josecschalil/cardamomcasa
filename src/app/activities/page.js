"use client";
import { Car, Mountain, Flame, TreePine, Eye, Leaf } from "lucide-react";

const ActivitiesWidget = () => {
  const activities = [
    {
      id: 1,
      name: "Jeep safari",
      icon: Car,
      color: "text-gray-700",
    },
    {
      id: 2,
      name: "Trekking",
      icon: Mountain,
      color: "text-emerald-600",
    },
    {
      id: 3,
      name: "Campfire",
      icon: Flame,
      color: "text-emerald-600",
    },
    {
      id: 4,
      name: "Nature walk",
      icon: TreePine,
      color: "text-emerald-600",
    },
    {
      id: 5,
      name: "Sightseeing",
      icon: Eye,
      color: "text-emerald-600",
    },
    {
      id: 6,
      name: "Plantation Visit",
      icon: Leaf,
      color: "text-emerald-600",
    },
  ];

  return (
    <>
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <section className="py-16 px-8 sm:px-8 lg:pt-35 pb-50 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h2
                className="text-4xl sm:text-5xl lg:text-5xl font-medium text-gray-800"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Activities
              </h2>

              <p
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Embark on thrilling adventures with our range of activities.
                Explore the surrounding wonders with a Jeep safari or trekking
                expedition, where the beauty of nature unfolds before your eyes.
                As the sun sets, gather around a crackling campfire, sharing
                stories under the starlit sky. Take a leisurely nature walk to
                appreciate the diverse flora and fauna that call Bison Valley
                home. Visit a spices plantation and witness the vibrant hues and
                fragrances of exotic spices. Dive into the fascinating world of
                cardamom with a tour of our processing unit, where the journey
                from plantation to product unfolds.
              </p>
            </div>

            {/* Right Content - Activities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div
                    key={activity.id}
                    className="group flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: "fadeInUp 0.6s ease-out forwards",
                    }}
                  >
                    <div className="mb-4 p-3 bg-gray-50 rounded-full transition-colors duration-300">
                      <IconComponent
                        className={`w-8 h-8 ${activity.color} group-hover:text-[#575b3e] transition-colors duration-300`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className="text-gray-800 font-medium text-sm sm:text-base group-hover:text-[#575b3e] transition-colors duration-300"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {activity.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </>
  );
};

export default ActivitiesWidget;
