import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa"; // Import the icon
import {
  User,
  Phone,
  Zap,
  ArrowRight,
  Mail,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    trek: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "917807239274";
    const text =
      `*New Expedition Inquiry from ThePahadiSquad*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Interested In:* ${formData.trek}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", phone: "", trek: "" });
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-black text-white px-4 md:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 text-center md:text-left">
          <p className="text-orange-500 font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl sm:text-4xl font-black tracking-tight leading-tight">
            Start Your <span className="text-orange-600">Adventure.</span>
          </h2>
          <div className="h-1 w-16 md:h-1.5 md:w-24 bg-orange-600 mt-4 md:mt-6 rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Form Side */}
          <div className="lg:col-span-5 bg-[#1A1B1B] p-6 md:p-12 order-2 lg:order-1">
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-center md:text-left">
                Send an Inquiry
              </h3>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed text-center md:text-left">
                Fill out the details and our team will get back to you on
                WhatsApp within 24 hours.
              </p>
            </div>

            <form onSubmit={sendToWhatsApp} className="space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <div className="relative group">
                  <User
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border border-slate-800 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:border-orange-500 focus:outline-none transition-all text-xs md:text-sm"
                    placeholder="Full Name"
                  />
                </div>

                <div className="relative group">
                  <Phone
                    size={16}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-orange-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-slate-800 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:border-orange-500 focus:outline-none transition-all text-xs md:text-sm"
                    placeholder="WhatsApp Number"
                  />
                </div>

                <div className="relative group">
                  <Zap
                    size={16}
                    className="absolute left-4 top-4 text-slate-500 group-focus-within:text-orange-500"
                  />
                  <textarea
                    name="trek"
                    required
                    rows="3"
                    value={formData.trek}
                    onChange={handleChange}
                    className="w-full bg-black border border-slate-800 rounded-xl px-10 md:px-12 py-3 md:py-4 focus:border-orange-500 focus:outline-none transition-all text-xs md:text-sm resize-none"
                    placeholder="Which expedition are you eyeing?"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 md:gap-3 transition-all transform active:scale-95 shadow-lg shadow-orange-900/40"
              >
                Send to WhatsApp <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Contact Info Side */}
          <div className="lg:col-span-7 relative min-h-[450px] md:min-h-[500px] order-1 lg:order-2">
            <img
              src="/images/hadimba.webp"
              alt="Mountain Base"
              className="absolute inset-0 w-full h-full object-cover opacity-50 lg:opacity-100"
            />
            {/* Responsive Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent lg:bg-gradient-to-r lg:from-[#1A1B1B] lg:via-[#1A1B1B]/90 lg:to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-16">
              <h3 className="text-2xl md:text-3xl font-black mb-3 md:mb-4 text-white uppercase tracking-tighter leading-tight text-center md:text-left">
                Connect With <br className="hidden md:block" />
                <span className="text-orange-600 text-3xl md:text-4xl tracking-normal">
                  The Owner.
                </span>
              </h3>

              <p className="text-gray-300 text-xs md:text-base mb-8 md:mb-10 max-w-sm leading-relaxed border-l-2 border-orange-600 pl-4 mx-auto md:mx-0 text-left">
                Feel free to call for your queries. Since we specialize in
                personalized expeditions, rentals are finalized via phone.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-orange-600/20 p-3 rounded-xl group-hover:bg-orange-600 transition-all">
                    <Phone
                      className="text-orange-500 group-hover:text-white"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mb-0.5">
                      Call Us
                    </p>
                    <a
                      href="tel:+917807239274"
                      className="text-sm md:text-lg font-bold text-white hover:text-orange-500 transition-colors tracking-tight"
                    >
                      +91 78072 39274
                    </a>
                  </div>
                </div>

                {/* WhatsApp Info */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-green-600/20 p-3 rounded-xl">
                    <MessageSquare className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest mb-0.5">
                      WhatsApp
                    </p>
                    <p className="text-gray-200 text-xs md:text-lg font-bold">
                      Quick Query Support
                    </p>
                  </div>
                </div>

                {/* Instagram - NEW SECTION */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-pink-600/20 p-3 rounded-xl group-hover:bg-pink-600 transition-all flex items-center justify-center">
                    <FaInstagram
                      className="text-pink-500 group-hover:text-white transition-colors"
                      size={20}
                    />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-pink-500 uppercase tracking-widest mb-0.5">
                      Follow Us
                    </p>
                    <a
                      href="https://www.instagram.com/shubham_parihar_007?igsh=MXFlaXYzOGZmdDdqdQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-lg font-bold text-white hover:text-pink-500 transition-colors tracking-tight"
                    >
                      @thepahadisquad
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="bg-blue-600/20 p-3 rounded-xl">
                    <Mail className="text-blue-500" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-0.5">
                      Email
                    </p>

                    <p className="text-gray-200 text-xs md:text-lg font-bold">
                      thepahadisquad@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
