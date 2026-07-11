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
		"mtime": "2026-07-11T16:07:22.292Z",
		"size": 56435,
		"path": "../public/favicon.png"
	},
	"/assets/about-4M6_JSfN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c35-YVOEqP6Rmhh1J4PD9MHElggHWS4\"",
		"mtime": "2026-07-11T16:07:20.555Z",
		"size": 3125,
		"path": "../public/assets/about-4M6_JSfN.js"
	},
	"/assets/ai-builder-CU3x61dm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"da2-a7gTHK9Vw+8z1VAw4fJQt/lbzyY\"",
		"mtime": "2026-07-11T16:07:20.555Z",
		"size": 3490,
		"path": "../public/assets/ai-builder-CU3x61dm.js"
	},
	"/assets/button-TklZsvnV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"25d84-ESLMJhNXf7FOA6eNJACMfD46WbQ\"",
		"mtime": "2026-07-11T16:07:20.555Z",
		"size": 155012,
		"path": "../public/assets/button-TklZsvnV.js"
	},
	"/assets/contact-JKHw4mKG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ff36-FIebLcjdFVoBU0Z4bGF6meY4cmM\"",
		"mtime": "2026-07-11T16:07:20.555Z",
		"size": 65334,
		"path": "../public/assets/contact-JKHw4mKG.js"
	},
	"/assets/dist-DnpLy4iu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7fac-W0yxTZN2xJ0f9jefafK7wwDyTNw\"",
		"mtime": "2026-07-11T16:07:20.556Z",
		"size": 32684,
		"path": "../public/assets/dist-DnpLy4iu.js"
	},
	"/assets/experience-CA9reMFD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"96a-Y3zXSPgfJAnm8NyhXf52EiFFVVo\"",
		"mtime": "2026-07-11T16:07:20.557Z",
		"size": 2410,
		"path": "../public/assets/experience-CA9reMFD.js"
	},
	"/assets/hero-coastal-BSCkeBeX.webp": {
		"type": "image/webp",
		"etag": "\"66a6-88caXvcTPb/phb0DQsyX1jBYS+g\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 26278,
		"path": "../public/assets/hero-coastal-BSCkeBeX.webp"
	},
	"/assets/index-mBlUa6c8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5480d-c8An+o6K2RZsIo7zAK3M8VUypF8\"",
		"mtime": "2026-07-11T16:07:20.555Z",
		"size": 346125,
		"path": "../public/assets/index-mBlUa6c8.js"
	},
	"/assets/logo-mn-BCz7ByCq.webp": {
		"type": "image/webp",
		"etag": "\"5f2e-vG0IlacdVJFjw0CtiNpA1KCofEg\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 24366,
		"path": "../public/assets/logo-mn-BCz7ByCq.webp"
	},
	"/assets/mail-CBLUxvdw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cb-YxQNxjtvs4EzJBKOPqWPPybONVA\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 203,
		"path": "../public/assets/mail-CBLUxvdw.js"
	},
	"/assets/mak-portrait-D6Ox4uMZ.webp": {
		"type": "image/webp",
		"etag": "\"14b26-dNNAbAc8dFcF4TFRYI6Qm6uSubU\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 84774,
		"path": "../public/assets/mak-portrait-D6Ox4uMZ.webp"
	},
	"/assets/map-pin-92F5vZMs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f9-FXn1cXJlV1JYnzPkgYmbirkeQjs\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 249,
		"path": "../public/assets/map-pin-92F5vZMs.js"
	},
	"/assets/project-asl-BqaUhlW-.webp": {
		"type": "image/webp",
		"etag": "\"2051a-LRtbwlb7KlOAVZTiCh5sOCDkZn0\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 132378,
		"path": "../public/assets/project-asl-BqaUhlW-.webp"
	},
	"/assets/project-bridgeops-CbVmuYDq.webp": {
		"type": "image/webp",
		"etag": "\"1dd74-RHfhl8Og+zMVA6XDN9ppTRWLeXA\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 122228,
		"path": "../public/assets/project-bridgeops-CbVmuYDq.webp"
	},
	"/assets/project-gasme-DjtNhL3e.webp": {
		"type": "image/webp",
		"etag": "\"29bec-DhesmUNWSfySge1U/7Gdv+kmUR8\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 170988,
		"path": "../public/assets/project-gasme-DjtNhL3e.webp"
	},
	"/assets/project-shopwave-QgL7nC8n.webp": {
		"type": "image/webp",
		"etag": "\"29ad8-ZCY4Xmq71NRTD8IEWAtWcdAO2D8\"",
		"mtime": "2026-07-11T16:07:20.560Z",
		"size": 170712,
		"path": "../public/assets/project-shopwave-QgL7nC8n.webp"
	},
	"/assets/projects-DGWHQoqU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1676-gHdxhfzvSS944ZJHl4DyRq9P2jM\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 5750,
		"path": "../public/assets/projects-DGWHQoqU.js"
	},
	"/assets/resume-CwExndQ4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cb5-6DY+N3XO88zRUIRR8g41eOpvpvg\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 7349,
		"path": "../public/assets/resume-CwExndQ4.js"
	},
	"/assets/routes-DJG2l8EE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ab3-W4Hn16X9osc2N7PeutNNIJqDcx4\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 23219,
		"path": "../public/assets/routes-DJG2l8EE.js"
	},
	"/assets/skills-D339iJWi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad4-Zg/BakIT3Aa70ALWOps9aIbjQ+0\"",
		"mtime": "2026-07-11T16:07:20.559Z",
		"size": 2772,
		"path": "../public/assets/skills-D339iJWi.js"
	},
	"/assets/styles-BbdiMI9E.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"13c70-3C9UArE1RyblaW+BfLfT/3VmURg\"",
		"mtime": "2026-07-11T16:07:20.560Z",
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
