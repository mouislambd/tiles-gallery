# Tile Gallery

A modern tile showcase website built with Next.js where users can browse, search, and explore premium ceramic, marble, and mosaic tiles.
## Live URL
https://tiles-gallery.vercel.app

## Key Features
- Browse and search tiles by title
- View detailed tile information
- User authentication (Register & Login) with BetterAuth
- Google OAuth login
- Private routes for authenticated users
- Responsive design for mobile, tablet, and desktop
- Featured tiles slider with SwiperJS
- My Profile page with update functionality

## NPM Packages Used
- `next` - React framework
- `better-auth` - Authentication
- `firebase` - Database
- `swiper` - Tile slider
- `json-server` - Mock API for tiles data
- `tailwindcss` - Styling

## How to Run
\`\`\`bash
npm install
npm run dev
npx json-server db.json --port 5000
\`\`\`