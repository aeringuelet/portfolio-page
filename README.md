# portfolio-page
My personal portfolio-like page to use as CV and showcase some of the work I've done.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command               | Action                                           |
| :-------------------- | :----------------------------------------------- |
| `make bootstrap`      | Installs dependencies                            |
| `make dev`            | Starts local dev server at `localhost:4321`      |
| `make build`          | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

## Guides
### How to add a new icon
The icons are rendered using a library called [astro-icon](https://www.astroicon.dev/)

To add a new icon you need to: 
1. add a new file under `/src/icons` with a `.svg` extension 
2. copy-paste the `SVG` from [heroicons](https://heroicons.com/)
3. then in code
```js
---
import { Icon } from 'astro-icon/components';
---

// Loads the SVG in `/src/icons/filename.svg`
<Icon name="filename" />
```