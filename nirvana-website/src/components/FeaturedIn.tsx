"use client";

import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

const publications = [
  "Travel + Leisure",
  "Condé Nast",
  "Forbes",
  "National Geographic",
  "Vogue",
  "The Times",
  "Bloomberg",
  "Departures",
];

export default function FeaturedIn() {
  return (
    <section className="py-16 lg:py-20 bg-soft-white overflow-hidden" aria-label="As featured in">
      <div className="mx-auto max-w-[1400px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className="text-text-dark/40 text-xs tracking-[0.25em] uppercase font-body mb-4"
        >
          As Featured In
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: easeLuxury, delay: 0.2 }}
          className="w-12 h-[1px] bg-text-dark/20 mx-auto mb-12"
        />

        <div className="relative">
          <motion.div
            className="flex gap-16 items-center justify-center flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
            }}
          >
            {publications.map((pub) => (
              <motion.div
                key={pub}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 0.5, y: 0, transition: { duration: 0.6, ease: easeLuxury } },
                }}
                whileHover={{ opacity: 1, scale: 1.02 }}
                className="cursor-pointer transition-all duration-300"
              >
                <span className="font-heading text-text-dark/40 text-lg tracking-[0.15em] uppercase hover:text-navy transition-colors duration-300">
                  {pub}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
