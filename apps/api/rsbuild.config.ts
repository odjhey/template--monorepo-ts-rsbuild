import { defineConfig } from "@rsbuild/core";
import base from "@repo/rsbuild-config/base";

export default defineConfig({
  ...base,
  source: {
    entry: {
      index: "./src/index.ts",
    },
  },
});
