import React, { useMemo, useState, useRef } from "react";

// import hamptaImg from "../assets/hamptapass.jpg";
// import beaskundImg from "../assets/beaskund.jpg";
// import bijliImg from "../assets/bijliImg.avif";
// import parvatiImg from "../assets/parvatiImg.jpg";
// import solangImg from "../assets/solang.jpg";
// import kasolImg from "../assets/kasol.jpg";
// import pinImg from "../assets/pin.webp";
// import trek3 from "../assets/kheer.jpg";
// import spitiImg from "../assets/spiti.png";
// import kunzumImg from "../assets/kunzum.jpg";
// import triundImg from "../assets/triund.jpg";
// import kareriImg from "../assets/kareri.webp";
// import mcleoImg from "../assets/mchleo.jpg";
// import chandratalImg from "../assets/chandrtaal.jpg";
// import choptaImg from "../assets/chopta.jpg";
// import birImg from "../assets/glide.jpg";
// import manimaheshImg from "../assets/manimahesh.webp";
// import kharota from "../assets/kharota.avif";
// import stadium from "../assets/stadium.jpg";
// import kazaImg from "../assets/kaza.jpg";
// import shikariImg from "../assets/shikari.jpg";
// import barotImg from "../assets/barot.webp";
// import prasharImg from "../assets/prashar.jpg";

