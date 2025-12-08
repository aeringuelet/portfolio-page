.PHONY: install
install:
	bun install

.PHONY: tidy
tidy:
	bun run biome format --verbose --write

.PHONY: lint
lint:
	bun run biome lint --verbose --write

.PHONY: check
check:
	bun run biome check --verbose

.PHONY: dev
dev:
	bun run astro dev