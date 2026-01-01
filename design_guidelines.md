# Design Guidelines: Brazos Oaks Storage

## Design Approach: Minimal Professional System

**Justification**: Self-storage is a trust-driven, utility-focused industry. Users need clear information, pricing transparency, and confident conversion paths. We'll use a clean, minimal design inspired by modern SaaS landing pages (like Stripe's clarity + Airbnb's approachability) adapted for local business credibility.

**Core Principles**: 
- Trustworthy simplicity over flashy design
- Information hierarchy that guides to conversion
- Performance-first (every element earns its place)

---

## Typography

**Font Families** (Google Fonts):
- **Primary**: Inter (headings, UI elements, body) - neutral, professional, excellent readability
- **Accent**: DM Sans (optional CTAs/special callouts) - friendly warmth

**Type Scale**:
- Hero H1: `text-5xl md:text-6xl font-bold` (48-60px)
- Page H1: `text-4xl md:text-5xl font-bold` (36-48px)
- H2: `text-3xl md:text-4xl font-semibold` (30-36px)
- H3: `text-xl md:text-2xl font-semibold` (20-24px)
- Body: `text-base md:text-lg` (16-18px)
- Small: `text-sm` (14px)

**Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

---

## Layout System

**Spacing Units**: Use Tailwind's `2, 4, 6, 8, 12, 16, 20, 24` scale consistently
- Component padding: `p-4` to `p-8`
- Section spacing: `py-12 md:py-20`
- Container gaps: `gap-6` to `gap-12`

**Container Strategy**:
- Max width: `max-w-7xl mx-auto px-4 md:px-8`
- Narrow content (forms/text): `max-w-3xl mx-auto`

---

## Component Library

### Navigation
- **Desktop**: Horizontal nav, logo left, links center/right, CTA button (Reserve Unit) in primary color
- **Mobile**: Hamburger menu, full-screen overlay with large touch targets (min-height: 48px)
- Sticky on scroll with subtle shadow
- Links: Medium weight, hover underline effect

### Hero Section (Home)
- **Layout**: Full-width background image of clean storage facility
- **Structure**: Centered content overlay with backdrop blur on text container
- **Content**: 
  - H1 headline: "Secure Storage in Waco You Can Trust"
  - Subheading: Location + key benefit
  - Two CTAs: Primary "Reserve a Unit" (button with blur background), Secondary "Call (254) 744-5127" (outlined)
- **Height**: `min-h-[600px] md:min-h-[700px]`

### Feature Cards
- **Grid**: 3 columns desktop (`grid-cols-1 md:grid-cols-3`), single column mobile
- **Card design**: White background, subtle shadow (`shadow-md`), rounded corners (`rounded-lg`), padding `p-6`
- **Icon**: Heroicons outline, 32px size, centered above text
- **Content**: Icon → H3 title → short description (2-3 lines)
- Features: 24/7 Access, Security Cameras, Clean Units, Month-to-Month, Wide Driveways, Convenient Location

### Unit Size Cards (Unit Sizing Page)
- **Layout**: 2 columns desktop (`grid-cols-1 md:grid-cols-2`), stacked mobile
- **Card structure**: 
  - Size badge: Bold, slightly larger text (e.g., "10' × 10'")
  - Dimensions subtitle
  - "What fits" bulleted list (3-4 items)
  - Price range or "Starting at $XX/month"
  - "Reserve This Size" button
- **Visual**: Light border, no heavy shadows, ample padding `p-6 md:p-8`

### CTA Buttons
- **Primary**: Solid background with slight blur when over images, `px-8 py-3 md:px-10 py-4`, rounded `rounded-lg`, bold text
- **Secondary**: Outlined border, transparent background, same padding
- **Size**: Generous touch targets (min 48px height)

### Footer
- **Structure**: 3-column grid desktop (Contact | Quick Links | Business Hours), stacked mobile
- **Content**: 
  - Address, phone (clickable tel: link), email
  - Navigation links
  - Hours of operation
  - Social media icons (if applicable)
- **Copyright**: Centered below columns, small text
- **Background**: Light neutral or subtle texture

### FAQ Section
- **Accordion pattern**: Question as clickable header with chevron icon, answer expands below
- **Spacing**: `space-y-4` between items
- **Interaction**: Smooth expand/collapse, only one open at a time (optional)

### Contact Form (Contact Page)
- **Layout**: 2-column on desktop (Form | Contact Info + Map), single column mobile
- **Form fields**: Name, Email, Phone, Unit Size Interest (dropdown), Message (textarea)
- **Validation**: Clear error states, inline validation
- **Submit button**: Full-width mobile, auto-width desktop

---

## Images

**Hero Image**: 
- Professional photo of clean, well-lit storage facility exterior with wide driveways
- Alternative: Aerial view showing security fencing and organized rows of units
- Treatment: Subtle darkening overlay (20-30% opacity) to ensure text readability

**Unit Sizing Page**: 
- Optional small icons or simple graphics showing unit dimensions (not photos)
- Or single comparison image showing relative sizes

**About Page**:
- Optional team photo or additional facility photos
- Keep minimal - 1-2 images maximum

---

## Special Considerations

**Booking Embed Section** (/rent page):
- Centered container, `max-w-4xl`
- Headline: "Reserve Your Unit Online"
- "Load Reservation Tool" button triggers embed
- Fallback: "Call to Reserve" phone CTA visible above/beside embed area
- Minimal surrounding chrome - let embed be focal point

**Mobile-First Mandates**:
- All tap targets minimum 48px
- Readable text without zoom (16px minimum body)
- Simplified navigation (hamburger)
- Stacked layouts, never horizontal scroll
- Phone number as tap-to-call link with prominent placement

**Performance Notes**:
- Lazy load below-fold images
- Optimize hero image (WebP format, max 200KB)
- Use CSS for decorative elements over images where possible