// since there's no dynamic data here, we can prerender it so that it gets served as a static asset in production
// angel brain: pc prerender (vs server-rendering) svelte thing. send to client as html. 

import { dev } from '$app/environment';

export const csr = dev;

export const prerender = true; 