"use client";

import { motion } from "framer-motion";
import {
  Landmark,
  Building2,
  Truck,
  Mountain,
  Briefcase,
  Leaf,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS = { Landmark, Building2, Truck, Mountain, Briefcase, Leaf } as const;

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-charcoal text-ivory relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 hairline" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold-deep/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-2">
              <span className="h-px w-8 bg-gold" /> Our Services
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Everything you need, <br />
              <span className="text-gradient-cream italic">end to end.</span>
            </h2>
          </div>
          <p className="max-w-md text-ivory/60 leading-relaxed">
            From civic megaprojects to private developments and a premium
            machinery leasing arm — Griha is engineered to be your single
            accountable partner.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative rounded-3xl border border-gold/15 bg-graphite/60 p-7 hover:bg-graphite hover:border-gold/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-gold text-charcoal shadow-lg">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-2xl mt-6">{s.title}</h3>
                  <p className="mt-3 text-sm text-ivory/65 leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-gold-2 opacity-70 group-hover:opacity-100 transition">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
