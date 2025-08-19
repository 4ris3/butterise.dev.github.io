# Butterise.dev

A modern, responsive website for Butterise.dev - an indie development company creating mobile apps like Autra.

## Features

- 🎨 **Modern Design**: Clean, responsive layout with Tailwind CSS
- 🌓 **Dark/Light Theme**: Toggle between dark and light modes
- 📱 **Mobile-First**: Responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Astro for optimal performance
- 📄 **Static Site**: Perfect for GitHub Pages deployment

## Pages

- **Home** (`/`): Studio introduction and navigation
- **Privacy Policy** (`/privacy`): Privacy policy information
- **Terms of Service** (`/terms`): Terms and conditions
- **About Autra** (`/autra`): Information about our flagship app

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/butterise.dev.git
   cd butterise.dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build

To build the site for production:

```bash
npm run build
```

### Preview

To preview the production build:

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. The workflow will:

1. Build the site when you push to the `main` branch
2. Deploy to GitHub Pages automatically
3. Use the repository name as the base path (e.g., `/butterise.dev`)

### Manual Deployment

If you prefer manual deployment:

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your hosting provider

## Customization

### Colors and Theme

The site uses Tailwind CSS with a custom color scheme. You can modify colors in the `tailwind.config.mjs` file.

### Content

- Update page content in the markdown files in `src/pages/`
- Modify the layout in `src/layouts/Layout.astro`
- Update the homepage in `src/pages/index.astro`

### Styling

All styling is done with Tailwind CSS classes. The design is responsive and includes:
- Hover effects on interactive elements
- Smooth transitions
- Dark/light theme support
- Mobile-first responsive design

## Project Structure

```
butterise.dev/
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Main layout component
│   └── pages/
│       ├── index.astro        # Homepage
│       ├── privacy.md         # Privacy policy
│       ├── terms.md           # Terms of service
│       └── autra.md          # About Autra app
├── public/
│   └── favicon.svg           # Site favicon
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
└── package.json              # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- **Studio**: Butterise.dev
- **Website**: [butterise.studio](https://butterise.studio)
- **Email**: contact@butterise.studio

---

Built with ❤️ by Butterise.dev
