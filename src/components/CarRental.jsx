import React, { useState } from "react";
import {
  Users,
  Gauge,
  Fuel,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
// import gurkha from "../assets/gurkha.jpg";
// import thar from "../assets/thar.jpg";
// import hilux from "../assets/hilux.jpg";
// import bolero from "../assets/bolero.webp";

const CarRental = () => {
  const [activeCar, setActiveCar] = useState(null);

  const toggleSpecs = (id) => {
    setActiveCar(activeCar === id ? null : id);
  };

  const cars = [
    {
      id: 1,
      name: "Force Gurkha 4x4",
      image: "/images/gurkha.jpg",
      type: "Extreme Off-road",
      seats: "4 Seater",
      transmission: "Manual",
      fuel: "Diesel",
      price: "₹4,500",
      tag: "Best for Spiti",
    },
    {
      id: 2,
      name: "Mahindra Thar",
      image: "/images/thar.jpg",
      type: "All Terrain",
      seats: "4 Seater",
      transmission: "Automatic/MT",
      fuel: "Diesel/Petrol",
      price: "₹5,000",
      tag: "Popular",
    },
    {
      id: 3,
      name: "Toyota Hilux",
      image: "/images/hilux.jpg",
      type: "Premium Pickup",
      seats: "5 Seater",
      transmission: "Automatic",
      fuel: "Diesel",
      price: "₹8,000",
      tag: "Group Travel",
    },
    {
      id: 4,
      name: "Mahindra Bolero",
      image: "/images/bolero.webp",
      type: "Rugged SUV",
      seats: "7 Seater",
      transmission: "Manual",
      fuel: "Diesel",
      price: "₹3,500",
      tag: "Mountain Expert",
    },
  ];

  return (
    <section
      id="rentals"
      className=" scroll-mt-20 py-20 bg-black text-white px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Rent Your <span className="text-orange-600">Expedition Rig</span>
          </h2>
          <p className="mt-4 text-white text-sm md:text-lg max-w-xl">
            Built for the Himalayan curves. All rentals include recovery gear.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {" "}
          {cars.map((car) => {
            const isActive = activeCar === car.id;

            return (
              <div
                key={car.id}
                className={`bg-[#2C2D2D] rounded-3xl overflow-hidden border transition-all duration-500 ease-in-out group shadow-xl 
          ${
            isActive
              ? "border-orange-500 scale-105 z-20 shadow-orange-900/20 ring-1 ring-orange-500"
              : "border-slate-700 z-10 hover:border-gray-400"
          }`}
              >
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-orange-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg shadow-xl">
                      {car.tag}
                    </span>
                  </div>
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`w-full h-full object-cover transition-transform duration-700 ${isActive ? "scale-110" : "group-hover:scale-105"}`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-800 via-transparent to-transparent opacity-40"></div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                        {car.type}
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight">
                        {car.name}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "max-h-60 opacity-100 mb-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-black/40 rounded-2xl p-5 grid grid-cols-2 gap-4 border border-slate-700/50">
                      <div className="flex items-center gap-3 text-slate-300 text-xs">
                        <Users size={16} className="text-orange-500" />
                        <span>{car.seats}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 text-xs">
                        <Gauge size={16} className="text-orange-500" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 text-xs">
                        <Fuel size={16} className="text-orange-500" />
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-300 text-xs">
                        <MapPin size={16} className="text-orange-500" />
                        <span>Unlimited Kms</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => toggleSpecs(car.id)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 border ${
                        isActive
                          ? "bg-slate-700 border-slate-500 text-white"
                          : "bg-slate-700/50 border-slate-600 text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {isActive ? "Hide Details" : "View Details"}
                      {isActive ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    <a
                      href="#contact"
                      className="flex-1 bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-orange-900/20 flex items-center justify-center text-center"
                    >
                      Rent Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CarRental;
