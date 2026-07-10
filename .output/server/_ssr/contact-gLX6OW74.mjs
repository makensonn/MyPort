import { a as __toESM } from "../_runtime.mjs";
import { r as motion } from "../_libs/framer-motion.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as cn, t as Button } from "./button-6tD3yg_e.mjs";
import { c as Mail, f as Github, i as Send, l as Linkedin, s as MapPin, x as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-gLX6OW74.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	email: stringType().trim().email("Please enter a valid email").max(255),
	message: stringType().trim().min(10, "Message must be at least 10 characters").max(2e3),
	company: stringType().max(0).optional()
});
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const parsed = schema.safeParse({
			name: fd.get("name"),
			email: fd.get("email"),
			message: fd.get("message"),
			company: fd.get("company") ?? ""
		});
		if (!parsed.success) {
			const fieldErrors = {};
			parsed.error.issues.forEach((iss) => {
				const key = iss.path[0];
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-16 md:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative rounded-2xl overflow-hidden border border-border p-10 md:p-16",
				style: { background: "linear-gradient(135deg, #071426 0%, #0B172A 45%, #102038 100%)" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "absolute inset-0 opacity-40",
					style: { background: "radial-gradient(ellipse 40% 60% at 15% 40%, rgba(37,99,235,0.35), transparent 70%), radial-gradient(ellipse 40% 60% at 85% 60%, rgba(34,211,238,0.25), transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-5xl font-bold leading-[1.1]",
							children: [
								"I don't just write code.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"I build systems that",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "create freedom."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-muted-foreground max-w-2xl",
							children: "From internal platforms and workflow automation to customer-facing applications, I focus on solutions that reduce friction and make work easier."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "hero",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact-form",
									children: ["Start a Conversation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
								})
							})
						})
					]
				})]
			})
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto px-6 max-w-[1200px]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-12 gap-10 items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.2em] uppercase text-accent",
							children: "Let's build something useful"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl md:text-5xl font-bold leading-[1.1]",
							children: [
								"Have a project or opportunity",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-brand",
									children: "in mind?"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg text-muted-foreground max-w-xl",
							children: "I'm open to software engineering, full-stack development, automation, integration, and technical product opportunities."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							id: "contact-form",
							onSubmit,
							noValidate: true,
							className: "surface-card p-6 md:p-8 space-y-4 mt-4 max-w-xl",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									name: "company",
									tabIndex: -1,
									autoComplete: "off",
									"aria-hidden": "true",
									className: "absolute -left-[9999px] w-px h-px opacity-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "name",
											className: "text-xs font-medium text-muted-foreground",
											children: "Name"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "name",
											name: "name",
											placeholder: "Your name",
											className: "mt-1.5 bg-surface-elevated border-border h-11",
											"aria-invalid": !!errors.name,
											"aria-describedby": errors.name ? "name-error" : void 0
										}),
										errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "name-error",
											className: "text-xs text-destructive mt-1",
											children: errors.name
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "email",
											className: "text-xs font-medium text-muted-foreground",
											children: "Email"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											name: "email",
											type: "email",
											placeholder: "you@company.com",
											className: "mt-1.5 bg-surface-elevated border-border h-11",
											"aria-invalid": !!errors.email,
											"aria-describedby": errors.email ? "email-error" : void 0
										}),
										errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											id: "email-error",
											className: "text-xs text-destructive mt-1",
											children: errors.email
										})
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "message",
										className: "text-xs font-medium text-muted-foreground",
										children: "Message"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										id: "message",
										name: "message",
										rows: 5,
										placeholder: "Tell me about your project or opportunity…",
										className: "mt-1.5 bg-surface-elevated border-border resize-none",
										"aria-invalid": !!errors.message,
										"aria-describedby": errors.message ? "message-error" : void 0
									}),
									errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										id: "message-error",
										className: "text-xs text-destructive mt-1",
										children: errors.message
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "submit",
											variant: "hero",
											size: "lg",
											disabled: status === "sending",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4" }), status === "sending" ? "Sending…" : "Send Message"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "outline",
											size: "lg",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: "mailto:maknoel.dev@gmail.com",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" }), " Email directly"]
											})
										}),
										status === "success" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-accent",
											children: "Your email client should open shortly."
										})
									]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { delay: .08 },
					className: "lg:col-span-5 space-y-4 lg:pt-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:maknoel.dev@gmail.com",
								className: "text-base font-medium hover:text-accent transition-colors",
								children: "maknoel.dev@gmail.com"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-2",
								children: "Location"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-base font-medium inline-flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4 text-accent" }), " Durham, North Carolina"]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "surface-card p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-3",
								children: "Elsewhere"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://github.com/makensonn",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "GitHub",
										className: "w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "https://www.linkedin.com/in/makenson-noel/",
										target: "_blank",
										rel: "noreferrer",
										"aria-label": "LinkedIn",
										className: "w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:maknoel.dev@gmail.com",
										"aria-label": "Email",
										className: "w-11 h-11 rounded-lg border border-border inline-flex items-center justify-center hover:border-border-active hover:text-accent transition",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" })
									})
								]
							})]
						})
					]
				})]
			})
		})
	})] });
}
//#endregion
export { Contact };
