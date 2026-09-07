"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

interface SplitSectionProps {
  title: string;
  subtitle?: string;
  paragraph: string;
  cta: string;
  ctaHref: string;
  image: string;
  imageLabel: string;
  reversed?: boolean;
  id?: string;
}

export default function SplitSection({
  title, subtitle, paragraph, cta, ctaHref, image, imageLabel, reversed, id,
}: SplitSectionProps) {
  return (
    <section id={id} className="bg-soft-white">
      <div className="mx-auto max-w-[1400px]">
        <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: easeLuxury }}
            className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-16 lg:py-28"
          >
            {subtitle && (
              <p className="text-text-dark/40 text-xs tracking-[0.25em] uppercase font-body mb-4">
                {subtitle}
              </p>
            )}
            <h2 className="font-heading text-text-dark text-[32px] md:text-[42px] lg:text-[54px] font-[600] leading-[1.15] mb-6">
              {title}
            </h2>
            <p className="text-text-dark/60 text-base md:text-lg leading-relaxed font-body font-[300] max-w-[500px] mb-10">
              {paragraph}
            </p>
            <motion.a
              href={ctaHref}
              className="inline-flex self-start bg-navy text-white px-10 py-4 text-xs tracking-[0.25em] uppercase font-body font-[500] rounded-full transition-all duration-500"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(8,47,117,0.25)" }}
              whileTap={{ scale: 0.98 }}
            >
              {cta}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: easeLuxury }}
            className="flex-1 min-h-[400px] lg:min-h-[600px] relative overflow-hidden group lg:p-8"
          >
            <div className="relative w-full h-full overflow-hidden rounded-none lg:rounded-sm">
              <Image
                src={image}
                alt={imageLabel}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
