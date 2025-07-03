import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    lib: {
      entry: "./src/main.ts", // ton point d’entrée
      name: "bundle", // génère bundle.js
      formats: ["iife"], // ou ['umd'] si tu veux UMD
    },
  },
});
