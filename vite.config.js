// vite.config.ts
import Inspect from "vite-plugin-inspect";

export default {
  esbuild: {
    jsxFactory: "create",
  },
  plugins: [Inspect()],
};
