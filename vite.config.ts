import { resolve } from "node:path";
import { defineConfig } from "vite";

const uiEntries = {
  avatar: resolve(__dirname, "components/ui/avatar/index.ts"),
  button: resolve(__dirname, "components/ui/button/index.ts"),
  checkbox: resolve(__dirname, "components/ui/checkbox/index.ts"),
  input: resolve(__dirname, "components/ui/input/index.ts"),
  "loading-spinner": resolve(
    __dirname,
    "components/ui/loading-spinner/index.ts",
  ),
  radio: resolve(__dirname, "components/ui/radio/index.ts"),
  select: resolve(__dirname, "components/ui/select/index.ts"),
  styles: resolve(__dirname, "components/ui/styles.css"),
};

export default defineConfig({
  publicDir: false,
  build: {
    cssCodeSplit: true,
    emptyOutDir: true,
    lib: {
      cssFileName: "styles",
      entry: uiEntries,
      fileName: (_format, entryName) => `${entryName}.mjs`,
      formats: ["es"],
    },
    minify: false,
    outDir: "dist",
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        exports: "named",
      },
    },
    sourcemap: true,
  },
});
