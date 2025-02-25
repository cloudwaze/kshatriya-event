# Kshatriya Event Website

A static event website built with Next.js and hosted on GitHub Pages. The website allows users to register for events and retrieve their passes.

## Features

- Modern, responsive design
- Event registration system
- Pass retrieval functionality
- Static site generation for GitHub Pages hosting

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm 9.x or later

### Installation

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

The site will be available at `http://localhost:3000`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build the production site
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. To deploy manually:

1. Configure GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Set the source to "GitHub Actions"

2. Push your changes to the main branch:
```bash
git push origin main
```

3. The GitHub Action will automatically build and deploy your site

## Project Structure

```
src/
├── app/
│   ├── page.tsx            # Home page
│   ├── register/
│   │   └── page.tsx        # Event registration page
│   ├── retrieve-pass/
│   │   └── page.tsx        # Pass retrieval page
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
└── styles/                # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
