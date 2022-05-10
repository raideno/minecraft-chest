import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: "/minecraft-chest/",
  },
  base: "/minecraft-chest/",
  plugins: [react()],
});
