"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function DiyaDev() {
  return (
    <section
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#f7f8ff" }}
    >
      {/* Top brand stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #f5a623 0%, #1a4b8c 100%)" }}
      />
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#f5a623" }} />
      <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#1a4b8c" }} />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Brand header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-1 mb-5">
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: "#f5a623" }}>
              Diya
            </span>
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: "#1a4b8c" }}>
              Dev
            </span>
            <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-700 ml-2">
              Developers
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-12" style={{ backgroundColor: "#f5a623" }} />
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
              Real Estate Division of Skandha Constructions
            </span>
            <span className="h-px w-12" style={{ backgroundColor: "#1a4b8c" }} />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl text-gray-800">
            Your Dream Home, Built to Last
          </h2>
          <p className="mt-3 text-base text-gray-500 max-w-xl mx-auto leading-relaxed">
            Trusted by families and investors across the region — delivering quality residences
            and premium commercial spaces across Tamil Nadu and beyond.
          </p>
        </motion.div>

        {/* What we offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-5 mb-12"
        >
          <div
            className="rounded-2xl p-7 border-2"
            style={{ backgroundColor: "#fff8ee", borderColor: "#f5a623" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏠</span>
              <h3 className="font-display text-xl font-bold" style={{ color: "#f5a623" }}>
                Residential Properties
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              2BHK, 3BHK apartments, independent villas, and gated community projects
              designed for comfortable, modern living.
            </p>
          </div>

          <div
            className="rounded-2xl p-7 border-2"
            style={{ backgroundColor: "#eef3ff", borderColor: "#1a4b8c" }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🏢</span>
              <h3 className="font-display text-xl font-bold" style={{ color: "#1a4b8c" }}>
                Commercial Properties
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Office spaces, retail shops, IT parks, and industrial warehouses
              built for businesses to thrive with superior construction quality.
            </p>
          </div>
        </motion.div>

        {/* Enquiry CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-3xl p-8 sm:p-12 text-center border"
          style={{ backgroundColor: "#fff", borderColor: "#e5e7eb" }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-3 font-medium">
            Interested in a property?
          </p>
          <h3 className="font-display text-2xl sm:text-3xl text-gray-800 mb-3">
            Get in touch with DiyaDev
          </h3>
          <p className="text-sm text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
            Tell us your requirements and our team will reach out with available options and pricing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919087353637"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 shadow-lg"
              style={{ backgroundColor: "#f5a623" }}
            >
              Call +91 90873 53637
            </a>
            <a
              href="https://wa.me/919087353637"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-white hover:opacity-90 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 shadow-lg"
              style={{ backgroundColor: "#1a4b8c" }}
            >
              Send an Enquiry on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
