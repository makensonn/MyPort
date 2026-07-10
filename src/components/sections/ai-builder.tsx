import { motion } from "framer-motion";
import { Compass, LayoutGrid, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Understand the Problem",
    desc: "Translate business needs into clear technical requirements and user flows.",
  },
  {
    icon: LayoutGrid,
    title: "Design the System",
    desc: "Plan the interface, data model, integrations, architecture, and edge cases.",
  },
  {
    icon: Wrench,
    title: "Build and Validate",
    desc: "Develop reusable components, APIs, automation workflows, and tests.",
  },
  {
    icon: Rocket,
    title: "Ship and Improve",
    desc: "Deploy, monitor, collect feedback, and refine the product.",
  },
];

export function AIBuilder() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-12 md:mb-14 max-w-3xl">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">How I Work</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] mt-3">
            A modern development process,{" "}
            <span className="text-gradient-brand">accelerated by AI.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="surface-card p-6 hover:[border-color:var(--color-border-active)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center border border-border"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(34,211,238,0.12))",
                  }}
                >
                  <s.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed">
          I use tools such as ChatGPT, Claude, GitHub Copilot, Codex, and Lovable to accelerate
          research, prototyping, debugging, and implementation — while remaining responsible for
          architecture, validation, and final quality.
        </p>
      </div>
    </section>
  );
}
