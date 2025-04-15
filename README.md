# Kshatriya Event Website - Static GitHub Pages Version

A modern, static event website built with Next.js for the Kshatriya Event 2025. The application uses static data and is optimized for GitHub Pages hosting.

## Features

- **Modern, Responsive Frontend**: Built with Next.js and Tailwind CSS
- **Static Site Generation**: Pre-rendered HTML for fast loading and SEO benefits
- **Event Registration System**: Simple, client-side event registration
- **Sponsor Showcase**: Display event sponsors with tier-based categorization
- **Contact Form**: Integrated with FormSpree for message submissions
- **GitHub Pages Deployment**: Automated deployment with GitHub Actions

## Project Structure

```
kshatriya-event/                # Root project directory
├── public/                     # Static files
├── src/                        # Source code
│   ├── app/                    # Next.js app directory
│   ├── components/             # React components
│   ├── data/                   # Static JSON data
│   └── lib/                    # Frontend utilities
├── package.json                # Dependencies
├── next.config.js              # Next.js configuration
└── .github/                    # GitHub Actions workflows
```

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (version 9 or higher)

### Development Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/kshatriya-event.git
cd kshatriya-event
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The development server will be available at `http://localhost:3000`.

## Static Site Generation

To build the static site:

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

### Testing the Static Build Locally

To test the static build locally:

1. Comment out the `basePath` in `next.config.js`:
```js
// basePath: '/kshatriya-event',
```

2. Build the site:
```bash
npm run build
```

3. Serve the static files:
```bash
npx serve out
```

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push to the main branch, the workflow in `.github/workflows/deploy.yml` will:

1. Build the Next.js application
2. Export static files 
3. Deploy them to GitHub Pages

For GitHub Pages deployment, make sure the `basePath` in `next.config.js` is set to your repository name:

```js
basePath: '/your-repo-name',
```

## Customization

### Form Submissions

The contact form uses client-side handling. For the form to work properly in production:

1. Create an account on [FormSpree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form endpoint in `src/app/contact-us/page.tsx`

## License

This project is licensed under the MIT License. 