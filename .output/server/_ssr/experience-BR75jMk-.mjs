import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/experience-BR75jMk-.js
var import_jsx_runtime = require_jsx_runtime();
var jobs = [{
	title: "Software Developer",
	company: "The Driscoll Firm, PC",
	location: "Remote",
	period: "Current",
	bullets: [
		"Built automation systems and integrations across legal intake, CRM, and case management platforms.",
		"Developed internal dashboards with reporting, analytics, and PDF export.",
		"Shipped AI-assisted onboarding and knowledge tools that streamlined day-to-day operations."
	],
	tech: [
		"React",
		"TypeScript",
		"Node.js",
		"REST APIs",
		"Webhooks",
		"PostgreSQL"
	]
}];
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 md:mb-14 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
					children: "Experience"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-5xl font-bold leading-[1.1] mt-3",
					children: ["Where I've ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "delivered."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-5",
				children: jobs.map((j, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
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
						delay: i * .06,
						duration: .5
					},
					className: "surface-card p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-start justify-between gap-4 mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl md:text-2xl font-bold tracking-tight",
									children: j.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-accent font-medium mt-0.5",
									children: j.company
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: j.location
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium px-3 py-1 rounded-full border border-border-active text-accent",
								children: j.period
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 mb-5",
							children: j.bullets.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3 text-sm text-foreground/85",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-accent shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "leading-relaxed",
									children: b
								})]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: j.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground",
								children: t
							}, t))
						})
					]
				}, j.company + j.title))
			})]
		})
	});
}
//#endregion
export { Experience };
