// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export default defineConfig({
	site: "https://aeringuelet.github.io",
	base: "/portfolio-page",
	vite: {
		plugins: [tailwindcss()],
	},
	outDir: "src/dist",
})
