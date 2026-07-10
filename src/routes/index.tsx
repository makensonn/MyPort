import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Nav, Footer } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Toaster } from "@/components/ui/sonner";

const About = lazy(() => import("@/components/sections/about").then((m) => ({ default: m.About })));
const Projects = lazy(() => import("@/components/sections/projects").then((m) => ({ default: m.Projects })));
const AIBuilder = lazy(() => import("@/components/sections/ai-builder").then((m) => ({ default: m.AIBuilder })));
const Skills = lazy(() => import("@/components/sections/skills").then((m) => ({ default: m.Skills })));
const Experience = lazy(() => import("@/components/sections/experience").then((m) => ({ default: m.Experience })));
const Contact = lazy(() => import("@/components/sections/contact").then((m) => ({ default: m.Contact })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Makenson Noel — Full-Stack Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Makenson Noel — Full-Stack Software Developer building responsive applications, API integrations, automation workflows, and AI-powered tools.",
      },
      { property: "og:title", content: "Makenson Noel — Full-Stack Software Developer" },
      {
        property: "og:description",
        content:
          "Responsive applications, API integrations, automation workflows, and AI-powered tools that solve real business problems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative">
      <Nav />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-32" />}>
          <About />
          <Projects />
          <AIBuilder />
          <Skills />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
