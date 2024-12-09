// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production

import { dev } from '$app/environment';

export const csr = dev;

export const prerender = true;