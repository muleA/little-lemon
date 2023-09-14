// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@libs": resolve(__dirname, "src/libs/"),
      "@styles": resolve(__dirname, "src/styles"),
      "@models": resolve(__dirname, "src/models"),
      "@contexts": resolve(__dirname, "src/contexts"),
    },
  },
});
