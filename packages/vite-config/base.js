import { defineConfig } from "vite";
import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    outDir: "dist",
    lib: {
      entry: resolve(process.cwd(), "src/index.ts"), // Adjust as needed
      formats: ["cjs", "es"],
      fileName: (format) => `index.${format}.js`,
    },
    sourcemap: true,
  },
});
