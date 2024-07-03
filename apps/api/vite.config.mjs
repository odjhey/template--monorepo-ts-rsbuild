import { defineConfig } from "vite";
import base from "@repo/vite-config/base";

export default defineConfig({
  ...base,
  build: {
    ...base.build,
    target: "node20",
  },
});
