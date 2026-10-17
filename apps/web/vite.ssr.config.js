// Server build for tools/prerender.mjs: same aliases and plugins as the client build,
// output to .ssr/ (gitignored) instead of dist.
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config.js';

export default mergeConfig(baseConfig, defineConfig({
  ssr: {
    // CommonJS packages whose named exports Node's ESM loader cannot see.
    noExternal: ['react-helmet-async'],
  },
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: '.ssr',
    emptyOutDir: true,
    copyPublicDir: false,
  },
}));
