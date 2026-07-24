#!/usr/bin/env node

await import('./processSocialImages.js');
await import('./generateLLMFiles.js');
await import('./fixWranglerConfig.js');
