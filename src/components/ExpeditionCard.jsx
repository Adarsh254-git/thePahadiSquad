import React, { useState, useMemo, memo } from "react";

// The individual card is wrapped in memo
const ExpeditionCard = memo(({ trek, isExpanded, onToggle }) => {
  return (
    <div className="min-w-70 md:min-w-87.5 w-70 md:w-87.5 shrink-0 snap-start bg-[#121212] rounded-3xl overflow-hidden border border-white/5 hover:border-orange-600/50 transition-all duration-500 group">
      <div className="relative h-60 overflow-hidden">
        <img
          src={trek.image}
          alt={trek.place}
          loading="lazy" // Added for performance
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-orange-600 text-[10px] font-black text-white px-3 py-1 rounded-full uppercase tracking-widest">
          {trek.type}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
          {trek.place}
        </h4>

        {/* Transition container */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-40 mb-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-orange-600 pl-4 italic">
            {trek.description}
          </p>
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={() => onToggle(trek.id)}
            className={`flex-1 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
              isExpanded
                ? "bg-white text-black"
                : "bg-transparent border border-white/20 text-white hover:bg-white/10"
            }`}
          >
            {isExpanded ? "Close" : "Details"}
          </button>
          <a
            href="#contact"
            className="flex-1 bg-orange-600 hover:bg-orange-500 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
});

// Give it a display name for dev tools
ExpeditionCard.displayName = "ExpeditionCard";
