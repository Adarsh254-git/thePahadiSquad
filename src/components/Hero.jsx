import React, { useState, useEffect } from "react";
// import img1 from "../assets/grass.jpg";
// import img2 from "../assets/camp.jpg";
// import img3 from "../assets/glide.jpg";
// import img4 from "../assets/hadimba.jpg";
const Hero = () => {
  const images = [
    "/images/grass.jpg",
    "/images/camp.jpg",
    "images/glide.jpg",
    "images/hadimba.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="scroll-mt-20 ">
      <div className="relative h-[90vh] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Trek slide ${index}`}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}

        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 drop-shadow-xl leading-tight">
            Adventure Awaits with <br className="hidden sm:block" />
            <span className="text-orange-600 mt-2 inline-block sm:mt-0">
              ThePahadiSquad
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl max-w-sm sm:max-w-2xl mb-8 text-gray-200 drop-shadow-md leading-relaxed">
            Explore the untouched beauty of the mountains and join a community
            of explorers dedicated to the peaks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg">
              Explore Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-full font-bold transition-all text-sm sm:text-base">
              Learn More
            </button>
          </div>

          <div className="absolute bottom-6 md:bottom-10 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-orange-500 w-6" : "bg-white/50"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
