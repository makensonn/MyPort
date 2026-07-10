import { motion } from "framer-motion";
import { Code2, Server, Database, Cloud } from "lucide-react";

const groups = [
  {
    label: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Vite",
      "HTML5",
      "CSS3",
      "SASS",
      "Responsive Design",
    ],
  },
  {
    label: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "REST APIs",
      "Webhooks",
      "Java",
      "Authentication",
      "JSON",
      "Event-driven workflows",
    ],
  },
  {
    label: "Data",
    icon: Database,
    skills: [
      "PostgreSQL",
      "SQL",
      "NoSQL",
      "Data validation",
      "Data normalization",
      "ETL workflows",
    ],
  },
  {
    label: "Cloud, Automation & Tools",
    icon: Cloud,
    skills: [
      "Vercel",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Zapier",
      "Power Automate",
      "OpenAI API",
      "Postman",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-background-secondary/40">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12 md:mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">Tech Stack</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] mt-3">
            Technologies <span className="text-gradient-brand">I work with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="surface-card p-6 hover:[border-color:var(--color-border-active)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg border border-border flex items-center justify-center bg-surface-elevated">
                  <g.icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold tracking-tight">{g.label}</h3>
              </div>
              <ul className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[12px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-foreground/85"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
