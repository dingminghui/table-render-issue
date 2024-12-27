/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    css: false,
    include: ["src/**/__tests__/*", "src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
    globals: true,
    environment: "jsdom",
    clearMocks: true,
    coverage: {
      include: ["src/**/*"],
      exclude: ["src/main.tsx"],
      thresholds: {
        "100": true,
      },
      provider: "istanbul",
      enabled: true,
      reporter: ["text", "lcov"],
      reportsDirectory: "coverage",
    },
  },
});
