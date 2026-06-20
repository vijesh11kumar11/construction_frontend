"use client";

import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Award, Users } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ThreeParticles = dynamic(() => import("./ThreeParticles"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-42 pb-20 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/earth_movers/earth_movers1.jpeg"
          alt="Construction site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-ivory/95 to-ivory/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 hero-grid opacity-70" />

      {/* Three.js particle background */}
      <ThreeParticles />

      {/* Floating gold orb */}
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-gold-2/40 to-gold/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center justify-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs sm:text-sm font-medium text-charcoal/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Trusted by Government & Fortune-listed Developers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight"
            >
              Building <span className="text-gradient-gold italic">legacies.</span>
              <br />
              Moving <span className="text-gradient-gold italic">earth.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-charcoal/70 leading-relaxed"
            >
              Skandha Constructions Constructions delivers world-class government and private
              projects, backed by a 180-strong fleet of premium earth-moving
              machinery available for lease across the nation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="shine group inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm sm:text-base font-medium text-ivory hover:bg-graphite hover:-translate-y-0.5 hover:shadow-2xl transition-all duration-200 shadow-xl shadow-charcoal/20"
              >
                Explore Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
              <a
                href="#equipment"
                className="group inline-flex items-center gap-2 rounded-full border border-charcoal/15 bg-white/60 backdrop-blur px-7 py-4 text-sm sm:text-base font-medium text-charcoal hover:border-gold hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                <PlayCircle className="h-5 w-5 text-gold-deep transition-transform duration-200 group-hover:scale-110" />
                Browse Equipment Fleet
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-3 max-w-lg gap-6"
            >
              {[
                { icon: Award, label: "ISO 9001:2015" },
                { icon: ShieldCheck, label: "Govt. Class-A" },
                { icon: Users, label: "1,200+ Crew" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <b.icon className="h-5 w-5 text-gold-deep" />
                  <span className="text-xs sm:text-sm text-charcoal/70 font-medium">
                    {b.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  );
}
