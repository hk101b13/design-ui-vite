// vite.config.js (or vite.config.ts if using TypeScript)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

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
      external: ["react", "react-dom"],
      input: "./src",
      output: {
        dir: "./dist",
      },
    },
  },
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
