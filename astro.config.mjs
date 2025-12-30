// @ts-check

import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"
import icon from "astro-icon"
import { defineConfig } from "astro/config"

export const SITE_BASE = "/portfolio-page"

export default defineConfig({
	site: "https://aeringuelet.github.io",
	base: SITE_BASE,
	vite: {
		plugins: [tailwindcss()],
	},
	outDir: "src/dist",
	integrations: [icon(), mdx()],
})
