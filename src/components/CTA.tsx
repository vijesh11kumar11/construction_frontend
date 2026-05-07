"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-charcoal text-ivory p-10 sm:p-16 lg:p-20"
        >
          <div className="absolute inset-0 -z-10 opacity-30">
            <Image
              src="/images/earth_movers/earth_movers2.jpeg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/40" />
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-2">
              <span className="h-px w-8 bg-gold" /> Ready to build?
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Your next megaproject deserves a <span className="text-gradient-cream italic">premium partner.</span>
            </h2>
            <p className="mt-6 text-ivory/70 max-w-xl leading-relaxed">
              Schedule a complimentary consultation with our senior team. We’ll
              walk through scope, timelines, and a tailored proposal — typically
              within 48 hours.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="shine group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-medium text-charcoal hover:opacity-95 transition"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+918040001996"
                className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-7 py-4 text-sm font-medium text-ivory hover:bg-ivory/5 transition"
              >
                Call +91 80 4000 1996
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
