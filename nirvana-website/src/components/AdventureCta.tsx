"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

export default function AdventureCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      id="reserve"
      ref={ref}
      className="relative h-[500px] lg:h-[550px] w-full overflow-hidden"
      aria-label="Reserve your adventure"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85')] bg-cover bg-center"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/50 to-navy/60" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: easeLuxury }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="font-heading text-white text-[36px] md:text-[54px] lg:text-[72px] font-[600] leading-[1.1] mb-8">
          Reserve Your <br className="md:hidden" />
          Adventure
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-[600px] leading-relaxed font-body font-[300] mb-10">
          Discover the world you&apos;ve never seen, explore the horizon you never reached.
          Reserve your life changing adventurous journey today.
        </p>
        <motion.a
          href="#"
          className="inline-block bg-white text-navy px-12 py-4 text-xs tracking-[0.25em] uppercase font-body font-[500] rounded-full transition-all duration-500"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.98 }}
        >
          Inquire
        </motion.a>
      </motion.div>
    </section>
  );
}
