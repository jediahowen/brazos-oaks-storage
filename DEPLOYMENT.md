# Deployment Guide - Bluehost Static Export

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure GTM (Optional)
Create `.env.local` file:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### 3. Build Static Site
```bash
npm run build
```

This creates the `out/` directory with all static files.

### 4. Upload to Bluehost

1. Log into Bluehost cPanel
2. Open **File Manager**
3. Navigate to `public_html`
4. **Delete or backup** existing files
5. Upload **all contents** from the `out/` folder to `public_html`

**Important:** Upload the contents of `out/`, not the folder itself.

### 5. Verify

Visit your domain and test:
- All pages load correctly
- Navigation works
- Mobile menu functions
- GTM loads (check browser console for `dataLayer`)

## File Structure After Upload

```
public_html/
  ├── _next/          (Next.js assets)
  ├── unit-sizes/
  │   └── index.html
  ├── faq/
  │   └── index.html
  ├── about/
  │   └── index.html
  ├── rent/
  │   └── index.html
  ├── contact/
  │   └── index.html
  ├── index.html      (Home page)
  └── ... (other assets)
```

## Environment Variables on Bluehost

If Bluehost supports environment variables, set `NEXT_PUBLIC_GTM_ID` there. Otherwise, the GTM ID is baked into the build during `npm run build`.

## Troubleshooting

### Pages return 404
- Ensure you uploaded the contents of `out/`, not the folder
- Check that `index.html` files exist in each route folder
- Verify `.htaccess` isn't interfering (Next.js static export doesn't need it)

### GTM not loading
- Check browser console for errors
- Verify `NEXT_PUBLIC_GTM_ID` was set during build
- Check that GTM container ID is correct format: `GTM-XXXXXXX`

### Booking embed not working
- Check browser console for errors
- Verify booking snippet HTML in `src/lib/bookingSnippet.js`
- Ensure external booking URL is correct

