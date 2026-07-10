import { useEffect, useState } from "react";
import { Menu, X, Github, Linkedin, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoMn from "@/assets/logo-mn.webp";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-2 backdrop-blur-lg bg-background/80 border-b border-border" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoMn}
              alt="Makenson Noel logo"
              width={40}
              height={40}
              className="w-9 h-9 object-contain"
            />
            <span className="hidden sm:inline font-display font-semibold tracking-tight text-[15px]">
              Makenson Noel
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                aria-current={active === l.href ? "true" : undefined}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  active === l.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/makensonn"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/makenson-noel/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="/resume"
              className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:border-border-active hover:bg-surface-elevated transition-colors"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden mt-3 rounded-xl border border-border bg-surface p-3 flex flex-col"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-base rounded-md text-foreground/90 hover:bg-surface-elevated"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/resume"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 text-base font-medium px-4 py-3 rounded-lg text-white bg-[image:var(--gradient-brand)]"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-6 max-w-[1200px] flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoMn} alt="" aria-hidden width={32} height={32} className="w-8 h-8 object-contain" />
          <div>
            <p className="text-sm font-semibold">Makenson Noel</p>
            <p className="text-xs text-muted-foreground">Software Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="https://github.com/makensonn" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/makenson-noel/" target="_blank" rel="noreferrer" className="hover:text-foreground inline-flex items-center gap-2">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href="mailto:maknoel.dev@gmail.com" className="hover:text-foreground">Email</a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Makenson Noel. All rights reserved.</p>
      </div>
    </footer>
  );
}
