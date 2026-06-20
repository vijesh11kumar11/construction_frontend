"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.18)]"
              : "bg-transparent"
          }`}
        >
          <Link href="#home" className="flex items-center gap-2 group">
            <Image
              src="/images/logo1.png"
              alt="Skandha Constructions"
              width={200}
              height={64}
              className="h-28 w-56 object-contain mix-blend-multiply"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-base font-semibold text-charcoal/80 hover:text-charcoal transition-colors group"
              >
                {l.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="shine relative inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-ivory hover:bg-graphite hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Request a Quote
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 text-charcoal hover:bg-gold/10 hover:border-gold/60 active:scale-95 transition-all duration-150"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-xl"
            >
              <nav className="flex flex-col">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base text-charcoal border-b border-gold/10 last:border-0"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex justify-center items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-ivory"
                >
                  Request a Quote
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}