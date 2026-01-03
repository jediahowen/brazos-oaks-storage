# Deployment Guide - Brazos Oaks Storage

## Quick Start Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (creates `out/` directory)
npm run build
```

## Pre-Deployment Setup

### 1. Configure Google Tag Manager (Optional)

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

Replace `GTM-XXXXXXX` with your actual Google Tag Manager ID from [tagmanager.google.com](https://tagmanager.google.com).

**Note:** If GTM ID is not set, the site will still work but analytics events will only log to the browser console.

### 2. Configure Booking Snippet

Edit `src/lib/bookingSnippet.js` and replace the placeholder HTML with your actual booking provider's embed code.

Also update `EXTERNAL_BOOKING_URL` if you have a direct booking URL.

## Building for Bluehost

### Step 1: Build the Static Site

```bash
npm run build
```

This command:
- Compiles all pages and components
- Generates static HTML files
- Creates an `out/` directory with all production files
- Optimizes assets for production

**Build Output:** The `out/` directory contains everything you need to upload.

### Step 2: Verify Build Output

After building, check that the `out/` directory contains:
- `index.html` (home page)
- `unit-sizes/` folder with `index.html`
- `faq/` folder with `index.html`
- `about/` folder with `index.html`
- `rent/` folder with `index.html`
- `contact/` folder with `index.html`
- `_next/` folder with JavaScript and CSS assets

## Uploading to Bluehost

### Method 1: Using cPanel File Manager

1. **Log into Bluehost cPanel**
   - Go to your Bluehost account
   - Navigate to **File Manager**

2. **Navigate to public_html**
   - Open the `public_html` folder
   - This is your website's root directory

3. **Backup Existing Files (if any)**
   - Select all existing files
   - Create a backup folder or download them

4. **Delete Existing Files**
   - Delete all files in `public_html` (except `.htaccess` if you have custom rules)

5. **Upload New Files**
   - Go to the `out/` directory in your local project
   - **Select ALL contents** of the `out/` folder
   - Upload them to `public_html`
   
   **Important:** Upload the **contents** of `out/`, not the `out` folder itself.

6. **Verify File Structure**
   Your `public_html` should look like:
   ```
   public_html/
     ├── _next/
     │   └── (static assets)
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
     └── index.html
   ```

### Method 2: Using FTP/SFTP

1. **Connect via FTP**
   - Use an FTP client (FileZilla, Cyberduck, etc.)
   - Connect to your Bluehost server
   - Navigate to `public_html`

2. **Upload Files**
   - Upload all contents from the local `out/` directory
   - Maintain the folder structure
   - Ensure all files upload successfully

## Post-Deployment Testing Checklist

### ✅ Basic Functionality

- [ ] **Home Page** (`/`) loads correctly
- [ ] **Navigation** works on all pages
- [ ] **Mobile Menu** opens and closes properly
- [ ] **All Links** work correctly
- [ ] **Footer** displays properly

### ✅ Page-Specific Tests

- [ ] **Unit Sizes** (`/unit-sizes/`) - All 5 unit cards display
- [ ] **FAQ** (`/faq/`) - Accordion opens/closes, all questions visible
- [ ] **About** (`/about/`) - Content displays correctly
- [ ] **Rent** (`/rent/`) - "Load Reservation Tool" button appears
- [ ] **Contact** (`/contact/`) - Form displays, contact info visible

### ✅ Google Tag Manager

1. **Check GTM Script Loading**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Type: `window.dataLayer`
   - Should return an array (not undefined)

2. **Test Event Tracking**
   - Click any "Reserve a Unit" button
   - In Console, check: `window.dataLayer`
   - Should see `cta_click` event

3. **Test Booking Embed**
   - Go to `/rent/` page
   - Click "Load Reservation Tool"
   - Check `window.dataLayer` for `rent_embed_loaded` event

4. **Test Contact Form**
   - Go to `/contact/` page
   - Fill out and submit the form
   - Check `window.dataLayer` for `contact_submit` event

### ✅ Booking Embed

- [ ] `/rent/` page shows "Load Reservation Tool" button
- [ ] Clicking button loads the booking snippet
- [ ] Booking snippet displays correctly (after you paste your code)
- [ ] "Open in New Window" button works (if configured)
- [ ] No JavaScript errors in console

### ✅ Mobile Responsiveness

- [ ] Site looks good on mobile devices
- [ ] Mobile menu works correctly
- [ ] All buttons are tappable
- [ ] Text is readable on small screens
- [ ] Images scale properly
- [ ] Forms are usable on mobile

### ✅ Performance

- [ ] Pages load quickly
- [ ] No console errors
- [ ] Images load properly
- [ ] CSS styles apply correctly

## Troubleshooting

### Pages Show 404

**Problem:** Routes like `/unit-sizes` return 404

**Solution:** 
- Ensure you uploaded the contents of `out/`, not the folder itself
- Verify folder structure matches expected layout
- Check that `index.html` files exist in each route folder

### GTM Not Loading

**Problem:** `window.dataLayer` is undefined

**Solution:**
- Check that `NEXT_PUBLIC_GTM_ID` was set during build
- Rebuild the site: `npm run build`
- Verify GTM ID format: `GTM-XXXXXXX`
- Check browser console for errors

### Booking Embed Not Working

**Problem:** Booking snippet doesn't load

**Solution:**
- Verify you've pasted your booking code in `src/lib/bookingSnippet.js`
- Rebuild: `npm run build`
- Check browser console for JavaScript errors
- Ensure your booking provider's script allows embedding

### Styles Not Loading

**Problem:** Site looks unstyled

**Solution:**
- Verify `_next/` folder was uploaded
- Check that CSS files exist in `_next/static/css/`
- Clear browser cache
- Check browser console for 404 errors on CSS files

## Environment Variables on Bluehost

Bluehost shared hosting typically doesn't support environment variables for static sites. You have two options:

1. **Build with GTM ID** (Recommended)
   - Set `NEXT_PUBLIC_GTM_ID` in `.env.local` before building
   - The GTM ID will be baked into the static files
   - Rebuild and re-upload if you need to change it

2. **Manual GTM Injection**
   - If you need to change GTM ID without rebuilding, you can manually edit the HTML files
   - Or use Bluehost's custom code injection feature (if available)

## Maintenance

### Updating Content

1. Edit files in `src/` directory
2. Run `npm run build`
3. Upload new `out/` contents to Bluehost

### Updating Booking Snippet

1. Edit `src/lib/bookingSnippet.js`
2. Run `npm run build`
3. Upload new `out/` contents to Bluehost

### Adding New Pages

1. Create new page in `src/app/your-page/page.js`
2. Add route to navigation in `src/components/Nav.js`
3. Run `npm run build`
4. Upload new `out/` contents to Bluehost

## Support

For issues or questions:
- Check browser console for errors
- Verify file structure matches expected layout
- Ensure all files uploaded successfully
- Test in incognito/private browsing mode

