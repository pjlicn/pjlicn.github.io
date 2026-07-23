# Academic Pages migration instructions

This repository is migrating Peijun Li's existing personal website from an older customized Academic Pages / Minimal Mistakes version to Academic Pages v0.8.4.

## Source of truth

- The current working tree uses Academic Pages v0.8.4 as the template foundation.
- `OLD_CONFIG_REFERENCE.yml` contains personal settings from the previous site.
- The copied Markdown pages and collections contain the user's real academic content.
- The production repository is `pjlicn/pjlicn.github.io`.
- The production URL is `https://pjlicn.github.io`.
- The default production branch is `main`.

## Non-negotiable constraints

- Do not migrate the site to React, Vue, Next.js, Astro, Tailwind, Bootstrap, or another framework.
- Do not restore old `_sass`, `_includes`, `_layouts`, `assets`, Gemfile, workflows, or custom theme-toggle files.
- Preserve Academic Pages v0.8.4 layouts, includes, SCSS structure, JavaScript, Gemfile, and deployment infrastructure.
- Do not copy `OLD_CONFIG_REFERENCE.yml` wholesale over `_config.yml`.
- Use the new `_config.yml` structure and migrate only personal values.
- Preserve real publications, pages, files, images, links, and permalinks.
- Do not invent academic positions, publications, awards, projects, dates, or research claims.
- Remove template demonstration content not belonging to Peijun Li.
- Do not edit `_site`, `vendor`, `.bundle`, `.jekyll-cache`, `.sass-cache`, or other generated files.
- Do not commit or push automatically.

## Theme rules

- Use the built-in Academic Pages v0.8.4 light/dark theme system.
- Do not restore the old custom dark-mode implementation.
- Do not create a second theme toggle.
- Verify text, links, navigation, sidebar, footer, tables, code blocks, and buttons in both themes.

## Validation

After editing:

1. Run `bundle exec jekyll build`.
2. Run `git diff --check`.
3. Review YAML front matter and Liquid syntax.
4. Verify navigation and existing permalinks.
5. Report every changed file.