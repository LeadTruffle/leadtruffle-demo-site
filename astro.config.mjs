import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGithubPagesBuild =
  process.env.GITHUB_ACTIONS === 'true' || process.env.GITHUB_PAGES === 'true'

const site = process.env.SITE_URL ?? 'https://leadtruffle.github.io'
const base =
  process.env.BASE_PATH ??
  (isGithubPagesBuild && repositoryName ? `/${repositoryName}` : '/')

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
})
