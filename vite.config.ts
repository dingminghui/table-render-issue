import eslintPlugin from "@nabla/vite-plugin-eslint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tsconfigPaths(), svgr(), ...(mode === "test" ? [] : [eslintPlugin()])],
  base: "/",
  server: {
    port: 5176,
    proxy: {
      "/api/": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
      },
    },
    cors: true,
  },
}));
