import { a as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/button-6tD3yg_e.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-deep-blue",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			outline: "border border-border bg-transparent text-foreground hover:bg-surface-elevated hover:border-border-active",
			secondary: "bg-surface-elevated text-foreground hover:bg-surface-hover",
			ghost: "text-foreground hover:bg-surface-elevated",
			link: "text-accent underline-offset-4 hover:underline",
			hero: "relative text-white font-semibold bg-[image:var(--gradient-brand)] shadow-[0_10px_30px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_14px_40px_-10px_rgba(14,165,233,0.7)] hover:-translate-y-0.5",
			glass: "border border-border bg-surface/60 backdrop-blur-md text-foreground hover:bg-surface-elevated hover:border-border-active",
			"ghost-line": "border border-border bg-transparent text-foreground hover:bg-surface-elevated hover:border-border-active"
		},
		size: {
			default: "h-10 px-5 py-2",
			sm: "h-9 rounded-md px-3 text-xs",
			lg: "h-12 rounded-lg px-7 text-base",
			icon: "h-10 w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
//#endregion
export { cn as n, Button as t };
