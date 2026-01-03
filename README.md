# Brazos Oaks Storage - Marketing Website

A fast, lightweight marketing website for Brazos Oaks Storage built with Next.js (App Router) and static export for Bluehost hosting.

## Features

- ✅ Next.js 14 with App Router
- ✅ Static export (no server runtime required)
- ✅ Mobile-first, responsive design
- ✅ Google Tag Manager integration
- ✅ Booking snippet embed on /rent page
- ✅ Lightweight CSS modules (no heavy UI frameworks)
- ✅ SEO optimized with metadata per page
- ✅ Accessible components

## Pages

- `/` - Home page
- `/unit-sizes/` - Unit sizing guide with "what fits" cards
- `/faq/` - Frequently asked questions
- `/about/` - About us page
- `/rent/` - Reservation page with booking embed
- `/contact/` - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (optional):
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Google Tag Manager ID:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the static site:
```bash
npm run build
```

This creates an `out/` directory with all static files ready for deployment.

## Deployment to Bluehost

### Step 1: Build the Site

```bash
npm run build
```

This generates the static files in the `out/` directory.

### Step 2: Upload to Bluehost

1. Log into your Bluehost cPanel
2. Navigate to **File Manager**
3. Go to `public_html` (or your domain's root directory)
4. **Delete or backup** any existing files in `public_html`
5. Upload **all contents** from the `out/` directory to `public_html`

**Important:** Upload the contents of `out/`, not the `out` folder itself.

The structure should be:
```
public_html/
  ├── _next/
  ├── unit-sizes/
  ├── faq/
  ├── about/
  ├── rent/
  ├── contact/
  ├── index.html
  └── ... (other files)
```

### Step 3: Verify Deployment

1. Visit your domain in a browser
2. Test all pages:
   - Home page loads
   - Navigation works
   - All routes are accessible
   - Mobile menu works

## Post-Deployment Checklist

### ✅ Page Routing
- [ ] Home page (`/`) loads correctly
- [ ] `/unit-sizes/` page loads
- [ ] `/faq/` page loads
- [ ] `/about/` page loads
- [ ] `/rent/` page loads
- [ ] `/contact/` page loads
- [ ] Navigation links work on all pages
- [ ] Mobile menu works correctly

### ✅ Google Tag Manager
- [ ] GTM script loads (check browser console)
- [ ] `dataLayer` is available (check browser console: `window.dataLayer`)
- [ ] Test CTA clicks fire `cta_click` events
- [ ] Test booking embed loads and fires `rent_embed_loaded` event
- [ ] Test contact form submission fires `contact_submit` event

### ✅ Booking Embed
- [ ] `/rent/` page shows "Load Reservation Tool" button
- [ ] Clicking button loads the booking snippet
- [ ] Booking snippet displays correctly
- [ ] External link button works (if configured)
- [ ] `rent_embed_loaded` event fires when embed loads

### ✅ Contact Form
- [ ] Form fields are accessible
- [ ] Form validation works
- [ ] Success message appears on submit
- [ ] `contact_submit` event fires on submit

### ✅ Mobile Responsiveness
- [ ] Site looks good on mobile devices
- [ ] Mobile menu opens and closes correctly
- [ ] All buttons and links are tappable
- [ ] Text is readable on small screens

## Configuration

### Google Tag Manager

Set the `NEXT_PUBLIC_GTM_ID` environment variable in `.env.local` (for development) or configure it in your Bluehost hosting environment if they support environment variables.

If GTM ID is not set, the site will still work but analytics tracking will be disabled (events will only log to console).

### Booking Snippet

Edit `src/lib/bookingSnippet.js` to replace the placeholder HTML with your actual booking provider's embed code.

## Project Structure

```
src/
  ├── app/
  │   ├── layout.js          # Root layout with Nav/Footer
  │   ├── globals.css         # Global styles
  │   ├── page.js             # Home page
  │   ├── unit-sizes/
  │   │   └── page.js
  │   ├── faq/
  │   │   └── page.js
  │   ├── about/
  │   │   └── page.js
  │   ├── rent/
  │   │   └── page.js
  │   └── contact/
  │       └── page.js
  ├── components/
  │   ├── Nav.js
  │   ├── Footer.js
  │   ├── CTAButton.js
  │   ├── FeatureCard.js
  │   ├── UnitSizeCard.js
  │   ├── FAQAccordion.js
  │   └── BookingEmbed.js
  └── lib/
      ├── analytics.js        # GTM tracking helpers
      ├── bookingSnippet.js   # Booking embed HTML
      └── data.js             # Unit sizes, FAQ, features
```

## Analytics Events

The site tracks the following events via Google Tag Manager:

- `cta_click` - When "Reserve a Unit" or other CTA buttons are clicked
  - Parameters: `cta_name`, `page`
- `rent_embed_loaded` - When booking snippet is loaded on /rent page
  - Parameters: `page`
- `contact_submit` - When contact form is submitted
  - Parameters: `page`

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production (creates `out/` directory)
- `npm run start` - Start production server (not needed for static export)
- `npm run lint` - Run ESLint

## Support

For issues or questions, contact the development team.

