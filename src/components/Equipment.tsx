"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wrench, Gauge, ShieldCheck, ArrowRight } from "lucide-react";
import { EQUIPMENT } from "@/lib/data";

export default function Equipment() {
  return (
    <section id="equipment" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" /> Earth Mover Leasing
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              The largest premium fleet, <br />
              <span className="text-gradient-gold italic">ready when you are.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-charcoal/70 leading-relaxed">
            From 90-ton excavators to 750-ton mobile cranes — every machine is
            certified, telematics-monitored, and supported by a 24/7 mobile
            service team. Daily, monthly and full-project leases available.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPMENT.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative rounded-3xl border border-gold/15 bg-white overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-56 overflow-hidden bg-pearl">
                <Image
                  src={e.image}
                  alt={e.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-charcoal/80 backdrop-blur text-ivory text-[10px] uppercase tracking-widest px-3 py-1">
                    {e.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ivory/90 backdrop-blur px-3 py-1 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-medium text-charcoal">{e.available} available</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl">{e.name}</h3>
                <ul className="mt-4 space-y-2">
                  {e.specs.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-charcoal/70">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-gold/15 pt-4">
                  <div className="flex items-center gap-3 text-xs text-charcoal/60">
                    <span className="inline-flex items-center gap-1"><Wrench className="h-3.5 w-3.5 text-gold-deep" /> Serviced</span>
                    <span className="inline-flex items-center gap-1"><Gauge className="h-3.5 w-3.5 text-gold-deep" /> Telematics</span>
                  </div>
                  <a href="#contact" className="inline-flex items-center gap-1 text-sm font-medium text-charcoal hover:text-gold-deep">
                    Lease <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { icon: ShieldCheck, t: "Fully Insured", d: "Comprehensive coverage on every lease." },
            { icon: Wrench, t: "24/7 Service", d: "Mobile maintenance crews on call." },
            { icon: Gauge, t: "Live Telematics", d: "Real-time monitoring & reporting." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl glass p-6 flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                <b.icon className="h-5 w-5 text-charcoal" />
              </div>
              <div>
                <h4 className="font-display text-lg">{b.t}</h4>
                <p className="text-sm text-charcoal/65 mt-1">{b.d}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
