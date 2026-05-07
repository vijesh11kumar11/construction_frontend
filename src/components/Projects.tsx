"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin, Calendar } from "lucide-react";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "Government", "Private"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-pearl/40 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" /> Selected Portfolio
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Landmarks we’re <span className="text-gradient-gold italic">proud</span> of.
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 self-start lg:self-end glass rounded-full p-1.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-charcoal text-ivory shadow-md"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={i === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-gold/15 bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
              >
              <div className={`relative ${i === 0 ? "h-[480px] lg:h-full" : "h-72"}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ivory/90 backdrop-blur px-3 py-1 text-xs font-medium text-charcoal">
                    <span className={`h-1.5 w-1.5 rounded-full ${p.category === "Government" ? "bg-gold-deep" : "bg-pearl"}`} />
                    {p.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-charcoal opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-ivory">
                  <h3 className="font-display text-2xl sm:text-3xl">{p.title}</h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-ivory/70">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold-2" /> {p.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gold-2" /> {p.year}
                    </span>
                  </div>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
