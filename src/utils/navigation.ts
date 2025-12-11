import { SITE_BASE } from "../../astro.config.mjs"

export const buildPath = (path: string) => {
	return `${SITE_BASE}${path}`
}
