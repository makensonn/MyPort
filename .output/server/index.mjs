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
		"mtime": "2026-07-10T04:12:08.311Z",
		"size": 56435,
		"path": "../public/favicon.png"
	},
	"/assets/about-BIYN8zzC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c35-TAORhMiAjnYFxhW3p11xJhqPS0I\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 3125,
		"path": "../public/assets/about-BIYN8zzC.js"
	},
	"/assets/button-MS7AguA0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d84-mukHBblDWvsKNrt5PgGSPw0Hs0k\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 155012,
		"path": "../public/assets/button-MS7AguA0.js"
	},
	"/assets/contact-BNNFIzUj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff36-PYhn5eAzaELmxZPJVshjLNAle5w\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 65334,
		"path": "../public/assets/contact-BNNFIzUj.js"
	},
	"/assets/experience-rUS0N2sx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96a-073qZAq+m2hb3BboWSSZTVgWd1k\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 2410,
		"path": "../public/assets/experience-rUS0N2sx.js"
	},
	"/assets/dist-CioQg7Os.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fac-QXmxyKMDu4hBxEMKcj5uDMEO6Hc\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 32684,
		"path": "../public/assets/dist-CioQg7Os.js"
	},
	"/assets/hero-coastal-BSCkeBeX.webp": {
		"type": "image/webp",
		"etag": "\"66a6-88caXvcTPb/phb0DQsyX1jBYS+g\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 26278,
		"path": "../public/assets/hero-coastal-BSCkeBeX.webp"
	},
	"/assets/logo-mn-BCz7ByCq.webp": {
		"type": "image/webp",
		"etag": "\"5f2e-vG0IlacdVJFjw0CtiNpA1KCofEg\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 24366,
		"path": "../public/assets/logo-mn-BCz7ByCq.webp"
	},
	"/assets/mail-Bvd5ZHta.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-5sRtaXqJIv7Mb/gkcpSjR4s2BwQ\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 203,
		"path": "../public/assets/mail-Bvd5ZHta.js"
	},
	"/assets/mak-portrait-D6Ox4uMZ.webp": {
		"type": "image/webp",
		"etag": "\"14b26-dNNAbAc8dFcF4TFRYI6Qm6uSubU\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 84774,
		"path": "../public/assets/mak-portrait-D6Ox4uMZ.webp"
	},
	"/assets/map-pin-NMB-BZyI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-ZJEUdaGrtvhtUT4KyCnRFlOTiCA\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 249,
		"path": "../public/assets/map-pin-NMB-BZyI.js"
	},
	"/assets/index-PkhY2tyH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5480d-KNaURtSQBk7VET0jjRD4x1ZS/KQ\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 346125,
		"path": "../public/assets/index-PkhY2tyH.js"
	},
	"/assets/project-asl-BqaUhlW-.webp": {
		"type": "image/webp",
		"etag": "\"2051a-LRtbwlb7KlOAVZTiCh5sOCDkZn0\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 132378,
		"path": "../public/assets/project-asl-BqaUhlW-.webp"
	},
	"/assets/project-bridgeops-CbVmuYDq.webp": {
		"type": "image/webp",
		"etag": "\"1dd74-RHfhl8Og+zMVA6XDN9ppTRWLeXA\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 122228,
		"path": "../public/assets/project-bridgeops-CbVmuYDq.webp"
	},
	"/assets/project-gasme-DjtNhL3e.webp": {
		"type": "image/webp",
		"etag": "\"29bec-DhesmUNWSfySge1U/7Gdv+kmUR8\"",
		"mtime": "2026-07-10T04:12:07.745Z",
		"size": 170988,
		"path": "../public/assets/project-gasme-DjtNhL3e.webp"
	},
	"/assets/projects-B99HWgrt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163d-swO0lmF38Nhlw+CrekJHDe2g6Tc\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 5693,
		"path": "../public/assets/projects-B99HWgrt.js"
	},
	"/assets/resume-BUSCh-Hv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cb5-ydsKE/YejAcu+8EbPaLy/1PmdxE\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 7349,
		"path": "../public/assets/resume-BUSCh-Hv.js"
	},
	"/assets/routes-oMTZKo5l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab3-soBoc4pfbdYBoshMiL/ScZuscSQ\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 23219,
		"path": "../public/assets/routes-oMTZKo5l.js"
	},
	"/assets/skills-DHAKAks1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad4-/cJ0O9WnzGPvodyykQiMkHDpZdY\"",
		"mtime": "2026-07-10T04:12:07.744Z",
		"size": 2772,
		"path": "../public/assets/skills-DHAKAks1.js"
	},
	"/assets/styles-BbdiMI9E.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13c70-3C9UArE1RyblaW+BfLfT/3VmURg\"",
		"mtime": "2026-07-10T04:12:07.745Z",
		"size": 81008,
		"path": "../public/assets/styles-BbdiMI9E.css"
	},
	"/assets/project-shopwave-QgL7nC8n.webp": {
		"type": "image/webp",
		"etag": "\"29ad8-ZCY4Xmq71NRTD8IEWAtWcdAO2D8\"",
		"mtime": "2026-07-10T04:12:07.745Z",
		"size": 170712,
		"path": "../public/assets/project-shopwave-QgL7nC8n.webp"
	},
	"/assets/ai-builder-DpCeGi56.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da2-RhcLnT1oRNJaJpLR7R05kpRw1P0\"",
		"mtime": "2026-07-10T04:12:07.743Z",
		"size": 3490,
		"path": "../public/assets/ai-builder-DpCeGi56.js"
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
