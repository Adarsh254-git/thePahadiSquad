import React from "react";
import { Compass, Mountain, Tent, Map } from "lucide-react";

const TravelPlans = () => {
  const plans = [
    {
      id: 1,
      title: "Weekend Getaways",
      icon: <Tent className="w-8 h-8 text-orange-500" />,
      description:
        "Short, refreshing escapes like Triund or Kheerganga. Perfect for a quick break from the city.",
      level: "Easy",
      bgColor: "bg-black",
    },
    {
      id: 2,
      title: "High Altitude Treks",
      icon: <Mountain className="w-8 h-8 text-orange-500" />,
      description:
        "Push your limits with treks like Hampta Pass or Beas Kund. Stunning views and physical challenge.",
      level: "Moderate",
      bgColor: "bg-black",
    },
    {
      id: 3,
      title: "Expedition Series",
      icon: <Compass className="w-8 h-8 text-orange-500" />,
      description:
        "Legendary journeys through Spiti or Chandratal. Long duration trips for the true soul seeker.",
      level: "Hard",
      bgColor: "bg-black",
    },
    {
      id: 4,
      title: "Customized Trips",
      icon: <Map className="w-8 h-8 text-orange-500" />,
      description:
        "Create your own itinerary. Tell us where you want to go and we'll handle the logistics for the Squad.",
      level: "Any",
      bgColor: "bg-black",
    },
  ];

  return (
    <section id="plans" className=" scroll-mt-20 py-20 px-4 bg-[#2C2D2D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Choose Your <span className="text-orange-600">Travel Plan</span>
          </h2>
          <p className="mt-4 text-white text-sm md:text-lg max-w-xl">
            From beginners to veteran explorers, we have a curated plan for
            every member of the Phadi Squad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-8 rounded-3xl border border-transparent transition-all duration-300 hover:border-orange-500 hover:shadow-xl group cursor-pointer ${plan.bgColor}`}
            >
              <div className="mb-6 bg-[#2C2D2D] w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {plan.icon}
              </div>

              <span
                className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md mb-4 inline-block ${
                  plan.level === "Easy"
                    ? "bg-green-100 text-green-700"
                    : plan.level === "Moderate"
                      ? "bg-orange-100 text-orange-700"
                      : plan.level === "Hard"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                }`}
              >
                Level: {plan.level}
              </span>

              <h3 className="text-xl font-bold text-white mb-3">
                {plan.title}
              </h3>
              <p className="text-white text-sm leading-relaxed">
                {plan.description}
              </p>

              <div className="mt-6 flex items-center text-orange-500 font-bold text-sm">
                <a
                  href="#expeditions"
                  className="mt-6 flex items-center text-orange-500 font-bold text-sm cursor-pointer group"
                >
                  <span>View Treks</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelPlans;
