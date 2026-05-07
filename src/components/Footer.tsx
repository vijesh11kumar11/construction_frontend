"use client";

import Link from "next/link";
import { HardHat, Mail, Phone, MapPin, Globe, Send, Share2, AtSign } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 hairline" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-gold/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link href="#home" className="flex items-center gap-2 group">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold shadow-md">
                <HardHat className="h-5 w-5 text-charcoal" strokeWidth={2.4} />
              </span>
              <span className="font-display text-2xl">
                Griha<span className="text-gradient-cream"> .</span>
              </span>
            </Link>
            <p className="mt-6 text-ivory/65 max-w-md leading-relaxed">
              Building landmark infrastructure across the nation since 1996. A
              legacy of precision, scale and uncompromising trust — for
              governments, enterprises and visionaries.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[Globe, Share2, AtSign, Send].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 hover:bg-gold hover:text-charcoal hover:border-gold transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-2 mb-5">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/70 hover:text-gold-2 transition text-sm">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.3em] text-gold-2 mb-5">Get in touch</h4>
            <ul className="space-y-4 text-sm text-ivory/75">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                12 Brigade Road, Bengaluru, IN 560001
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold flex-shrink-0" />
                +91 80 4000 1996
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold flex-shrink-0" />
                hello@grihaconstructions.com
              </li>
            </ul>

            <form className="mt-8" onSubmit={(e) => e.preventDefault()}>
              <p className="text-xs uppercase tracking-widest text-ivory/50 mb-3">
                Newsletter
              </p>
              <div className="flex items-center gap-2 rounded-full border border-gold/25 bg-graphite/60 p-1.5 pl-5">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 focus:outline-none"
                />
                <button className="rounded-full bg-gradient-gold px-5 py-2 text-xs font-semibold text-charcoal">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Griha Constructions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gold-2 transition">Privacy</a>
            <a href="#" className="hover:text-gold-2 transition">Terms</a>
            <a href="#" className="hover:text-gold-2 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
