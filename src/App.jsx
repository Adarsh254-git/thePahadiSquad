import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expeditions from "./components/Expeditions";
import TravelPlans from "./components/TravelPlans";
import CarRental from "./components/CarRental";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Expeditions />
      <TravelPlans />
      <CarRental />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