// import mallRoadImg from "../assets/mallroad.jpg";
// import joginiImg from "../assets/jogini.avif";
// import rohtangImg from "../assets/rohtang.webp";
// import atalTunnelImg from "../assets/atal.jpg";
const Expeditions = () => {
  const [expandedId, setExpandedId] = useState(null);
  const scrollRefs = useRef({});

  const treks = useMemo(
    () => [
      {
        id: 1,
        image: "/images/hamptapass.jpg",
        place: "Hampta Pass",
        district: "Kullu",
        type: "Trek",
        highlights: ["High Altitude Pass", "Crossover Trek"],
        description:
          "Experience the ultimate geological contrast. This crossover trek starts in the lush, pine-scented forests of Kullu and ascends to a dramatic, moon-like desert landscape in Lahaul. Stand atop the pass at 14,100 ft to witness the jagged peaks of Indrasen and Deo Tibba in one panoramic sweep.",
      },

      {
        id: 2,
        image: "/images/beaskund.jpg",
        place: "Beas Kund",
        district: "Kullu",
        type: "Trek",
        highlights: ["Glacial Lake", "Solang Valley"],
        description:
          "Trek to the birthplace of the Beas River. This trail takes you through sprawling alpine meadows and boulder-strewn paths directly to the base of towering glaciers. It is a rare opportunity to stand at the foot of massive peaks like Hanuman Tibba while gazing into a crystal-blue glacial lake.",
      },

      {
        id: 3,
        image: "/images/bijliImg.avif",
        place: "Bijli Mahadev",
        district: "Kullu",
        type: "Trek",
        highlights: ["Panoramic Views", "Ancient Temple"],
        description:
          "A blend of spiritual mystery and 360-degree Himalayan views. Legend says the temple’s 60-foot staff attracts divine lightning to protect the valley. The climb rewards you with a stunning perspective of the confluence of the Parvati and Beas rivers, framed by snow-capped ridges.",
      },

      {
        id: 4,
        image: "/images/parvatiImg.jpg",
        place: "Parvati Valley",
        district: "Kullu",
        type: "Valley/Scenic",
        highlights: ["Riverside", "Hippie Culture"],
        description:
          "Immerse yourself in the psychedelic charm of the 'Amsterdam of India.' Wander through ancient deodar forests, soak in the natural hot springs of Manikaran, and experience the unique, slow-paced culture of remote villages like Malana and Tosh, all while the turquoise Parvati River roars beside you.",
      },

      {
        id: 5,
        image: "/images/solang.jpg",
        place: "Solang Valley",
        district: "Kullu",
        type: "Valley/Scenic",
        highlights: ["Adventure Sports", "Snow"],
        description:
          "The ultimate hub for adrenaline junkies. Whether it is paragliding over the valley in the summer or skiing down its powdery slopes in the winter, Solang offers a vibrant atmosphere for families and solo adventurers alike, backed by the massive Seven Sister peaks.",
      },

      {
        id: 6,
        image: "/images/kasol.jpg",
        place: "Kasol",
        district: "Kullu",
        type: "Valley/Scenic",
        highlights: ["Mini Israel", "Parvati River"],
        description:
          "A gateway to the soul of the mountains. Kasol is famous for its vibrant cafes, Israeli cuisine, and the tranquil sound of the Parvati River. It serves as the perfect base camp for trekking enthusiasts heading toward the mysterious village of Malana or the heights of Kheerganga.",
      },

      {
        id: 7,
        image: "/images/pin.webp",
        place: "Pin Parvati",
        district: "Lahaul & Spiti",
        type: "Trek",
        highlights: ["Extreme Adventure", "Glacier"],
        description:
          "One of the most challenging and prestigious treks in the world. This expedition takes you from the damp, green Parvati Valley over a massive glacial pass into the stark, dry Pin Valley of Spiti. It is a grueling yet life-changing journey for experienced trekkers seeking true wilderness.",
      },

      {
        id: 8,
        image: "/images/kaza.jpg",
        place: "Kaza High Altitude",
        district: "Lahaul & Spiti",
        type: "Trek",
        highlights: ["Monasteries", "Cold Desert"],
        description:
          "Explore the high-altitude hub of Spiti. Kaza serves as a portal to ancient Tibetan Buddhist culture. Hike to the Key Monastery, visit the world's highest post office in Hikkim, and navigate the rugged, windswept terrain where the air is thin but the spiritual energy is palpable.",
      },

      {
        id: 9,
        image: "/images/spiti.png",
        place: "Spiti Valley",
        district: "Lahaul & Spiti",
        type: "Valley/Scenic",
        highlights: ["Key Monastery", "Tabo"],
        description:
          "A journey into a 'Middle Land' that feels like another planet. Spiti is a cold desert mountain valley where the landscape is painted in shades of brown and orange, dotted with white monasteries and turquoise rivers. It is a sanctuary for those looking to disconnect from the modern world.",
      },

      {
        id: 10,
        image: "/images/chandrtaal.jpg",
        place: "Chandratal",
        district: "Lahaul & Spiti",
        type: "Valley/Scenic",
        highlights: ["Moon Lake", "Camping"],
        description:
          "Witness the celestial 'Moon Lake.' Located at 14,100 ft, this crescent-shaped marvel changes its hue from turquoise to emerald as the sun moves. Nightfall brings a spectacle like no other—camping under a sky so clear you can see the Milky Way with the naked eye.",
      },

      {
        id: 11,
        image: "/images/kunzum.jpg",
        place: "Kunzum Pass",
        district: "Lahaul & Spiti",
        type: "Valley/Scenic",
        highlights: ["High Pass", "Gateway to Spiti"],
        description:
          "The high-altitude bridge between Lahaul and Spiti. Standing at 15,060 ft, the Kunzum Pass offers breathtaking views of the Bara-Sigri glacier—the second largest in the world. It is a place of prayer flags and thin air, marking the transition into the Buddhist heartland.",
      },

      {
        id: 12,
        image: "/images/triund.jpg",
        place: "Triund",
        district: "Kangra",
        type: "Trek",
        highlights: ["Dhauladhar Range", "Camping"],
        description:
          "The ultimate beginner’s mountain high. A well-defined trail through rhododendron and oak forests leads you to a ridge that offers a vertical view of the Dhauladhar range. On one side, massive granite walls tower above; on the other, the entire Kangra Valley stretches out below.",
      },

      {
        id: 13,
        image: "/images/kareri.webp",
        place: "Kareri Lake",
        district: "Kangra",
        type: "Trek",
        highlights: ["Glacial Water", "Pine Forests"],
        description:
          "Discover a hidden glacial gem. The trek to Kareri Lake takes you through subtropical forests and over rocky terrain following the Nyund stream. The lake itself is shallow and crystal clear, surrounded by emerald meadows and the snowy peaks of the Dhauladhar range.",
      },

      {
        id: 14,
        image: "/images/glide.webp",
        place: "Bir Billing",
        district: "Kangra",
        type: "Trek/Aero",
        highlights: ["Paragliding Capital", "Monasteries"],
        description:
          "Take flight at the world’s second-highest paragliding site. Experience the adrenaline of a tandem launch from the Billing ridge, followed by a serene glide over tea gardens. Bir is also a spiritual hub, home to several stunning Tibetan monasteries and a vibrant eco-culture.",
      },

      {
        id: 15,
        image: "/images/mchleo.jpg",
        place: "Mcleodganj",
        district: "Kangra",
        type: "Valley/Scenic",
        highlights: ["Little Lhasa", "Dalai Lama"],
        description:
          "The spiritual home of the Tibetan government in exile. Mcleodganj is a vibrant blend of Tibetan culture and British colonial history. Visit the Namgyal Monastery, explore local markets for handicrafts, and enjoy the peaceful vibe of the 'Little Lhasa' nestled in the hills.",
      },

      // --- CHAMBA ---

      {
        id: 16,
        image: "/images/manimahesh.webp",
        place: "Manimahesh Kailash",
        district: "Chamba",
        type: "Trek",
        highlights: ["Pilgrimage", "Holy Lake"],
        description:
          "A sacred journey to the abode of Lord Shiva. This high-altitude trek takes pilgrims and trekkers to the pristine Manimahesh Lake at 13,000 ft, located at the base of the unclimbed Manimahesh Kailash peak. It is a trail filled with faith, raw nature, and spiritual energy.",
      },
      {
        id: 17,
        image: "/images/prashar.jpg", // Ensure you import this at the top
        place: "Prashar Lake",
        district: "Mandi",
        type: "Trek",
        highlights: ["Floating Island", "Pagoda Temple", "360° Views"],
        description:
          "A mystical trail leading to a 13th-century pagoda-style temple and a lake with a mysterious floating island. Located at 8,956 ft, it offers breathtaking views of the Dhauladhar and Pir Panjal ranges, making it perfect for both beginners and photography enthusiasts.",
      },
      {
        id: 18,
        image: "/images/shikari.jpg", // Ensure you import this at the top
        place: "Shikari Devi",
        district: "Mandi",
        type: "Trek",
        highlights: ["Roofless Temple", "Highest Peak", "Deep Snow"],
        description:
          "The trek to the highest point in Mandi district (10,932 ft). It is famous for its ancient stone temple that uniquely has no roof. Legend says snow never falls inside the temple premises, even though the surrounding mountains are buried under heavy drifts.",
      },
      {
        id: 19,
        image: "/images/barot.webp", // Ensure you import this at the top
        place: "Barot Valley",
        district: "Mandi",
        type: "Expedition",
        highlights: ["Trout Fishing", "Uhl River", "Wildlife Sanctuary"],
        description:
          "The gateway to the Nargu Wildlife Sanctuary. Barot is a hidden gem known for its colonial-era haulage trolley system and the sparkling Uhl River. It's a serene spot for those looking to combine river-side camping with offbeat trekking trails to Rajgundha.",
      },
      {
        id: 20,
        image: "/images/rohtang.webp", // Ensure import from your assets
        place: "Rohtang Pass",
        district: "Kullu",
        type: "Expedition",
        highlights: ["Snow Activities", "13,050 ft", "Gateway to Lahaul"],
        description:
          "The legendary 'Pile of Corpses' pass that connects Kullu with Lahaul and Spiti. At over 13,000 ft, it offers year-round snow, majestic glacier views, and is a world-class destination for mountain biking and snow-scooter expeditions.",
      },
      {
        id: 21,
        image: "/images/atal.jpg",
        place: "Atal Tunnel",
        district: "Kullu",
        type: "Expedition",
        highlights: ["Engineering Marvel", "Sissu Lake", "World's Longest"],
        description:
          "A 9.02 km engineering masterpiece bored through the Rohtang Pass. It transforms the landscape from the lush green Dhundi valley to the arid, high-altitude desert of Sissu in minutes, providing a surreal drive for any traveler.",
      },
      {
        id: 22,
        image: "/images/jogini.avif",
        place: "Jogini Waterfalls",
        district: "Kullu",
        type: "Trek",
        highlights: ["Cascading Falls", "Vashisht Hike", "Nature Trail"],
        description:
          "A scenic 3km hike from Vashisht Temple through apple orchards and pine forests. The trail leads to a sacred multi-tier waterfall cascading down the cliffs, offering a peaceful escape from the main town's hustle.",
      },
      {
        id: 23,
        image: "/images/mallroad.jpg",
        place: "Manali Mall Road",
        district: "Kullu",
        type: "City Spot",
        highlights: ["Local Culture", "Street Food", "Shopping Hub"],
        description:
          "The vibrant heart of Manali. From tasting local Siddu to shopping for handcrafted woolen shawls, the Mall Road is the ultimate basecamp for travelers preparing for their next big Himalayan adventure.",
      },
      {
        id: 24,
        image: "/images/stadium.jpg",
        place: "Dharamshala Stadium",
        district: "Kangra",
        type: "Landmark",
        highlights: ["Highest Cricket Ground", "Dhauladhar Backdrop"],
        description:
          "Arguably the most beautiful cricket stadium in the world. Situated at 4,780 ft, the HPCA stadium offers a surreal experience where the snow-capped Dhauladhar peaks act as a natural backdrop to the vibrant green outfield.",
      },
      {
        id: 25,
        image: "/images/fort.jpg",
        place: "Kangra Fort",
        district: "Kangra",
        type: "Heritage",
        highlights: ["Ancient History", "Royal Architecture"],
        description:
          "One of the oldest and largest forts in India, dating back to the Trigarta Kingdom mentioned in the Mahabharata. It stands at the confluence of the Banganga and Manjhi rivers, offering a glimpse into the grand royal history of the Himalayas.",
      },
      {
        id: 26,
        image: "/images/pangong.webp",
        place: "Pangong Tso",
        district: "Ladakh",
        category: "Other Frontiers",
        type: "Expedition",
        highlights: ["Changing Water Colors", "Indo-China Border"],
        description:
          "The legendary salt-water lake of the Trans-Himalayas. Situated at 14,270 feet, Pangong Tso is famous for changing colors from turquoise to deep blue. A true test for explorers seeking the ultimate high-altitude thrill.",
      },
      {
        id: 27,
        image: "/images/nubra1.jpg",
        place: "Nubra Valley",
        district: "Ladakh",
        category: "Other Frontiers",
        type: "Expedition",
        highlights: ["Khardung La", "Hunder Sand Dunes"],
        description:
          "Crossing the Khardung La—one of the world's highest motorable passes—leads you to the cold desert of Nubra. Home to double-humped camels and white sand dunes framed by jagged snow peaks.",
      },
    ],
    [],
  );

  const groupedTreks = useMemo(() => {
    return treks.reduce((acc, trek) => {
      if (!acc[trek.district]) acc[trek.district] = [];
      acc[trek.district].push(trek);
      return acc;
    }, {});
  }, [treks]);
  const scroll = (district, direction) => {
    const container = scrollRefs.current[district];
    if (container) {
      const scrollAmount = 400; // Adjust based on card width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const toggleDetails = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="expeditions"
      className="scroll-mt-20 bg-black py-12 px-4 overflow-hidden"
    >
      <style>{`
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left px-2">
          <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
            UPCOMING <span className="text-orange-600">EXPEDITIONS</span>
          </h2>
        </div>

        {Object.entries(groupedTreks).map(([district, districtTreks]) => (
          <div key={district} className="mb-12 relative group/section">
            {/* Section Heading */}
            <div className="flex items-center gap-3 mb-6 px-2">
              <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tighter">
                {district}
              </h3>
              <div className="h-[1px] grow bg-gradient-to-r from-orange-600/50 to-transparent"></div>
            </div>

            {/* Slider Buttons */}
            <div className="hidden lg:flex absolute top-1/3 -translate-y-1/2 left-0 right-0 justify-between z-10 pointer-events-none">
              <button
                onClick={() => scroll(district, "left")}
                className="w-10 h-10 rounded-full bg-black/80 border border-white/10 text-white flex items-center justify-center hover:bg-orange-600 transition-all pointer-events-auto"
              >
                ←
              </button>
              <button
                onClick={() => scroll(district, "right")}
                className="w-10 h-10 rounded-full bg-black/80 border border-white/10 text-white flex items-center justify-center hover:bg-orange-600 transition-all pointer-events-auto"
              >
                →
              </button>
            </div>

            <div
              ref={(el) => (scrollRefs.current[district] = el)}
              className="flex items-stretch overflow-x-auto gap-4 pb-6 snap-x no-scrollbar cursor-grab active:cursor-grabbing px-2"
            >
              {districtTreks.map((trek) => (
                <div
                  key={trek.id}
                  className="min-w-64 md:min-w-72 w-64 md:w-72 shrink-0 snap-start bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/5 hover:border-orange-600/30 transition-all duration-500 group flex flex-col"
                >
                  {/* Compact Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={trek.image}
                      loading="lazy"
                      alt={trek.place}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/10" />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-orange-600 text-[8px] font-black text-white px-2 py-0.5 rounded-full uppercase tracking-widest z-20">
                      {trek.type}
                    </div>

                    {/* Highlights Top-Right */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1 z-20">
                      {trek.highlights &&
                        trek.highlights.slice(0, 2).map((highlight, idx) => (
                          <span
                            key={idx}
                            className="text-[8px] font-bold text-white bg-black/40 backdrop-blur-sm border border-white/5 px-1.5 py-0.5 rounded uppercase tracking-wider"
                          >
                            {highlight}
                          </span>
                        ))}
                    </div>

                    {/* Bottom Text Overlay */}
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h4 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors truncate">
                        {trek.place}
                      </h4>
                    </div>
                  </div>

                  {/* Compact Action Section */}
                  <div className="p-3 bg-[#0f0f0f] flex flex-col gap-3">
                    <p className="text-gray-400 text-[11px] leading-snug line-clamp-2 h-8">
                      {trek.description}
                    </p>
                    <a
                      href="#contact"
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center text-center"
                    >
                      Book Trip
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expeditions;
