import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:8000",
                changeOrigin: true,
                headers: {
                    Accept: "application/json",
                    // "Content-Type": "application/json",
                },
                rewrite: (path) => path,
            },
        },
    },
    resolve: {
        alias: {
            "@icons": path.resolve(__dirname, "./src/icons"),
            "@lib": path.resolve(__dirname, "./src/lib"),
            "@contexts": path.resolve(__dirname, "./src/contexts"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@services": path.resolve(__dirname, "./src/services"),
        },
    },
});
