import React from "react";
import { Mountain, Map, Car, Tent, ShieldCheck, Globe } from "lucide-react";

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
    <section id="about" className="bg-[#2C2D2D] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              WE ARE <br />
              <span className="text-orange-600">THE PAHADI SQUAD</span>
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              "Born in the heart of the Himalayas, we aren’t just a travel
              agency; we are a community of explorers. Our mission is to bridge
              the gap between raw wilderness and safe exploration, ensuring
              every journey into the mountains leaves you with stories, not just
              photos. We believe that the true beauty of Himachal Pradesh isn't
              found on the main roads, but in the silence of the high-altitude
              deserts of Spiti, the hidden trails of the Dhauladhar range, and
              the ancient culture preserved in our remote villages. From the
              mist-covered valleys of Kullu to the jagged, snow-capped peaks of
              Chamba, we take you where the air is thinner and the spirit is
              stronger. At ThePahadiSquad, we don't just show you the
              mountains—we help you live them. Whether it’s navigating a rugged
              4x4 trail in a Jimny or camping under the celestial Milky Way at
              Chandratal, we provide the expertise and the heart to make the
              Himalayas feel like home."
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                {/* <ShieldCheck className="text-orange-600" />
                <span className="text-white font-bold text-sm">
                  Certified Guides
                </span> */}
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-orange-600" />
                <span className="text-white font-bold text-sm">
                  Eco-Friendly Travel
                </span>
              </div>
            </div>
          </div>

          <div className="relative max-w-sm md:max-w-md mx-auto">
            {/* The Glow Effect - scaled down to match */}
            <div className="absolute -inset-2 bg-orange-600/20 blur-2xl rounded-full"></div>

            <img
              src="/images/about-hero.jpg"
              alt="Mountain Expedition"
              className="relative rounded-3xl border border-white/10 transition-all duration-700 shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <p className="text-white text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-20 p-1 bg-linear-to-r from-orange-600 to-transparent rounded-3xl">
          <div className="bg-black rounded-[22px] p-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="text-2xl font-bold text-white uppercase">
                Ready to start your journey?
              </h4>
              <p className="text-white mt-2">
                Customized itineraries available for solo travelers and groups.
              </p>
            </div>
            <a
              href="#contact"
              className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all whitespace-nowrap"
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
