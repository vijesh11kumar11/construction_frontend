import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Users,
  Ruler,
  Wallet,
  Clock,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { PROJECTS } from "@/lib/data";
import StoryReveal from "@/components/StoryReveal";

type Params = { slug: string };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — Griha Constructions`,
    description: project.tagline,
    openGraph: { images: [project.hero] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  const facts = [
    { icon: Users, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration },
    { icon: Ruler, label: "Scale", value: project.scale },
    { icon: Wallet, label: "Project Value", value: project.value },
  ];

  return (
    <article>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={project.hero}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-ivory">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-ivory/70 hover:text-ivory transition mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to portfolio
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-ivory/10 backdrop-blur border border-ivory/20 px-4 py-1.5 text-xs uppercase tracking-widest">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    project.category === "Government" ? "bg-gold-deep" : "bg-pearl"
                  }`}
                />
                {project.category}
              </span>
              <span className="text-xs uppercase tracking-widest text-ivory/50">
                {project.year} · {project.location}
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-ivory/75 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* FACT SHEET */}
      <section className="relative -mt-20 z-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-ivory border border-gold/15 shadow-2xl p-6 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/50 mb-2">
                    <f.icon className="h-3.5 w-3.5 text-gold-deep" />
                    {f.label}
                  </div>
                  <p className="font-display text-base sm:text-lg text-charcoal leading-snug">
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
                <span className="h-px w-8 bg-gold" /> The Story
              </span>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
                Behind the <span className="text-gradient-gold italic">build.</span>
              </h2>
              <p className="mt-6 text-charcoal/65 leading-relaxed">
                Every project carries a brief — but the ones we’re proudest of
                are remembered for the obstacles we engineered around.
              </p>
            </aside>

            <div className="lg:col-span-8 space-y-16">
              <StoryReveal
                step="01"
                title="The Challenge"
                body={project.story.challenge}
              />
              <StoryReveal
                step="02"
                title="Our Approach"
                body={project.story.approach}
              />
              <StoryReveal
                step="03"
                title="The Impact"
                body={project.story.impact}
              />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS BAND */}
      <section className="py-20 bg-charcoal text-ivory relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <p className="font-display text-5xl sm:text-6xl text-gradient-cream">
                  {m.value}
                </p>
                <p className="mt-3 text-xs sm:text-sm uppercase tracking-widest text-ivory/60">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS + GALLERY */}
      <section className="py-24 sm:py-32 bg-pearl/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-deep">
                <span className="h-px w-8 bg-gold" /> Highlights
              </span>
              <h2 className="font-display mt-4 text-4xl sm:text-5xl leading-tight">
                What made this <br />
                <span className="text-gradient-gold italic">unforgettable.</span>
              </h2>
              <ul className="mt-10 space-y-5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-4 group">
                    <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-gradient-gold shadow">
                      <CheckCircle2 className="h-4 w-4 text-charcoal" />
                    </span>
                    <span className="text-base sm:text-lg text-charcoal/80 leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-2xl border border-gold/15 shadow-md ${
                    i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} gallery ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-gold mx-auto mb-6 opacity-60" />
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-charcoal">
            “{project.quote.text}”
          </p>
          <p className="mt-8 font-medium text-charcoal">{project.quote.author}</p>
          <p className="text-sm text-charcoal/60">{project.quote.role}</p>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/projects/${next.slug}`}
            className="group relative block overflow-hidden rounded-[2.5rem] border border-gold/20 shadow-2xl"
          >
            <div className="relative h-[60vh] min-h-[420px]">
              <Image
                src={next.hero}
                alt={next.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
              <div className="absolute inset-0 flex items-end p-8 sm:p-14">
                <div className="text-ivory max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-2 mb-3">
                    Next Project
                  </p>
                  <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl">
                    {next.title}
                  </h3>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                    Read the story
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
