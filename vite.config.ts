// vite.config.js (or vite.config.ts if using TypeScript)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import * as path from "path";

export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: function customJsAssetsfilterFunction(
        outputChunk
      ) {
        return outputChunk.fileName == "index.js";
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
  build: {
    minify: "terser",
    // minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    target: ["esnext"],

    lib: {
      name: "design-ui-vite",
      entry: "./src/index",
      fileName: () => "index.js",
    },
    rollupOptions: {
      input: "./src",
      output: {
        dir: "./dist",
      },
    },
  },
});
