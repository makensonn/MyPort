import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot for basic spam protection
  company: z.string().max(0).optional(),
});

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
      company: fd.get("company") ?? "",
    });
    if (!parsed.success) {
      const fieldErrors: typeof errors = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as "name" | "email" | "message";
        if (key && !fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    setStatus("sending");
    const { name, email, message } = parsed.data;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    setTimeout(() => {
      window.location.href = `mailto:maknoel.dev@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      toast.success("Opening your email client…");
    }, 400);
  };

  return (
    <>
      {/* Coastal-night CTA banner */}
      <section className="relative py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div
            className="relative rounded-2xl overflow-hidden border border-border p-10 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, #071426 0%, #0B172A 45%, #102038 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 40% 60% at 15% 40%, rgba(37,99,235,0.35), transparent 70%), radial-gradient(ellipse 40% 60% at 85% 60%, rgba(34,211,238,0.25), transparent 70%)",
              }}
            />
            <div className="relative max-w-3xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1]">
                I don't just write code.
                <br />
                I build systems that{" "}
                <span className="text-gradient-brand">create freedom.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-2xl">
                From internal platforms and workflow automation to customer-facing applications,
                I focus on solutions that reduce friction and make work easier.
              </p>
              <div className="mt-7">
                <Button asChild size="lg" variant="hero">
                  <a href="#contact-form">
                    Start a Conversation <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                Let's build something useful
              </p>
              <h2 className="text-3xl md:text-5xl font-bold leading-[1.1]">
                Have a project or opportunity{" "}
                <span className="text-gradient-brand">in mind?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                I'm open to software engineering, full-stack development, automation, integration,
                and technical product opportunities.
              </p>

              <form
                id="contact-form"
                onSubmit={onSubmit}
                noValidate
                className="surface-card p-6 md:p-8 space-y-4 mt-4 max-w-xl"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      className="mt-1.5 bg-surface-elevated border-border h-11"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs text-destructive mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      className="mt-1.5 bg-surface-elevated border-border h-11"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-xs text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or opportunity…"
                    className="mt-1.5 bg-surface-elevated border-border resize-none"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-xs text-destructive mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" variant="hero" size="lg" disabled={status === "sending"}>
                    <Send className="w-4 h-4" />
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:maknoel.dev@gmail.com">
                      <Mail className="w-4 h-4" /> Email directly
                    </a>
                  </Button>
                  {status === "success" && (
                    <span className="text-sm text-accent">Your email client should open shortly.</span>
                  )}
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="lg:col-span-5 space-y-4 lg:pt-12"
            >
              <div className="surface-card p-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Email
                </p>
                <a
                  href="mailto:maknoel.dev@gmail.com"
                  className="text-base font-medium hover:text-accent transition-colors"
                >
                  maknoel.dev@gmail.com
                </a>
              </div>
              <div className="surface-card p-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Location
                </p>
                <p className="text-base font-medium inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" /> Durham, North Carolina
                </p>
              </div>
              <div className="surface-card p-6">
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Elsewhere
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/makensonn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/makenson-noel/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:maknoel.dev@gmail.com"
                    aria-label="Email"
                    className="w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
