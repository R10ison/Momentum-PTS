

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.zTafJc3F.js","_app/immutable/chunks/Bft66jxT.js","_app/immutable/chunks/DwP-CCYX.js","_app/immutable/chunks/C5rGP0p4.js"];
export const stylesheets = [];
export const fonts = [];
