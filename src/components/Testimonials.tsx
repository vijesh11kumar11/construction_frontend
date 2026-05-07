"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const t = TESTIMONIALS[i];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 h-96 w-96 rounded-full bg-gold-deep/10 blur-3xl" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-2">
            <span className="h-px w-8 bg-gold" /> Testimonials <span className="h-px w-8 bg-gold" />
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Words from those <br /> we’ve <span className="text-gradient-cream italic">built with.</span>
          </h2>
        </div>

        <div className="relative min-h-[320px] sm:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="h-12 w-12 text-gold-2 mx-auto mb-6 opacity-70" />
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-ivory/95 max-w-3xl mx-auto">
                “{t.quote}”
              </p>
              <div className="mt-8 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-6 font-medium text-ivory">{t.name}</p>
              <p className="text-sm text-ivory/60">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            aria-label="Previous"
            onClick={() => setI((p) => (p - 1 + total) % total)}
            className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-gold/30 text-ivory hover:bg-gold hover:text-charcoal transition"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, n) => (
              <button
                key={n}
                aria-label={`Slide ${n + 1}`}
                onClick={() => setI(n)}
                className={`h-1.5 rounded-full transition-all ${
                  n === i ? "w-10 bg-gold" : "w-2 bg-ivory/30 hover:bg-ivory/60"
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next"
            onClick={() => setI((p) => (p + 1) % total)}
            className="h-11 w-11 inline-flex items-center justify-center rounded-full border border-gold/30 text-ivory hover:bg-gold hover:text-charcoal transition"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
