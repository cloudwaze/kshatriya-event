# Kshatriya Event Website - Static GitHub Pages Version

This is a static version of the Kshatriya Event Website, optimized for deployment on GitHub Pages. This version has been converted to operate without any backend dependencies.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- Completely static site that can be hosted on GitHub Pages
- Event information and registration
- Sponsor showcase
- Contact form (using FormSpree for form submissions)

## Development

### Prerequisites

- Node.js 18+ 
- npm 9+

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/kshatriya-event.git
cd kshatriya-event/frontend
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Static Site Generation

To build the static site:

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push to the main branch, the workflow in `.github/workflows/deploy.yml` will:

1. Build the Next.js application
2. Export static files 
3. Deploy them to GitHub Pages

The site will be available at `https://yourusername.github.io/kshatriya-event/`

## Customization

### Base Path

The site is configured to run at the `/kshatriya-event` path. If your repository has a different name, update the `basePath` in `next.config.js`:

```js
module.exports = {
  // other config...
  basePath: '/your-repo-name',
};
```

### Form Submissions

The contact and registration forms use client-side handling. For the contact form to work properly in production:

1. Create an account on [FormSpree](https://formspree.io/)
2. Create a new form and get your form ID
3. Update the form endpoint in `src/app/contact-us/page.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
});
```

## Structure

- `src/app/*` - Next.js app router pages
- `src/components/*` - React components  
- `src/data/*` - Static JSON data files
- `src/lib/*` - Utility functions and types
- `public/*` - Static assets like images

## License

This project is licensed under the MIT License - see the LICENSE file for details. 