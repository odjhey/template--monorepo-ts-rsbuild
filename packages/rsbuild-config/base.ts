import { defineConfig } from "@rsbuild/core";
import { pluginSourceBuild } from "@rsbuild/plugin-source-build";

export default defineConfig({
  plugins: [pluginSourceBuild()],
  output: {
    sourceMap: { js: "source-map" },
    targets: ["node"],
    distPath: { root: "dist/js" },
  },
});
