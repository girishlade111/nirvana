"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeLuxury } from "@/lib/animations";

const links = [
  { label: "About", href: "#intro" },
  { label: "Retreats", href: "#retreats" },
  { label: "Experiences", href: "#spa" },
  { label: "Wellness", href: "#testimonials" },
  { label: "Contact", href: "#reserve" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeLuxury } },
        }}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-[100] h-[90px] transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1400px] items-center px-6 lg:px-10">
          <div className="hidden lg:flex items-center gap-4 flex-1">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-text-dark/40 hover:text-navy" : "text-white/70 hover:text-white"
                }`}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>

          <div className="flex-1 lg:flex-none flex justify-center">
            <motion.a
              href="#"
              className="relative flex items-center justify-center"
              whileHover={{ scale: 1.04 }}
              aria-label="Nirvana Home"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
              <div
                className={`relative z-10 w-14 h-14 lg:w-[68px] lg:h-[68px] rounded-full border flex items-center justify-center transition-all duration-500 ${
                  scrolled
                    ? "bg-navy/5 border-navy/20"
                    : "bg-white/10 border-white/20 backdrop-blur-md"
                }`}
              >
                <span
                  className={`font-heading text-lg lg:text-xl tracking-[0.15em] transition-colors duration-500 ${
                    scrolled ? "text-navy" : "text-white"
                  }`}
                >
                  N
                </span>
              </div>
            </motion.a>
          </div>

          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs tracking-[0.2em] uppercase font-body font-[400] transition-colors duration-300 group ${
                  scrolled
                    ? "text-text-dark/70 hover:text-navy"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-[1px] transition-all duration-[400ms] group-hover:w-full ${
                    scrolled ? "bg-navy" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-[5px] transition-colors duration-500 ${
              open ? "text-white" : scrolled ? "text-text-dark" : "text-white"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-current"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-current"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeLuxury }}
            className="fixed inset-0 z-[90] bg-navy flex items-center justify-center"
          >
            <nav aria-label="Mobile navigation">
              <motion.ul
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center gap-10"
              >
                {links.map((link, i) => (
                  <motion.li
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.1, duration: 0.8, ease: easeLuxury },
                      },
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-white font-heading text-3xl lg:text-4xl tracking-wide hover:opacity-60 transition-opacity duration-300"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
