import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-coastal.webp";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-24"
    >
      {/* Coastal night backdrop */}
      <motion.img
        src={heroImage}
        alt=""
        aria-hidden
        style={{ y }}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-70"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
      />
      {/* Solid overlay for legibility */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 45%, rgba(2,6,23,0.9) 100%)",
        }}
      />
      {/* Subtle brand glow */}
      <div
        aria-hidden
        className="absolute -z-10 inset-x-0 top-1/3 h-[420px] blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(37,99,235,0.35), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 40%, rgba(34,211,238,0.20), transparent 70%)",
        }}
      />

      <motion.div style={{ opacity }} className="container mx-auto px-6 max-w-[1200px] relative">
        <div className="max-w-3xl space-y-7">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] uppercase text-accent"
          >
            Full-Stack Software Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            I build digital products
            <br className="hidden sm:block" /> that connect{" "}
            <span className="text-gradient-brand">systems,</span>
            <br className="hidden sm:block" /> people, and ideas.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I design and develop responsive applications, internal platforms, API integrations,
            automation workflows, and AI-powered tools that solve real business problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Button asChild size="lg" variant="hero">
              <a href="#projects">
                View My Work <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="/resume">
                <Download className="mr-1 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="inline-flex items-center gap-2 pt-4 text-xs text-muted-foreground"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
            </span>
            Open to Software Engineering, Full-Stack, Automation, and Integration roles
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
