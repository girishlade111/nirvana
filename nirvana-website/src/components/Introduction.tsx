"use client";

import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.5, ease: easeLuxury, delay: 0.3 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easeLuxury, delay: 0.2 } },
};

export default function Introduction() {
  return (
    <section id="intro" className="py-28 lg:py-40 bg-soft-white">
      <div className="mx-auto max-w-[900px] px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={textVariants}
            className="text-text-dark/40 text-xs tracking-[0.25em] uppercase font-body mb-8"
          >
            A sanctuary of escape
          </motion.p>

          <motion.h2
            variants={textVariants}
            className="font-heading text-text-dark text-[28px] md:text-[42px] lg:text-[54px] leading-[1.2] font-[600] mb-10 px-4"
          >
            to help people reset themselves
          </motion.h2>

          <motion.div
            className="w-16 h-[1px] bg-text-dark/20 mx-auto"
            variants={lineVariants}
          />

          <motion.p
            variants={textVariants}
            className="mt-10 text-text-dark/60 text-base md:text-lg leading-relaxed max-w-[640px] mx-auto font-body font-[300]"
          >
            A luxury yoga, fitness &amp; wellbeing holiday, focusing on your health in Mind, Body and Skin.
            Remember to take care of yourself, you cannot pour from an empty cup.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
