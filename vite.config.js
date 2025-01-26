// vite.config.ts
import Inspect from "vite-plugin-inspect";

export default {
  esbuild: {
    jsxFactory: "create",
    jsxInject: 'import { create } from "/src/configure-jsx.js"',
  },
  plugins: [Inspect()],
};
