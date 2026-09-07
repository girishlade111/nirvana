"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

const testimonials = [
  {
    quote: "Change is not something that we should fear. Rather, it is something that we should welcome. For without change, nothing in this world would ever grow or blossom.",
    name: "John Doe",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.",
    name: "Jack Foster",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    quote: "We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures that we can have if only we seek them with our eyes open.",
    name: "Natasha Romanoff",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
];

const slideVariants = {
  enter: { opacity: 0, x: 80 },
  center: { opacity: 1, x: 0, transition: { duration: 0.9, ease: easeLuxury } },
  exit: { opacity: 0, x: -80, transition: { duration: 0.6, ease: easeLuxury } },
};

export default function Testimonials() {
  const [[page, dir], setPage] = useState([0, 0]);

  const paginate = useCallback((direction: number) => {
    setPage(([prev]) => [(prev + direction + testimonials.length) % testimonials.length, direction]);
  }, []);

  useEffect(() => {
    const t = setInterval(() => paginate(1), 5000);
    return () => clearInterval(t);
  }, [paginate]);

  const t = testimonials[page];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-muted-beige">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeLuxury }}
          className="text-text-dark/40 text-xs tracking-[0.25em] uppercase font-body mb-4"
        >
          Testimonials
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: easeLuxury, delay: 0.2 }}
          className="w-12 h-[1px] bg-text-dark/20 mx-auto mb-16"
        />

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={page}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <div
                className="w-24 h-24 mx-auto mb-8 rounded-full bg-cover bg-center border-2 border-white shadow-lg"
                style={{ backgroundImage: `url(${t.image})` }}
                role="img"
                aria-label={t.name}
              />
              <blockquote className="font-heading text-text-dark text-lg md:text-xl lg:text-2xl leading-relaxed italic mb-8 max-w-[700px] mx-auto font-[400]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite className="not-italic">
                <p className="text-text-dark font-body text-sm font-[500]">{t.name}</p>
                <p className="text-text-dark/40 text-xs tracking-[0.1em] uppercase font-body mt-1">{t.role}</p>
              </cite>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > page ? 1 : -1])}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                i === page ? "bg-navy w-6" : "bg-text-dark/20 hover:bg-text-dark/40"
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center text-text-dark/40 hover:text-text-dark hover:border-text-dark/30 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full border border-text-dark/10 flex items-center justify-center text-text-dark/40 hover:text-text-dark hover:border-text-dark/30 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
