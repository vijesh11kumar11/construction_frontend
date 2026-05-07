"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-gold/20 shadow-2xl">
              <Image
                src="/images/earth_movers/earth_movers3.jpeg"
                alt="Construction team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 sm:-right-12 glass rounded-2xl p-6 shadow-2xl max-w-xs">
              <p className="font-display text-4xl text-gradient-gold">1996</p>
              <p className="text-sm text-charcoal/70 mt-1">
                Founded with a single excavator and an uncompromising vision.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" />
              About Griha
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Three decades of <span className="text-gradient-gold italic">precision,</span> scale & trust.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed">
              Founded in 1996, Griha Constructions has grown into one of the
              nation’s most respected names in heavy infrastructure. We pair
              old-world craftsmanship with cutting-edge engineering — delivering
              landmark projects for governments and private giants alike, while
              operating one of the largest premium earth-mover fleets in the
              region.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {[
                {
                  title: "Engineering Excellence",
                  desc: "Senior structural engineers on every project, with rigorous QA gates.",
                },
                {
                  title: "Fleet at Scale",
                  desc: "180+ heavy machines, 24/7 maintenance and certified operators.",
                },
                {
                  title: "Compliance First",
                  desc: "ISO certified, government Class-A registered, full HSE protocols.",
                },
                {
                  title: "On-Time Delivery",
                  desc: "96% of projects delivered on or before contractual deadline.",
                },
              ].map((f) => (
                <div key={f.title} className="rounded-2xl border border-gold/15 bg-white/40 p-5 hover:border-gold/40 transition">
                  <h4 className="font-display text-lg text-charcoal">{f.title}</h4>
                  <p className="mt-2 text-sm text-charcoal/65 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#services"
              className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-charcoal hover:text-gold-deep transition-colors group"
            >
              Discover what we do
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
