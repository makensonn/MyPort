import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-6tD3yg_e.mjs";
import { h as Download, s as MapPin } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-GuNNskaC.js
var import_jsx_runtime = require_jsx_runtime();
var mak_portrait_default = "/assets/mak-portrait-D6Ox4uMZ.webp";
var focus = [
	"Full-stack development",
	"API design & integrations",
	"Workflow automation",
	"AI-assisted tooling",
	"Dashboards & internal platforms",
	"Product-minded UI"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 16
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "grid lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
							children: "About Me"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-5xl font-bold leading-[1.1]",
							children: [
								"A developer who bridges code, design,",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "automation, and AI."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground leading-relaxed max-w-2xl",
							children: "I build modern applications and internal tools with a focus on usability, maintainability, and measurable business value. My background includes full-stack development, API integrations, workflow automation, dashboards, technical product work, and AI-assisted development."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid sm:grid-cols-2 gap-y-2 gap-x-6 pt-2 max-w-lg",
							children: focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 text-sm text-foreground/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" }), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "hero",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " View Resume"]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-2 text-sm text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-accent" }), " Durham, North Carolina"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scale: .97
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { duration: .7 },
					className: "lg:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] rounded-2xl overflow-hidden border border-border shadow-[0_20px_60px_-20px_rgba(2,6,23,0.9)]",
						style: { boxShadow: "0 20px 60px -25px rgba(37,99,235,0.35)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: mak_portrait_default,
								alt: "Portrait of Makenson Noel",
								width: 1024,
								height: 1280,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								"aria-hidden": true,
								className: "absolute inset-x-0 bottom-0 h-1/3",
								style: { background: "linear-gradient(180deg, transparent 0%, rgba(2,6,23,0.85) 100%)" }
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-white/90 font-medium",
									children: "Makenson Noel"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-white/60",
									children: "Software Developer · Durham, NC"
								})]
							})
						]
					})
				})]
			})
		})
	});
}
//#endregion
export { About };
