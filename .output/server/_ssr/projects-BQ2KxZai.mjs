import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as ArrowUpRight, f as Github, m as ExternalLink } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BQ2KxZai.js
var import_jsx_runtime = require_jsx_runtime();
var projects = [
	{
		title: "BridgeOps",
		tagline: "Unified legal operations command center.",
		description: "A single dashboard connecting intake, leads, cases, phone activity, workflows, analytics, and third-party legal systems into one operations command center.",
		role: "Full-stack development · Product & UI",
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"REST APIs",
			"Webhooks"
		],
		image: "/assets/project-bridgeops-CbVmuYDq.webp",
		links: {
			demo: "https://bridge-ops.vercel.app/",
			github: "https://github.com/makensonn/BridgeOps"
		},
		featured: true
	},
	{
		title: "ASL Hand Tracker",
		tagline: "Browser-based ASL gesture recognition.",
		description: "Live camera input, 21-point hand landmark tracking, confidence feedback, practice sessions, and progress history — all in the browser.",
		role: "Full-stack + on-device ML",
		tech: [
			"React",
			"TypeScript",
			"TensorFlow.js",
			"Node.js"
		],
		image: "/assets/project-asl-BqaUhlW-.webp",
		links: {
			demo: "https://sign-speak-green.vercel.app/",
			github: "https://github.com/makensonn/SignSpeak"
		}
	},
	{
		title: "GasMe",
		tagline: "Fuel-price & route planning app.",
		description: "Helps drivers compare nearby stations, plan optimized routes, and estimate real savings before they leave the driveway.",
		role: "Full-stack development",
		tech: [
			"React",
			"TypeScript",
			"Node.js",
			"Maps API"
		],
		image: "/assets/project-gasme-DjtNhL3e.webp",
		links: {
			demo: "https://gasme-app.vercel.app/",
			github: "https://github.com/makensonn"
		}
	},
	{
		title: "ShopWave",
		tagline: "Modern responsive e-commerce experience.",
		description: "Product discovery, mobile-first shopping, cart, and streamlined checkout flows built for performance and conversion.",
		role: "Frontend development",
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Node.js"
		],
		image: "/assets/project-shopwave-QgL7nC8n.webp",
		links: { github: "https://github.com/makensonn" }
	}
];
function ProjectCard({ p, i, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
		initial: {
			opacity: 0,
			y: 20
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			delay: Math.min(i * .05, .2),
			duration: .5
		},
		className: "group surface-card overflow-hidden hover:-translate-y-1 hover:[border-color:var(--color-border-active)] flex flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: `${p.title} project preview`,
					loading: "lazy",
					width: 1600,
					height: 1e3,
					className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, transparent 40%, rgba(2,6,23,0.5) 100%)" }
				}),
				p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-4 left-4 text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-md bg-accent text-accent-foreground",
					children: "Featured"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "absolute top-4 right-4 w-5 h-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-6 md:p-7 flex flex-col gap-4 flex-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: `font-bold ${large ? "text-2xl md:text-3xl" : "text-xl"} tracking-tight`,
					children: p.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-accent mt-1",
					children: p.tagline
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground leading-relaxed",
					children: p.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground/80 font-medium",
						children: "Role · "
					}), p.role]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-1.5",
					children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground",
						children: t
					}, t))
				}),
				p.links && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 pt-3 mt-auto border-t border-border",
					children: [
						p.links.github && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.links.github,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-3.5 h-3.5" }), " GitHub"]
						}),
						p.links.demo && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: p.links.demo,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-soft transition",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "w-3.5 h-3.5" }), " Live Demo"]
						}),
						p.links.caseStudy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.links.caseStudy,
							className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition",
							children: "Case Study"
						})
					]
				})
			]
		})]
	});
}
function Projects() {
	const featured = projects.find((p) => p.featured);
	const rest = projects.filter((p) => !p.featured);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 md:mb-14 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
					children: "Selected Work"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-5xl font-bold leading-[1.1] mt-3",
					children: ["Products and systems ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "I've built."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					p: featured,
					i: 0,
					large: true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
					children: rest.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
						p,
						i: i + 1
					}, p.title))
				})]
			})]
		})
	});
}
//#endregion
export { Projects };
