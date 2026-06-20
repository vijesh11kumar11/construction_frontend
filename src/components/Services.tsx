"use client";

import { motion } from "framer-motion";

// ─── SVG Line-Art Icons ───────────────────────────────────────────────────────

const EarthMovingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M6 38h36" /><path d="M10 38v-7l5-5h8l5 5v7" />
    <path d="M28 26l6 2-1 4-6-2z" /><path d="M34 28l5 1" />
    <path d="M16 20h8l2-5h-6z" /><path d="M4 42h40" strokeDasharray="3 2" />
  </svg>
);
const CivilWorksIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M8 42h32V20L24 8 8 20v22z" />
    <rect x="14" y="28" width="6" height="14" /><rect x="28" y="28" width="6" height="14" />
    <rect x="14" y="21" width="6" height="5" /><rect x="28" y="21" width="6" height="5" />
  </svg>
);
const StructuralIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M8 42h32" /><path d="M12 42V16" /><path d="M36 42V16" /><path d="M12 16h24" />
    <path d="M19 16V8" /><path d="M29 16V8" /><path d="M19 8h10" />
    <path d="M12 24h24" /><path d="M12 32h24" />
  </svg>
);
const SiteDevIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M4 34h40" /><path d="M4 34c4-8 8-4 12-10s8 2 12-4 8 6 12 0" />
    <path d="M10 42h6M20 42h6M30 42h6" />
    <circle cx="36" cy="18" r="4" /><path d="M36 13v-3M36 23v3M31 18h-3M41 18h3" />
  </svg>
);
const FoundationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M6 42h36" /><path d="M14 42V26M24 42V20M34 42V26" />
    <path d="M9 26h30" /><path d="M14 20h20" /><path d="M18 20l6-8 6 8" />
    <rect x="8" y="38" width="5" height="4" /><rect x="21" y="38" width="5" height="4" /><rect x="34" y="38" width="5" height="4" />
  </svg>
);
const ConcreteIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <ellipse cx="24" cy="14" rx="12" ry="5" />
    <path d="M12 14v12l4 8h16l4-8V14" />
    <path d="M12 20h24" /><path d="M12 26h24" /><path d="M24 34v6" />
    <path d="M40 10l4-6M44 8l-4 4" />
  </svg>
);
const ElecPlumbIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M16 6l-6 14h8l-6 14" /><path d="M32 8v8" /><path d="M28 12h8" />
    <path d="M32 24c0 4 4 8 4 8s4-4 4-8-4-8-4-8-4 4-4 8z" /><path d="M36 32v8" /><path d="M6 38h8" />
  </svg>
);
const ElevationIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M4 42h40" /><rect x="8" y="18" width="32" height="24" />
    <path d="M8 18L24 8l16 10" /><rect x="16" y="30" width="6" height="12" /><rect x="26" y="23" width="8" height="8" />
    <path d="M4 12v30" /><path d="M4 14l2 2M4 20l2 2M4 26l2 2" />
  </svg>
);
const FinishingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M14 36l-6 6 4 2 6-6" /><path d="M8 42l-2-4" />
    <path d="M14 36l16-16-4-4L10 32" /><path d="M26 24l4 4" />
    <path d="M34 12a4 4 0 014 4l-8 8-4-4 8-8z" />
    <path d="M28 40h14M28 44h10" />
  </svg>
);
const GlazingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <rect x="6" y="8" width="36" height="32" rx="2" />
    <path d="M6 24h36" /><path d="M24 8v32" />
    <path d="M9 12l4 4M39 36l-4-4M39 12l-4 4M9 36l4-4" />
  </svg>
);
const InteriorIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M6 42V10h36v32" /><path d="M6 10l18-6 18 6" />
    <rect x="10" y="28" width="12" height="14" /><rect x="26" y="22" width="14" height="10" rx="1" />
    <path d="M26 32h14" /><path d="M14 28v-4h4v4" />
  </svg>
);
const LandscapingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M24 38V18" /><path d="M24 18c0-6-8-12-8-12s2 8 8 12z" />
    <path d="M24 22c0-5 8-10 8-10s-2 8-8 10z" /><path d="M24 28c-5-3-9-2-9-2s2 6 9 6z" />
    <path d="M8 42h32" /><path d="M6 46h36" />
  </svg>
);
const DocumentIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M10 6h20l8 8v28H10z" /><path d="M30 6v8h8" />
    <path d="M16 22h16M16 28h16M16 34h10" />
    <circle cx="36" cy="36" r="6" /><path d="M33 36l2 2 4-4" />
  </svg>
);
const TaxIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <rect x="10" y="8" width="28" height="32" rx="2" /><path d="M10 16h28" />
    <path d="M16 22h16M16 28h16M16 34h8" />
    <path d="M34 8v4M30 8v4M38 8v4" /><path d="M34 36v4" />
  </svg>
);
const SurveyingIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <path d="M6 44l4-4 8 4 8-8 8 4 8-8" /><path d="M6 44V12" />
    <path d="M6 14l3 1M6 20l3 1M6 26l3 1M6 32l3 1M6 38l3 1" />
    <path d="M12 44h2M18 44h2M24 44h2M30 44h2M36 44h2" />
    <rect x="30" y="8" width="14" height="18" rx="1" />
    <path d="M34 13h6M34 17h6M34 21h4" />
  </svg>
);
const ProjectMgmtIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12">
    <circle cx="24" cy="24" r="8" />
    <path d="M24 10V6M24 42v-4M10 24H6M42 24h-4" />
    <path d="M14.9 14.9l-2.8-2.8M35.9 35.9l-2.8-2.8M14.9 33.1l-2.8 2.8M35.9 12.1l-2.8 2.8" />
    <circle cx="24" cy="24" r="3" />
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICE_GROUPS = [
  {
    title: "Core Construction Services",
    services: [
      { name: "Earth Moving & Excavation", Icon: EarthMovingIcon },
      { name: "Civil Works", Icon: CivilWorksIcon },
      { name: "Structural Design", Icon: StructuralIcon },
      { name: "Site Development & Preparation", Icon: SiteDevIcon },
      { name: "Foundation Works", Icon: FoundationIcon },
      { name: "Concrete & RCC Works", Icon: ConcreteIcon },
    ],
  },
  {
    title: "Finishing & Allied Services",
    services: [
      { name: "Electrical & Plumbing Works", Icon: ElecPlumbIcon },
      { name: "Elevation Design", Icon: ElevationIcon },
      { name: "All Finishing Works", Icon: FinishingIcon },
      { name: "Structural Glazing", Icon: GlazingIcon },
      { name: "Interior Works", Icon: InteriorIcon },
      { name: "Landscaping", Icon: LandscapingIcon },
    ],
  },
  {
    title: "Support Services",
    services: [
      { name: "Approval & Documentation Works", Icon: DocumentIcon },
      { name: "Tax Assessment Works", Icon: TaxIcon },
      { name: "Quantity Surveying & Estimation", Icon: SurveyingIcon },
      { name: "Project Engineering & Management", Icon: ProjectMgmtIcon },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#f2f6ed" }}
    >
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(158,196,104,0.25)" }} />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl" style={{ backgroundColor: "rgba(189,212,165,0.3)" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] font-semibold"
            style={{ color: "#4a7c2a" }}
          >
            <span className="h-px w-8" style={{ backgroundColor: "#4a7c2a" }} />
            Our Services
            <span className="h-px w-8" style={{ backgroundColor: "#4a7c2a" }} />
          </span>
          <h2
            className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight"
            style={{ color: "#1c3c0e" }}
          >
            Everything you need,{" "}
            <span className="italic" style={{ color: "#4a7c2a" }}>end to end.</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto leading-relaxed text-sm sm:text-base" style={{ color: "#607848" }}>
            From site clearance to final finishing — Skandha Constructions is your single
            accountable partner for all construction needs.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-14">
          {SERVICE_GROUPS.map((group) => (
            <div key={group.title}>
              {/* Group heading */}
              <div className="flex items-center gap-4 mb-8">
                <span className="h-px flex-1" style={{ backgroundColor: "#bdd4a5" }} />
                <h3
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] whitespace-nowrap px-2"
                  style={{ color: "#2d5a16" }}
                >
                  {group.title}
                </h3>
                <span className="h-px flex-1" style={{ backgroundColor: "#bdd4a5" }} />
              </div>

              {/* Service cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                {group.services.map((service, si) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: si * 0.06 }}
                    className="group flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-green-100 hover:border-[#4a7c2a] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-default"
                  >
                    <div
                      className="transition-transform duration-300 ease-out group-hover:scale-110"
                      style={{ color: "#2d5a16" }}
                    >
                      <service.Icon />
                    </div>
                    <p
                      className="mt-4 text-xs sm:text-sm font-semibold leading-snug"
                      style={{ color: "#1c3c0e" }}
                    >
                      {service.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
