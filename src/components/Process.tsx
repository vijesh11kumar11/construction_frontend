"use client";

import { motion } from "framer-motion";
import { PROCESS } from "@/lib/data";

export default function Process() {
  return (
    <section className="py-24 sm:py-32 bg-pearl/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
            <span className="h-px w-8 bg-gold" /> Our Process
          </span>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
            A clear, <span className="text-gradient-gold italic">curated</span> journey.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute hidden lg:block top-12 left-0 right-0 h-px hairline" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 mx-auto lg:mx-0 h-24 w-24 rounded-full bg-ivory border border-gold/30 flex items-center justify-center shadow-lg">
                  <span className="font-display text-3xl text-gradient-gold">{p.step}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl mt-6">{p.title}</h3>
                <p className="mt-3 text-sm text-charcoal/65 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
