import { motion } from "framer-motion";

type Job = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string[];
};

const jobs: Job[] = [
  {
    title: "Software Developer",
    company: "The Driscoll Firm, PC",
    location: "Remote",
    period: "Current",
    bullets: [
      "Built automation systems and integrations across legal intake, CRM, and case management platforms.",
      "Developed internal dashboards with reporting, analytics, and PDF export.",
      "Shipped AI-assisted onboarding and knowledge tools that streamlined day-to-day operations.",
    ],
    tech: ["React", "TypeScript", "Node.js", "REST APIs", "Webhooks", "PostgreSQL"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12 md:mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] mt-3">
            Where I've <span className="text-gradient-brand">delivered.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {jobs.map((j, i) => (
            <motion.article
              key={j.company + j.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="surface-card p-6 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight">{j.title}</h3>
                  <p className="text-accent font-medium mt-0.5">{j.company}</p>
                  <p className="text-sm text-muted-foreground">{j.location}</p>
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full border border-border-active text-accent">
                  {j.period}
                </span>
              </div>
              <ul className="space-y-2 mb-5">
                {j.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-foreground/85">
                    <span className="text-accent shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {j.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
