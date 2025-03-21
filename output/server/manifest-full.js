export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DJrz3J6a.js",app:"_app/immutable/entry/app.ChjQtOcR.js",imports:["_app/immutable/entry/start.DJrz3J6a.js","_app/immutable/chunks/Dd1RUCUp.js","_app/immutable/chunks/DwP-CCYX.js","_app/immutable/entry/app.ChjQtOcR.js","_app/immutable/chunks/DwP-CCYX.js","_app/immutable/chunks/DodeQ4Od.js","_app/immutable/chunks/Bft66jxT.js","_app/immutable/chunks/BUwEybqi.js","_app/immutable/chunks/C5rGP0p4.js","_app/immutable/chunks/DgZMGvkt.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/card-info",
				pattern: /^\/card-info\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/task-creation",
				pattern: /^\/task-creation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
