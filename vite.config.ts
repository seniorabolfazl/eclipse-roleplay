import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// If you deploy to https://<username>.github.io/<repo-name>/, base MUST
// match "/<repo-name>/" exactly (with slashes), or assets will 404.
// If you deploy to a user/org root site (<username>.github.io) or a
// custom domain, set base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/eclipse-roleplay/',
})
