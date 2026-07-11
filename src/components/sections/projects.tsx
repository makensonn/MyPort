import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import bridgeOpsImg from "@/assets/project-bridgeops.webp";
import gasmeImg from "@/assets/project-gasme.webp";
import shopwaveImg from "@/assets/project-shopwave.webp";
import aslImg from "@/assets/project-asl.webp";

type Project = {
  title: string;
  tagline: string;
  description: string;
  role: string;
  tech: string[];
  image: string;
  links?: { demo?: string; caseStudy?: string; github?: string };
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "BridgeOps",
    tagline: "Unified legal operations command center.",
    description:
      "A single dashboard connecting intake, leads, cases, phone activity, workflows, analytics, and third-party legal systems into one operations command center.",
    role: "Full-stack development · Product & UI",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Webhooks"],
    image: bridgeOpsImg,
    links: { demo: "https://bridge-ops.vercel.app/", github: "https://github.com/makensonn/BridgeOps" },
    featured: true,
  },
  {
    title: "ASL Hand Tracker",
    tagline: "Browser-based ASL gesture recognition.",
    description:
      "Live camera input, 21-point hand landmark tracking, confidence feedback, practice sessions, and progress history — all in the browser.",
    role: "Full-stack + on-device ML",
    tech: ["React", "TypeScript", "TensorFlow.js", "Node.js"],
    image: aslImg,
    links: { demo: "https://sign-speak-green.vercel.app/", github: "https://github.com/makensonn/SignSpeak" },
  },
  {
    title: "ShopWave",
    tagline: "Modern responsive e-commerce experience.",
    description:
      "Product discovery, mobile-first shopping, cart, and streamlined checkout flows built for performance and conversion.",
    role: "Frontend development",
    tech: ["Next.js", "React", "TypeScript", "Node.js"],
    image: shopwaveImg,
    links: { demo: "https://shop-wave-beta.vercel.app/", github: "https://github.com/makensonn/ShopWave" },
  },
  {
    title: "GasMe",
    tagline: "Fuel-price & route planning app.",
    description:
      "Helps drivers compare nearby stations, plan optimized routes, and estimate real savings before they leave the driveway.",
    role: "Full-stack development",
    tech: ["React", "TypeScript", "Node.js", "Maps API"],
    image: gasmeImg,
    links: { demo: "https://gasme-app.vercel.app/", github: "https://github.com/makensonn" },
  },
];

function ProjectCard({ p, i, large = false }: { p: Project; i: number; large?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: Math.min(i * 0.05, 0.2), duration: 0.5 }}
      className="group surface-card overflow-hidden hover:-translate-y-1 hover:[border-color:var(--color-border-active)] flex flex-col"
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={p.image}
          alt={`${p.title} project preview`}
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(2,6,23,0.5) 100%)",
          }}
        />
        {p.featured && (
          <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-md bg-accent text-accent-foreground">
            Featured
          </span>
        )}
        <ArrowUpRight className="absolute top-4 right-4 w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="p-6 md:p-7 flex flex-col gap-4 flex-1">
        <div>
          <h3 className={`font-bold ${large ? "text-2xl md:text-3xl" : "text-xl"} tracking-tight`}>
            {p.title}
          </h3>
          <p className="text-sm text-accent mt-1">{p.tagline}</p>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
        <p className="text-xs text-muted-foreground">
          <span className="text-foreground/80 font-medium">Role · </span>
          {p.role}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        {p.links && (
          <div className="flex items-center gap-3 pt-3 mt-auto border-t border-border">
            {p.links.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-soft transition"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
            {p.links.caseStudy && (
              <a
                href={p.links.caseStudy}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition"
              >
                Case Study
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12 md:mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Selected Work</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] mt-3">
            Products and systems <span className="text-gradient-brand">I've built.</span>
          </h2>
        </div>

        <div className="grid gap-6">
          <ProjectCard p={featured} i={0} large />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <ProjectCard key={p.title} p={p} i={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
