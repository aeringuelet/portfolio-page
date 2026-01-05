import type { CollectionEntry } from "astro:content"
import type { collections } from "../content.config"

export type Collections = typeof collections
export type Collection<T extends keyof Collections = keyof Collections> =
	CollectionEntry<T>
