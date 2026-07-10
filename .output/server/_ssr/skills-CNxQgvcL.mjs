import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Database, r as Server, v as CodeXml, y as Cloud } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/skills-CNxQgvcL.js
var import_jsx_runtime = require_jsx_runtime();
var groups = [
	{
		label: "Frontend",
		icon: CodeXml,
		skills: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Vite",
			"HTML5",
			"CSS3",
			"SASS",
			"Responsive Design"
		]
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
			"Event-driven workflows"
		]
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
			"ETL workflows"
		]
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
			"Postman"
		]
	}
];
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "relative py-24 md:py-32 bg-background-secondary/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 md:mb-14 max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
					children: "Tech Stack"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl md:text-5xl font-bold leading-[1.1] mt-3",
					children: ["Technologies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-brand",
						children: "I work with"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5",
				children: groups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
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
					className: "surface-card p-6 hover:[border-color:var(--color-border-active)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3 mb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-10 h-10 rounded-lg border border-border flex items-center justify-center bg-surface-elevated",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.icon, { className: "w-4 h-4 text-accent" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold tracking-tight",
							children: g.label
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-wrap gap-1.5",
						children: g.skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-[12px] px-2.5 py-1 rounded-md bg-surface-elevated border border-border text-foreground/85",
							children: s
						}, s))
					})]
				}, g.label))
			})]
		})
	});
}
//#endregion
export { Skills };
