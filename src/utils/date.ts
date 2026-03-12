export const formatLongDate = (date: Date): string =>
	new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

export const formatShortDate = (date: Date): string =>
	new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
	})
