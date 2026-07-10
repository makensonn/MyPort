import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Compass, a as Rocket, n as Wrench, u as LayoutGrid } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ai-builder-DFcitOK6.js
var import_jsx_runtime = require_jsx_runtime();
var steps = [
	{
		icon: Compass,
		title: "Understand the Problem",
		desc: "Translate business needs into clear technical requirements and user flows."
	},
	{
		icon: LayoutGrid,
		title: "Design the System",
		desc: "Plan the interface, data model, integrations, architecture, and edge cases."
	},
	{
		icon: Wrench,
		title: "Build and Validate",
		desc: "Develop reusable components, APIs, automation workflows, and tests."
	},
	{
		icon: Rocket,
		title: "Ship and Improve",
		desc: "Deploy, monitor, collect feedback, and refine the product."
	}
];
function AIBuilder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-12 md:mb-14 max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
						children: "How I Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-5xl font-bold leading-[1.1] mt-3",
						children: [
							"A modern development process,",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-brand",
								children: "accelerated by AI."
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: { once: true },
						transition: {
							delay: i * .08,
							duration: .5
						},
						className: "surface-card p-6 hover:[border-color:var(--color-border-active)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-11 h-11 rounded-lg flex items-center justify-center border border-border",
									style: { background: "linear-gradient(135deg, rgba(37,99,235,0.18), rgba(34,211,238,0.12))" },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-5 h-5 text-accent" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-mono text-muted-foreground",
									children: ["0", i + 1]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-semibold text-lg mb-2 tracking-tight",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: s.desc
							})
						]
					}, s.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-sm text-muted-foreground max-w-3xl leading-relaxed",
					children: "I use tools such as ChatGPT, Claude, GitHub Copilot, Codex, and Lovable to accelerate research, prototyping, debugging, and implementation — while remaining responsible for architecture, validation, and final quality."
				})
			]
		})
	});
}
//#endregion
export { AIBuilder };
