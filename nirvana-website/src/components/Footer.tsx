"use client";

import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/60" role="contentinfo">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-heading text-xl tracking-widest">N</span>
            </motion.div>
            <p className="text-white/50 text-sm leading-relaxed font-body font-[300] max-w-[300px]">
              A sanctuary of escape — luxury wellness resort offering yoga, spa, adventure, and organic cuisine.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-[0.2em] uppercase font-body font-[500] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Contact", "Retreats", "Wellness"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors duration-300 font-body font-[300]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-[0.2em] uppercase font-body font-[500] mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-body font-[300]">
              <li>
                <a href="tel:+12121234567" className="text-white/50 hover:text-white transition-colors duration-300">
                  (212) 123-4567
                </a>
              </li>
              <li className="text-white/50 leading-relaxed">
                666 Unnamed Ave, California
              </li>
              <li>
                <a href="mailto:nirvana@abc.com" className="text-white/50 hover:text-white transition-colors duration-300">
                  nirvana@abc.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white/80 text-xs tracking-[0.2em] uppercase font-body font-[500] mb-6">
              Newsletter
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex border-b border-white/20 pb-3"
            >
              <input
                type="email"
                placeholder="Your email"
                required
                aria-label="Email address"
                className="bg-transparent text-white text-sm placeholder:text-white/30 font-body font-[300] flex-1 outline-none"
              />
              <motion.button
                type="submit"
                className="text-white/60 hover:text-white text-xs tracking-[0.2em] uppercase font-body font-[500] transition-colors duration-300"
                whileHover={{ x: 2 }}
                aria-label="Subscribe"
              >
                Send
              </motion.button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-body">
            &copy; {new Date().getFullYear()} Nirvana. All rights reserved.
          </p>
          <p className="text-white/30 text-xs font-body">
            Made with <span aria-label="love">&hearts;</span> by{" "}
            <a href="https://themewagon.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-300">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
