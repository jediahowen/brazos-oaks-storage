# Brazos Oaks Storage

## Overview

A marketing website for Brazos Oaks Storage, a self-storage facility serving Waco and Elm Mott, Texas. The site is built as a React single-page application with a Node.js/Express backend. It provides information about storage unit sizes, pricing, FAQs, and allows customers to contact the business and reserve units through an embedded booking tool.

The design follows a minimal, professional aesthetic focused on trustworthiness and clear conversion paths, appropriate for a trust-driven, utility-focused industry like self-storage.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library (Radix primitives + Tailwind)
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (compiled with tsx for development, esbuild for production)
- **API Style**: RESTful JSON endpoints under `/api/*`
- **Storage**: Currently uses in-memory storage (`MemStorage` class), with Drizzle ORM schema ready for PostgreSQL migration

### Database Schema
Defined in `shared/schema.ts` using Drizzle ORM:
- `users` table: Basic user authentication (id, username, password)
- `contactMessages` table: Contact form submissions (id, name, email, phone, unitSize, message)
- Static data exports for `unitSizes`, `features`, and `faqItems`

### Key Design Patterns
- **Monorepo Structure**: Client code in `/client`, server in `/server`, shared types in `/shared`
- **Path Aliases**: `@/` for client source, `@shared/` for shared modules
- **Type Safety**: Shared Zod schemas for validation on both client and server
- **Component Architecture**: Reusable UI components in `/client/src/components/ui/`, page-specific components alongside pages

### Analytics Integration
- Google Tag Manager support via `VITE_GTM_ID` environment variable
- Custom event tracking for CTA clicks, booking embed loads, and contact form submissions

## External Dependencies

### Third-Party Services
- **Google Tag Manager**: Optional analytics integration (configured via `VITE_GTM_ID` environment variable)
- **Booking Provider**: Placeholder for external booking widget embed (configurable in `/client/src/lib/bookingSnippet.ts`)
- **Google Fonts**: Inter and DM Sans font families

### Database
- **PostgreSQL**: Configured via `DATABASE_URL` environment variable
- **Drizzle ORM**: Database toolkit with Drizzle Kit for migrations
- Currently running with in-memory storage; ready for PostgreSQL when provisioned

### Key NPM Packages
- Frontend: React, Wouter, TanStack Query, React Hook Form, Zod, Tailwind CSS, Radix UI primitives
- Backend: Express, Drizzle ORM, connect-pg-simple (for session storage)
- Build: Vite, esbuild, tsx