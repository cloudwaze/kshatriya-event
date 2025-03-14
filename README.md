# Kshatriya Event Website 2025

A modern, full-featured event website built with Next.js for the Kshatriya Event 2025. The website combines static content with dynamic admin capabilities for event management.

## Features

- **Modern, Responsive Design**: Built with Tailwind CSS for all device sizes
- **Event Registration System**: Allow attendees to register for the event
- **Sponsor Management**: Full CRUD operations for managing event sponsors
- **Admin Dashboard**: Secure admin panel for site management
- **Dynamic Content**: Rotating sponsor carousel, interactive schedules
- **SEO Optimized**: Built with best practices for search engine visibility

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

The site will be available at `http://localhost:3000` (or another port if 3000 is in use)

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build the production site
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx            # Home page
│   ├── admin/              # Admin section
│   │   ├── page.tsx        # Admin dashboard
│   │   ├── layout.tsx      # Admin layout with auth protection
│   │   └── sponsors/       # Sponsor management
│   │       ├── page.tsx    # Sponsors list
│   │       └── [id]/       # Add/edit sponsor pages
│   ├── register/           # Registration pages
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── Footer.tsx          # Global footer
│   ├── Header.tsx          # Navigation header
│   └── RotatingSponsors.tsx # Sponsor carousel component
└── lib/                    # Utility functions and data handlers
    └── sponsors.ts         # Sponsor data and API functions
```

## Admin Panel

The website includes a fully functional admin panel accessible at `/admin`. This panel provides functionality to manage various aspects of the event website.

### Admin Authentication

For demonstration purposes, the admin credentials are:
- **Username**: `admin`
- **Password**: `kshatriya2025`

These should be changed in a production environment.

### Features

1. **Dashboard**: Overview with key metrics and quick access to management features
2. **Sponsor Management**:
   - View all sponsors with filtering and sorting
   - Add new sponsors with validation
   - Edit existing sponsor details
   - Delete sponsors
   - Track payment status and contact information

### Data Storage

The current implementation uses browser localStorage for data persistence. In a production environment, this would be replaced with:
- A backend API
- Database storage
- Proper authentication system

## Sponsor Tiers

The website has four sponsor tiers:

1. **Platinum**: Premier sponsorship level with maximum visibility
2. **Gold**: High visibility throughout the site
3. **Silver**: Medium visibility in multiple sections
4. **Bronze**: Basic visibility in the sponsors section

Each tier has designated styling and placement priority in the rotating carousel.

## Deployment

The site is optimized for deployment to various hosting platforms:

### Static Hosting (GitHub Pages, Vercel, Netlify)

```bash
npm run build
```

This generates a static version of the site in the `out` directory.

### Server-Side Rendering (Vercel, AWS, DigitalOcean)

For platforms that support Next.js server components, deploy the entire codebase.

## Future Development

Areas planned for future development:

1. **Real Backend Integration**: Replace localStorage with actual database
2. **Event Schedule Management**: Admin interface for schedule updates
3. **Registration System**: Online registration with payment processing
4. **User Authentication**: For registered attendees
5. **Email Notifications**: For registrations and updates

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
