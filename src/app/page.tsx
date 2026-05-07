import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Equipment from "@/components/Equipment";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <Equipment />
      <Projects />
      <Gallery />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}

