"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

export default function SpaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      id="spa"
      ref={ref}
      className="relative h-[550px] lg:h-[650px] w-full overflow-hidden"
      aria-label="Spa and Bath"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=1920&q=85')] bg-cover bg-center"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/40 to-navy/70" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, ease: easeLuxury }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <p className="text-white/50 text-xs tracking-[0.25em] uppercase font-body mb-5">
          Premium Wellness
        </p>
        <h2 className="font-heading text-white text-[42px] md:text-[64px] lg:text-[80px] font-[600] leading-[1.1] mb-6">
          Spa &amp; Bath
        </h2>
        <p className="text-white/70 text-base md:text-lg max-w-[500px] leading-relaxed font-body font-[300] mb-10">
          We offer the ideal atmosphere for relaxation and personal care. A real treat for the body and mind.
        </p>
        <motion.a
          href="#"
          className="inline-block border border-white/40 text-white px-10 py-4 text-xs tracking-[0.25em] uppercase font-body font-[500] rounded-full transition-all duration-500"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.8)" }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}
