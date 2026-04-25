import React from "react";
import { FaInstagram } from "react-icons/fa";

import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2C2D2D] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">
        <div>
          <div className="shrink-0 mb-6">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src="/images/phadisquad.png"
                alt="ThePhadiSquad Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />

              <div className="flex flex-col justify-center leading-tight">
                <span className="text-lg font-bold tracking-tight text-white">
                  ThePahadi
                </span>
                <span className="text-md font-bold tracking-tight text-orange-600 -mt-1">
                  Squad
                </span>
              </div>
            </a>
          </div>

          <p className="text-white text-sm leading-relaxed mb-6 max-w-xs">
            Your ultimate companion for Himalayan adventures. We bring you
            closer to the peaks with expert-led treks and rugged expedition
            rentals.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-white text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-orange-500 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#expeditions"
                className="hover:text-orange-500 transition-colors"
              >
                Expeditions
              </a>
            </li>
            <li>
              <a
                href="#plans"
                className="hover:text-orange-500 transition-colors"
              >
                Travel Plans
              </a>
            </li>
            <li>
              <a
                href="#rentals"
                className="hover:text-orange-500 transition-colors"
              >
                Car Rentals
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Support</h3>
          <ul className="space-y-4 text-white  text-sm">
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Safety Guidelines
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Cancellation Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-white  text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-orange-500" />
              <span>Himachal Pradesh, India</span>
            </li>
            <li className="flex items-start gap-3">
              {/* Icon - Added mt-1 to align with the first line of text */}
              <Phone size={18} className="text-orange-500 mt-1" />

              {/* Numbers Column */}
              <div className="flex flex-col">
                <a
                  href="tel:+917807489354"
                  className="hover:text-orange-500 transition-colors"
                >
                  +91 78074 89354
                </a>
                <a
                  href="tel:+917807239274"
                  className="hover:text-orange-500 transition-colors"
                >
                  +91 78072 39274
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              <span>hello@thepahadisquad.com</span>
            </li>
            <li className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/shubham_parihar_007?igsh=MXFlaXYzOGZmdDdqdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-orange-500 transition-colors group"
              >
                <FaInstagram
                  size={18}
                  className="text-orange-500 group-hover:scale-110 transition-transform"
                />
                <span>@thepahadisquad</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex justify-center items-center text-white text-sm font-medium border-t border-white">
        <p>
          © {new Date().getFullYear()} ThePahadi
          <span className="text-orange-600">Squad</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
