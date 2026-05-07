"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type Category = "All" | "Bedrooms" | "Kitchens" | "Cupboards" | "Prayer Rooms";

const CATEGORIES: Category[] = ["All", "Bedrooms", "Kitchens", "Cupboards", "Prayer Rooms"];

type GalleryItem = { src: string; alt: string; category: Exclude<Category, "All"> };

const GALLERY_ITEMS: GalleryItem[] = [
  // Bedrooms
  { src: "/images/bedroom/bedroom1.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom2.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom3.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom4.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom5.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom6.jpeg", alt: "Bedroom design", category: "Bedrooms" },
  { src: "/images/bedroom/bedroom7.jpeg", alt: "Bedroom design", category: "Bedrooms" },

  // Kitchens
  { src: "/images/kitchen_interiors/kitchen1.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen2.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen3.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen4.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen5.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen6.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen7.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen8.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen9.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen10.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen12.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen13.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen14.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen15.jpeg", alt: "Kitchen interior", category: "Kitchens" },
  { src: "/images/kitchen_interiors/kitchen16.jpeg", alt: "Kitchen interior", category: "Kitchens" },

  // Cupboards
  { src: "/images/cupboards/bedroom_cup1.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup2.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup3.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup4.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup5.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup6.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup7.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup8.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup9.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup10.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup11.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/bedroom_cup12.jpeg", alt: "Bedroom cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup1.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup2.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup3.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup4.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup5.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup6.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup7.jpeg", alt: "Living room cupboard", category: "Cupboards" },
  { src: "/images/cupboards/livingroom_cup8.jpeg", alt: "Living room cupboard", category: "Cupboards" },

  // Prayer Rooms
  { src: "/images/prayer_rooms/prayer4.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer5.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer6.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer7.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer8.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer9.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer10.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer11.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer12.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
  { src: "/images/prayer_rooms/prayer13.jpeg", alt: "Prayer room", category: "Prayer Rooms" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = useCallback((index: number) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-pearl/40 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold/8 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
              <span className="h-px w-8 bg-gold" /> Our Work Gallery
            </span>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-tight">
              Crafted with <span className="text-gradient-gold italic">precision.</span>
            </h2>
            <p className="mt-4 text-charcoal/65 max-w-xl leading-relaxed">
              Every space we design and build reflects our commitment to quality — from
              fitted kitchens and bespoke cupboards to serene bedrooms and dedicated prayer rooms.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2 self-start lg:self-end">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeCategory === cat
                    ? "bg-charcoal text-ivory border-charcoal shadow-md"
                    : "bg-white/60 text-charcoal/70 border-gold/20 hover:text-charcoal hover:border-gold/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl border border-gold/10 cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <div className="relative w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-ivory opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg" />
                  </div>
                  {/* Category badge */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="rounded-full bg-charcoal/80 backdrop-blur text-ivory text-[10px] uppercase tracking-widest px-2.5 py-1">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={900}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                sizes="100vw"
              />

              {/* Category + count */}
              <div className="mt-4 flex items-center justify-between text-ivory/70 text-sm px-1">
                <span className="uppercase tracking-widest text-xs text-gold-2">
                  {filtered[lightboxIndex].category}
                </span>
                <span>{lightboxIndex + 1} / {filtered.length}</span>
              </div>

              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev */}
              <button
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 inline-flex h-12 w-12 items-center justify-center rounded-full bg-ivory/10 hover:bg-ivory/20 text-ivory transition"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
