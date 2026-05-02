import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expeditions from "./components/Expeditions";
import TravelPlans from "./components/TravelPlans";
import CarRental from "./components/CarRental";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      {/* <button class="relative  px-8 py-3 font-bold text-white transition-all duration-300 bg-orange-600 group hover:bg-orange-500 overflow-hidden">
        <span class="relative z-10">EXPLORE THE TRAILS</span>
        <div class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-white/20 group-hover:h-full -skew-y-6 origin-bottom-left"></div>
      </button>

      <a
        href="#contact"
        className="w-full bg-orange-600 hover:bg-orange-500 text-white py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center text-center"
      >
        Book Trip
      </a> */}
      {/* <a
        href="#contact"
        className="relative w-full bg-orange-600 hover:bg-orange-500 text-white py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center text-center overflow-hidden group"
      >
        <span className="relative z-10">Book Trip</span>

        <div className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 bg-white/20 group-hover:h-[160%] -skew-y-6 origin-bottom-left"></div>
      </a> */}

      <Navbar />
      <Hero />

      <Expeditions />
      <AboutUs />
      <CarRental />
      <TravelPlans />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
