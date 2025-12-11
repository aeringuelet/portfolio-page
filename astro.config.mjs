// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

export const SITE_BASE = "/portfolio-page"

export default defineConfig({
	site: "https://aeringuelet.github.io",
	base: SITE_BASE,
	vite: {
		plugins: [tailwindcss()],
	},
	outDir: "src/dist",
})
