import { motion } from "framer-motion";
import { Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import makPortrait from "@/assets/mak-portrait.webp";

const focus = [
  "Full-stack development",
  "API design & integrations",
  "Workflow automation",
  "AI-assisted tooling",
  "Dashboards & internal platforms",
  "Product-minded UI",
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">About Me</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1]">
              A developer who bridges code, design,{" "}
              <span className="text-gradient-brand">automation, and AI.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I build modern applications and internal tools with a focus on usability,
              maintainability, and measurable business value. My background includes full-stack
              development, API integrations, workflow automation, dashboards, technical product
              work, and AI-assisted development.
            </p>

            <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 pt-2 max-w-lg">
              {focus.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button asChild size="lg" variant="hero">
                <a href="/resume">
                  <Download className="mr-1 h-4 w-4" /> View Resume
                </a>
              </Button>
              <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" /> Durham, North Carolina
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-20px_rgba(2,6,23,0.9)]"
              style={{ boxShadow: "0 20px 60px -25px rgba(37,99,235,0.35)" }}
            >
              <img
                src={makPortrait}
                alt="Portrait of Makenson Noel"
                width={1024}
                height={1280}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, rgba(2,6,23,0.85) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-sm text-white/90 font-medium">Makenson Noel</p>
                <p className="text-xs text-white/60">Software Developer · Durham, NC</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
