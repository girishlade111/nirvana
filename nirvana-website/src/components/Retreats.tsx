"use client";

import { motion } from "framer-motion";
import { easeLuxury, staggerContainer, staggerItem } from "@/lib/animations";

const retreats = [
  {
    title: "Yoga & Fitness",
    date: "March 2018",
    desc: "Always control what goes inside. Just balance your mind and body with Yoga. Create the healthy living for yourself.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=85",
  },
  {
    title: "Herbal Medicine",
    date: "April 2018",
    desc: "The practice of naturopathic medicine includes modern, traditional, scientific, and empirical methods.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=85",
  },
  {
    title: "Guided Surfing Trip",
    date: "May 2018",
    desc: "Free your inner adventure with guided surfing trip. Enjoy the thrill, take the challenge and refresh your mind.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=85",
  },
];

export default function Retreats() {
  return (
    <section id="retreats" className="py-20 lg:py-28 bg-soft-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } } }}
            className="text-text-dark/40 text-xs tracking-[0.25em] uppercase font-body mb-4"
          >
            Retreats Coming
          </motion.p>
          <motion.div
            variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 1.5, ease: easeLuxury, delay: 0.2 } } }}
            className="w-12 h-[1px] bg-text-dark/20 mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {retreats.map((retreat) => (
            <motion.article
              key={retreat.title}
              variants={staggerItem}
              className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700"
            >
              <div className="relative h-[260px] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${retreat.image})` }}
                  role="img"
                  aria-label={retreat.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 text-center">
                <p className="text-navy text-xs tracking-[0.2em] uppercase font-body font-[500] mb-2">
                  {retreat.title}
                </p>
                <p className="text-text-dark/40 text-[11px] tracking-[0.15em] uppercase font-body mb-5">
                  {retreat.date}
                </p>
                <p className="text-text-dark/60 text-sm leading-relaxed font-body font-[300] mb-7">
                  {retreat.desc}
                </p>
                <motion.a
                  href="#"
                  className="inline-block text-navy text-xs tracking-[0.25em] uppercase font-body font-[500] border-b border-navy/30 pb-[2px] transition-all duration-300 hover:border-navy"
                  whileHover={{ letterSpacing: "0.3em" }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
