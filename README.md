# Shriharsha Gandani - Senior Data Engineer Portfolio

An interactive, high-fidelity portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed with a modern, high-contrast aesthetic, this single-page application highlights professional milestones, key projects, core technical skills, certifications, and an interactive AI Agent console.

## 🚀 How to Deploy to GitHub Pages

Deploying a Vite-built React application to GitHub Pages is highly straightforward. Below are the two recommended methods:

---

### Method 1: Automated Deployment via GitHub Actions (Recommended)

This is the cleanest and most modern approach. It builds and deploys your portfolio automatically every time you push to the `main` branch, without needing to commit your built `dist/` files manually.

#### Step 1: Configure Vite Base Path
Open `vite.config.ts` and set the `base` property to match your GitHub repository name:
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/<your-github-repo-name>/', // Replace with your exact repository name (e.g., '/portfolio/')
});
```

#### Step 2: Create a GitHub Actions Workflow
In your local project, create a directory structure `.github/workflows/` and add a new file named `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # Or your default branch

permissions:
  contents: write
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-weight: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Build Application
        run: npm run build

      - name: Upload Build Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 3: Enable Pages in GitHub Settings
1. Go to your repository on GitHub.
2. Navigate to **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **GitHub Actions**.
4. Push your changes to your `main` branch, and the workflow will build and publish your site!

---

### Method 2: Manual Deployment via the `gh-pages` Package

If you prefer deploying via a local CLI script, you can use the standard `gh-pages` helper package.

#### Step 1: Configure Vite Base Path
Ensure your `vite.config.ts` contains the correct repository base path:
```typescript
base: '/<your-github-repo-name>/',
```

#### Step 2: Install `gh-pages`
Install the package as a development dependency:
```bash
npm install gh-pages --save-dev
```

#### Step 3: Update `package.json` Scripts
Add `predeploy` and `deploy` scripts to your `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

#### Step 4: Run the Deployment Command
Execute the following command in your terminal to build and push the production assets to a dedicated `gh-pages` branch on GitHub:
```bash
npm run deploy
```

#### Step 5: Configure GitHub Pages Source
1. Go to your repository on GitHub.
2. Navigate to **Settings** -> **Pages**.
3. Under **Build and deployment** -> **Branch**, select `gh-pages` and `/ (root)`.
4. Click **Save**. Your site will be online shortly!

---

## 🛠️ Local Development

To run this portfolio locally on your computer:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/harshag68/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
