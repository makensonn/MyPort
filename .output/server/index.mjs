globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"dc73-nVvkBWJSbUSawmDdmXVrHF1lRw0\"",
		"mtime": "2026-10-21T11:32:14.179Z",
		"size": 56435,
		"path": "../public/favicon.png"
	},
	"/assets/about-DFejj7z7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c35-yKCsFeyxlmxK1pFqRCNnEee2c2c\"",
		"mtime": "2026-10-21T11:32:13.418Z",
		"size": 3125,
		"path": "../public/assets/about-DFejj7z7.js"
	},
	"/assets/ai-builder-DsID6VzV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da2-sYaBCsgfcVIo+2szHjvKTLlpEwU\"",
		"mtime": "2026-10-21T11:32:13.418Z",
		"size": 3490,
		"path": "../public/assets/ai-builder-DsID6VzV.js"
	},
	"/assets/button-B0vcVnCm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d84-NUp26r0xoLN/ZMGAyY3bL8qWmtk\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 155012,
		"path": "../public/assets/button-B0vcVnCm.js"
	},
	"/assets/contact-bdf1JoAH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff3c-SwKLpKuTSWzdfLFvh89X+U4gjg0\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 65340,
		"path": "../public/assets/contact-bdf1JoAH.js"
	},
	"/assets/dist-qPmuVLoP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fac-9Eo0m6pNtcUqRs7StLVvIR96rkM\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 32684,
		"path": "../public/assets/dist-qPmuVLoP.js"
	},
	"/assets/experience-A3PeCIyk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96a-uACxcD/N7hqbb6XNBaq6V8/1l1k\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 2410,
		"path": "../public/assets/experience-A3PeCIyk.js"
	},
	"/assets/hero-coastal-BSCkeBeX.webp": {
		"type": "image/webp",
		"etag": "\"66a6-88caXvcTPb/phb0DQsyX1jBYS+g\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 26278,
		"path": "../public/assets/hero-coastal-BSCkeBeX.webp"
	},
	"/assets/index-D-DAnkpn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5327c-W8v0l8PZE7KzsOggM5wZuCVG+U4\"",
		"mtime": "2026-10-21T11:32:13.418Z",
		"size": 340604,
		"path": "../public/assets/index-D-DAnkpn.js"
	},
	"/assets/logo-mn-BCz7ByCq.webp": {
		"type": "image/webp",
		"etag": "\"5f2e-vG0IlacdVJFjw0CtiNpA1KCofEg\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 24366,
		"path": "../public/assets/logo-mn-BCz7ByCq.webp"
	},
	"/assets/mail-D5mqEgcS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-39wQhZNLUWk/GJVumgPr8+0Gz6w\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 203,
		"path": "../public/assets/mail-D5mqEgcS.js"
	},
	"/assets/mak-portrait-D6Ox4uMZ.webp": {
		"type": "image/webp",
		"etag": "\"14b26-dNNAbAc8dFcF4TFRYI6Qm6uSubU\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 84774,
		"path": "../public/assets/mak-portrait-D6Ox4uMZ.webp"
	},
	"/assets/map-pin-BbkwYF35.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-j5VXC04b8IgUw0zkrZ4fLMM2Er4\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 249,
		"path": "../public/assets/map-pin-BbkwYF35.js"
	},
	"/assets/project-asl-BqaUhlW-.webp": {
		"type": "image/webp",
		"etag": "\"2051a-LRtbwlb7KlOAVZTiCh5sOCDkZn0\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 132378,
		"path": "../public/assets/project-asl-BqaUhlW-.webp"
	},
	"/assets/project-bridgeops-CbVmuYDq.webp": {
		"type": "image/webp",
		"etag": "\"1dd74-RHfhl8Og+zMVA6XDN9ppTRWLeXA\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 122228,
		"path": "../public/assets/project-bridgeops-CbVmuYDq.webp"
	},
	"/assets/project-gasme-DjtNhL3e.webp": {
		"type": "image/webp",
		"etag": "\"29bec-DhesmUNWSfySge1U/7Gdv+kmUR8\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 170988,
		"path": "../public/assets/project-gasme-DjtNhL3e.webp"
	},
	"/assets/project-shopwave-QgL7nC8n.webp": {
		"type": "image/webp",
		"etag": "\"29ad8-ZCY4Xmq71NRTD8IEWAtWcdAO2D8\"",
		"mtime": "2026-10-21T11:32:13.420Z",
		"size": 170712,
		"path": "../public/assets/project-shopwave-QgL7nC8n.webp"
	},
	"/assets/projects-DEIBkMhp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"16a9-tkZSSuoKT6UWvv2pgjVyvw0x6cg\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 5801,
		"path": "../public/assets/projects-DEIBkMhp.js"
	},
	"/assets/resume-BPQsIlFg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cbb-UniESrIo0A6+wa3kh5gG6ACdYqc\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 7355,
		"path": "../public/assets/resume-BPQsIlFg.js"
	},
	"/assets/routes-Bgtz1KKK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab3-LgiQLQYOnUX4JPJbl5QbJ1YEbnM\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 23219,
		"path": "../public/assets/routes-Bgtz1KKK.js"
	},
	"/assets/skills-CRTEVlSK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad4-Gj0HL/9xp1MB02E62jw7p9BIbNc\"",
		"mtime": "2026-10-21T11:32:13.419Z",
		"size": 2772,
		"path": "../public/assets/skills-CRTEVlSK.js"
	},
	"/assets/styles-BbdiMI9E.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13c70-3C9UArE1RyblaW+BfLfT/3VmURg\"",
		"mtime": "2026-10-21T11:32:13.421Z",
		"size": 81008,
		"path": "../public/assets/styles-BbdiMI9E.css"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_P_kSsl = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_P_kSsl
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
