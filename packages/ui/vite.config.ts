import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        tsconfigPaths(),
        react(),
        dts({
            entryRoot: resolve(__dirname, "src"),
            insertTypesEntry: true
        })
    ],
    build: {
        outDir: "dist",
        emptyOutDir: true,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "@repo/ui",
            formats: ['es'],
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ["react", "react-dom", "react-jsx"],
            output: {
                assetFileNames: 'index.[ext]',
                globals: {
                    React: "react",
                    "react-dom": "react-dom"
                }
            }
        }
    }
});