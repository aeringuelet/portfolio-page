import { type CollectionEntry, defineCollection } from "astro:content"

import { glob } from "astro/loaders"

import { z } from "astro/zod"

const blog = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/data/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		status: z.enum(["draft", "published", "deleted"]).default("draft"),
		creationDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
})

export const collections = { blog }

export type Collections = typeof collections
export type Collection<T extends keyof Collections = keyof Collections> =
	CollectionEntry<T>
