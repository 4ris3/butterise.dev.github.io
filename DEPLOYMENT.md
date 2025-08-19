# Deployment Guide for Butterise.dev

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. **GitHub Repository**: Ensure your repository is named `butterise.dev`
2. **GitHub Pages**: Enable GitHub Pages in your repository settings
3. **GitHub Actions**: Ensure GitHub Actions are enabled

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that will:

1. **Trigger**: Automatically run when you push to the `main` branch
2. **Build**: Create a production build using the production configuration
3. **Deploy**: Deploy to GitHub Pages automatically

### Manual Deployment

If you prefer manual deployment:

1. **Build for Production**:
   ```bash
   npm run build:prod
   ```

2. **Upload to GitHub Pages**:
   - Go to your repository settings
   - Navigate to Pages section
   - Choose "Deploy from a branch"
   - Select the `gh-pages` branch or upload the `dist/` folder contents

### Configuration Files

- **Development**: `astro.config.mjs` (no base path)
- **Production**: `astro.config.production.mjs` (includes base path for GitHub Pages)

### Customization

#### Update GitHub Username

In `astro.config.production.mjs`, change:
```javascript
site: 'https://yourusername.github.io'
```

Replace `yourusername` with your actual GitHub username.

#### Update Base Path

If you change the repository name, update:
```javascript
base: '/your-repo-name'
```

### Troubleshooting

#### Build Errors

1. **Dependencies**: Ensure all dependencies are installed:
   ```bash
   npm install
   ```

2. **Configuration**: Check that the production config file exists and is correct

3. **GitHub Actions**: Check the Actions tab in your repository for error logs

#### Deployment Issues

1. **Base Path**: Ensure the base path in production config matches your repository name
2. **Branch**: Ensure GitHub Pages is configured to deploy from the correct branch
3. **Permissions**: Ensure GitHub Actions have the necessary permissions

### Local Testing

Before deploying, test the production build locally:

```bash
npm run build:prod
npm run preview
```

This will build using the production configuration and allow you to preview the site as it will appear on GitHub Pages.

### File Structure After Build

The build process creates:
```
dist/
├── index.html          # Homepage
├── privacy/            # Privacy policy
│   └── index.html
├── terms/              # Terms of service
│   └── index.html
├── autra/              # About Autra
│   └── index.html
├── _astro/             # Astro assets
└── favicon.svg         # Site favicon
```

### Notes

- The production build includes the base path `/butterise.dev` for GitHub Pages
- All internal links are automatically updated to include the base path
- The site will be available at `https://yourusername.github.io/butterise.dev`
