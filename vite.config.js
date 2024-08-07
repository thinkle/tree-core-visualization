import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";
export default defineConfig({
  plugins: [svelte()],

  build: {
    rollupOptions: {
      external: ["svelte-prism"], // Exclude svelte-prism if it's causing issues
    },
  },
});
