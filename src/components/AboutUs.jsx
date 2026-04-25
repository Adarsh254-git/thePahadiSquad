import React from "react";
import {
  Mountain,
  Map,
  Car,
  Tent,
  Globe,
  Users,
  Home,
  Activity,
} from "lucide-react";

const AboutUs = () => {
  const services = [
    {
      title: "Trek Planning",
      desc: "From Hampta Pass to Pin Parvati, we curate technical and beginner-friendly treks with expert guides.",
      icon: <Tent className="text-orange-600" size={32} />,
    },
    {
      title: "Valley Expeditions",
      desc: "Explore the hidden gems of Spiti, Lahaul, and Parvati Valley with locally-driven itineraries.",
      icon: <Mountain className="text-orange-600" size={32} />,
    },
    {
      title: "Premium Car Rentals",
      desc: "Conquer the terrain with our rugged fleet, including the Mahindra Bolero and Suzuki Jimny 4x4s.",
      icon: <Car className="text-orange-600" size={32} />,
    },
    {
      title: "Curated Tours",
      desc: "Customized sightseeing across Himachal's iconic landmarks like Atal Tunnel and Dharamshala.",
      icon: <Map className="text-orange-600" size={32} />,
    },
  ];

  return (
    <section id="about" className="bg-[#2C2D2D] py-12 md:py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              WE ARE <br />
              <span className="text-orange-600">THE PAHADI SQUAD</span>
            </h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-8 text-justify opacity-90">
              "Born in the heart of the Himalayas, we bridge the gap between raw
              wilderness and safe exploration. At ThePahadiSquad, we go beyond
              the main roads—from the high-altitude deserts of Spiti to the
              jagged peaks of Chamba. Whether navigating 4x4 trails or camping
              under the stars, we provide the heart and expertise to make the
              Himalayas feel like home."
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe size={18} />, text: "Eco-Friendly Travel" },
                { icon: <Users size={18} />, text: "Local Pahadi Guides" },
                { icon: <Home size={18} />, text: "Remote Village Stays" },
                { icon: <Activity size={18} />, text: "24/7 Ground Support" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-orange-600">{item.icon}</span>
                  <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative w-full max-w-md lg:max-w-full mx-auto">
            <div className="absolute -inset-4 bg-orange-600/20 blur-3xl rounded-full"></div>

            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl 
                  h-[300px] sm:h-[400px] lg:h-[450px]"
            >
              {" "}
              {/* Fixed heights for different screens */}
              <img
                src="/images/about-hero.jpg"
                alt="Mountain Expedition"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-[#121212] rounded-3xl border border-white/5 hover:border-orange-600/30 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-px bg-linear-to-r  from-orange-600 to-transparent rounded-3xl">
          <div className="bg-black rounded-[23px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h4 className="text-xl md:text-2xl font-bold text-white uppercase">
                Ready to start your journey?
              </h4>
              <p className="text-white/70 mt-2">
                Customized itineraries available for solo travelers and groups.
              </p>
            </div>
            <a
              href="#contact"
              className="w-full md:w-auto text-center bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all"
            >
              Consult an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
