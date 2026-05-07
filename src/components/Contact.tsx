"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" /> Let’s Build
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Start your <span className="text-gradient-gold italic">next landmark</span> with us.
            </h2>
            <p className="mt-6 text-charcoal/70 leading-relaxed max-w-md">
              Whether you’re commissioning a megaproject or leasing a single
              excavator for a weekend, our team responds within one business
              hour.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Call us", value: "+91 80 4000 1996" },
                { icon: Mail, label: "Email", value: "hello@grihaconstructions.com" },
                { icon: MapPin, label: "Headquarters", value: "12 Brigade Road, Bengaluru, IN" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-lg">
                    <c.icon className="h-5 w-5 text-charcoal" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-charcoal/50">{c.label}</p>
                    <p className="text-base font-medium text-charcoal mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {["Mon–Sat", "08:00–20:00", "24/7 Fleet"].map((s, i) => (
                <div key={i} className="rounded-2xl border border-gold/15 bg-white/50 p-4 text-center">
                  <p className="font-display text-lg text-gradient-gold">{s.split(" ")[0]}</p>
                  <p className="text-xs text-charcoal/60 mt-1">{s.split(" ").slice(1).join(" ") || "Office"}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
              (e.target as HTMLFormElement).reset();
            }}
            className="relative rounded-3xl border border-gold/20 bg-white/70 backdrop-blur p-6 sm:p-10 shadow-2xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-gold/20 via-transparent to-gold-2/20 rounded-3xl blur-xl -z-10" />

            <h3 className="font-display text-2xl sm:text-3xl">Get in touch</h3>
            <p className="text-sm text-charcoal/60 mt-2">We reply within one business hour.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" placeholder="John Doe" />
              <Field label="Company" name="company" placeholder="Acme Ltd." />
              <Field label="Email" name="email" type="email" placeholder="you@company.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 ..." />
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                Service of interest
              </label>
              <select
                name="service"
                className="w-full rounded-xl border border-gold/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
              >
                <option>Government project</option>
                <option>Private project</option>
                <option>Earth mover leasing</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
                Tell us about your project
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Scope, timeline, location..."
                className="w-full rounded-xl border border-gold/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="shine mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-medium text-ivory hover:bg-graphite transition shadow-xl shadow-charcoal/20"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send Inquiry <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-charcoal/60 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-gold/20 bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition"
      />
    </div>
  );
}
