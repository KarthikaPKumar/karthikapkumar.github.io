import { copyFileSync } from 'node:fs';
// Publish the portfolio at the account root; /revamp/ remains an alternate entry point.
copyFileSync(new URL('../../revamp/index.html', import.meta.url), new URL('../../index.html', import.meta.url));
