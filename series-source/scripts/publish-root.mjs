import { copyFileSync } from 'node:fs';
// Absolute asset URLs preserve existing revamp links.
copyFileSync(new URL('../../revamp/index.html', import.meta.url), new URL('../../index.html', import.meta.url));
