"use client";

import { motion } from "framer-motion";
import { CLIENTS } from "@/lib/data";

export default function Marquee() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-10 border-y border-gold/15 bg-pearl/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs uppercase tracking-[0.4em] text-charcoal/50 mb-6"
        >
          Trusted by industry leaders
        </motion.p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-pearl to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-pearl to-transparent z-10" />
        <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
          {items.map((c, i) => (
            <span
              key={i}
              className="font-display text-2xl sm:text-3xl text-charcoal/40 hover:text-gold-deep transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
