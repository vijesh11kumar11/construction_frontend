"use client";

import { motion } from "framer-motion";

export default function StoryReveal({
  step,
  title,
  body,
}: {
  step: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="relative pl-8 sm:pl-12 border-l border-gold/25"
    >
      <span className="absolute -left-4 top-0 inline-flex h-8 w-12 items-center justify-center rounded-full bg-ivory border border-gold/30 font-display text-sm text-gradient-gold shadow">
        {step}
      </span>
      <h3 className="font-display text-3xl sm:text-4xl text-charcoal">
        {title}
      </h3>
      <p className="mt-5 text-base sm:text-lg leading-relaxed text-charcoal/75 first-letter:font-display first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.9] first-letter:text-gradient-gold">
        {body}
      </p>
    </motion.div>
  );
}
