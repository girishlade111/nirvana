"use client";

import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden" aria-label="Welcome to Nirvana">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: easeLuxury }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=85')] bg-cover bg-center"
          aria-hidden="true"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/30 to-navy/70" aria-hidden="true" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxury, delay: 0.2 }}
          className="text-white/60 text-xs tracking-[0.25em] uppercase mb-5 font-body"
        >
          Welcome to
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: easeLuxury, delay: 0.3 }}
            className="font-heading text-white font-[600] leading-[1.05] tracking-[0.02em] text-[42px] md:text-[64px] lg:text-[90px]"
          >
            Nirvana
            <br />
            <span className="font-[400] italic">Liveliness</span>
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxury, delay: 0.6 }}
          className="flex items-center gap-4 mt-6 text-white/70 text-sm tracking-[0.2em] uppercase font-body"
        >
          <span>Retreats</span>
          <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
          <span>Adventure</span>
          <span className="w-1 h-1 rounded-full bg-white/40" aria-hidden="true" />
          <span>Spa</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeLuxury, delay: 0.8 }}
          className="mt-12"
        >
          <motion.a
            href="#retreats"
            className="inline-block bg-navy text-white px-10 py-4 text-xs tracking-[0.25em] uppercase font-body font-[500] rounded-full transition-all duration-500"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(8,47,117,0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Retreats
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="18" height="28" rx="9" stroke="white" strokeOpacity="0.4" strokeWidth="2" />
          <motion.circle
            cx="10" cy="10" r="3" fill="white" fillOpacity="0.6"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <span className="sr-only">Scroll down</span>
      </motion.div>
    </section>
  );
}
