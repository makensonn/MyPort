import { a as __toESM } from "../_runtime.mjs";
import { i as AnimatePresence, n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-6tD3yg_e.mjs";
import { f as Github, h as Download, l as Linkedin, o as Menu, p as FileText, t as X, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COvxXBZc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_mn_default = "/assets/logo-mn-BCz7ByCq.webp";
var links = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#projects",
		label: "Projects"
	},
	{
		href: "#process",
		label: "Process"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const ids = links.map((l) => l.href.slice(1));
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(`#${e.target.id}`);
			});
		}, { rootMargin: "-40% 0px -55% 0px" });
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -20,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .5 },
		className: `fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "py-2 backdrop-blur-lg bg-background/80 border-b border-border" : "py-4"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: logo_mn_default,
							alt: "Makenson Noel logo",
							width: 40,
							height: 40,
							className: "w-9 h-9 object-contain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:inline font-display font-semibold tracking-tight text-[15px]",
							children: "Makenson Noel"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Primary",
						className: "hidden md:flex items-center gap-1",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							"aria-current": active === l.href ? "true" : void 0,
							className: `px-3 py-2 text-sm rounded-md transition-colors ${active === l.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://github.com/makensonn",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "GitHub",
								className: "w-10 h-10 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://www.linkedin.com/in/makenson-noel/",
								target: "_blank",
								rel: "noreferrer",
								"aria-label": "LinkedIn",
								className: "w-10 h-10 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/resume",
								className: "inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-border hover:border-border-active hover:bg-surface-elevated transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" }), " Resume"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen((v) => !v),
						className: "md:hidden p-2 text-foreground",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "w-5 h-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: -8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -8
				},
				className: "md:hidden mt-3 rounded-xl border border-border bg-surface p-3 flex flex-col",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "px-3 py-3 text-base rounded-md text-foreground/90 hover:bg-surface-elevated",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/resume",
					onClick: () => setOpen(false),
					className: "mt-2 inline-flex items-center justify-center gap-2 text-base font-medium px-4 py-3 rounded-lg text-white bg-[image:var(--gradient-brand)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "w-4 h-4" }), " Resume"]
				})]
			}) })]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border py-10 mt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-6 max-w-[1200px] flex flex-wrap items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_mn_default,
						alt: "",
						"aria-hidden": true,
						width: 32,
						height: 32,
						className: "w-8 h-8 object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Makenson Noel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Software Developer"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://github.com/makensonn",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-foreground inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" }), " GitHub"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://www.linkedin.com/in/makenson-noel/",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-foreground inline-flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" }), " LinkedIn"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:maknoel.dev@gmail.com",
							className: "hover:text-foreground",
							children: "Email"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Makenson Noel. All rights reserved."
					]
				})
			]
		})
	});
}
var hero_coastal_default = "/assets/hero-coastal-BSCkeBeX.webp";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative min-h-[92vh] flex items-center overflow-hidden pt-32 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: hero_coastal_default,
				alt: "",
				"aria-hidden": true,
				style: { y },
				className: "absolute inset-0 -z-20 h-full w-full object-cover opacity-70",
				width: 1920,
				height: 1080,
				fetchPriority: "high",
				decoding: "async"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				style: { background: "linear-gradient(180deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.55) 45%, rgba(2,6,23,0.9) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -z-10 inset-x-0 top-1/3 h-[420px] blur-3xl opacity-40",
				style: { background: "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(37,99,235,0.35), transparent 70%), radial-gradient(ellipse 50% 50% at 80% 40%, rgba(34,211,238,0.20), transparent 70%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity },
				className: "container mx-auto px-6 max-w-[1200px] relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl space-y-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 8
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .5 },
							className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
							children: "Full-Stack Software Developer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .05,
								duration: .7
							},
							className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight",
							children: [
								"I build digital products",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" that connect",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "systems,"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								" people, and ideas."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								delay: .2,
								duration: .6
							},
							className: "text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed",
							children: "I design and develop responsive applications, internal platforms, API integrations, automation workflows, and AI-powered tools that solve real business problems."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 6
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { delay: .35 },
							className: "flex flex-wrap items-center gap-3 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "hero",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#projects",
									children: ["View My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/resume",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-1 h-4 w-4" }), " Download Resume"]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: { delay: .55 },
							className: "inline-flex items-center gap-2 pt-4 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex w-2 h-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex w-2 h-2 rounded-full bg-accent" })]
							}), "Open to Software Engineering, Full-Stack, Automation, and Integration roles"]
						})
					]
				})
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var About = (0, import_react.lazy)(() => import("./about-GuNNskaC.mjs").then((m) => ({ default: m.About })));
var Projects = (0, import_react.lazy)(() => import("./projects-BWK9YBhA.mjs").then((m) => ({ default: m.Projects })));
var AIBuilder = (0, import_react.lazy)(() => import("./ai-builder-DFcitOK6.mjs").then((m) => ({ default: m.AIBuilder })));
var Skills = (0, import_react.lazy)(() => import("./skills-CNxQgvcL.mjs").then((m) => ({ default: m.Skills })));
var Experience = (0, import_react.lazy)(() => import("./experience-BR75jMk-.mjs").then((m) => ({ default: m.Experience })));
var Contact = (0, import_react.lazy)(() => import("./contact-gLX6OW74.mjs").then((m) => ({ default: m.Contact })));
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32" }),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AIBuilder, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
//#endregion
export { Index as component };
