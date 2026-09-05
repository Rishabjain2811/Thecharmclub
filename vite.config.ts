import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const [repositoryOwner, repositoryName] = process.env.GITHUB_REPOSITORY?.split('/') ?? []
const isUserSite = repositoryName === `${repositoryOwner}.github.io`

export default defineConfig({
  plugins: [react()],
  base: repositoryName && !isUserSite ? `/${repositoryName}/` : '/',
})
