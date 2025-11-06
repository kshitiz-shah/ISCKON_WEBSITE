# ISKCON Pune Landing Page

## Overview

This project is a landing page website for ISKCON Pune (International Society for Krishna Consciousness), designed to showcase the temple's programs, schedule, teachings, and community activities. The site serves as a digital presence for visitors to learn about Krishna consciousness, daily temple activities, and ways to engage with the spiritual community.

The application is a full-stack web application built with a modern React frontend and Express backend, configured for deployment on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18+ with TypeScript for type safety
- Wouter for lightweight client-side routing (alternative to React Router)
- Single-page application (SPA) architecture with multiple routes: Home, About, Programs, Schedule, Contact

**UI Component System**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom theme configuration
- Design system following spiritual/devotional aesthetics (saffron, burgundy, cream color palette)
- Typography: Crimson Text (serif) for headings, Inter (sans-serif) for body text, Playfair Display for spiritual quotes

**State Management**
- TanStack Query (React Query) for server state management and data fetching
- Local React state for form inputs and UI interactions
- Custom query client configuration with credential-based authentication support

**Build System**
- Vite as the build tool and development server
- Path aliases configured for clean imports (@/, @shared/, @assets/)
- Separate client and server build outputs

### Backend Architecture

**Server Framework**
- Express.js for HTTP server and routing
- Node.js runtime with ESM module support
- Development/production environment detection

**Development Features**
- Vite integration in development mode for HMR (Hot Module Replacement)
- Custom logging middleware for API request tracking
- Replit-specific plugins for development experience

**API Structure**
- RESTful API pattern with `/api` prefix convention
- Centralized error handling middleware
- Routes registered through modular route system

### Data Storage Solutions

**Database Configuration**
- PostgreSQL as the primary database (configured via Neon serverless driver)
- Drizzle ORM for type-safe database operations
- Schema-first approach with database migrations

**Schema Design**
- Users table with UUID primary keys, username/password authentication
- Zod schema validation integrated with Drizzle for runtime type checking
- Migration files stored in `/migrations` directory

**Storage Interface**
- Abstract `IStorage` interface for CRUD operations
- In-memory storage implementation (`MemStorage`) for development/testing
- Easy swapping between storage implementations without changing application code

### Authentication and Authorization

**Current Implementation**
- Basic user schema with username/password fields
- Session-based authentication infrastructure (connect-pg-simple for session storage)
- Credential-based requests with cookie support configured in fetch client

**Design Pattern**
- Storage layer abstraction allows for future authentication strategy changes
- Query client configured to handle 401 unauthorized responses gracefully

### External Dependencies

**UI Libraries**
- Radix UI component primitives (dialogs, dropdowns, navigation, etc.)
- Lucide React for iconography
- Embla Carousel for image carousels
- cmdk for command palette interfaces

**Form Handling**
- React Hook Form for form state management
- Hookform resolvers for validation integration
- Zod for schema validation

**Date & Time**
- date-fns for date formatting and manipulation

**Database & ORM**
- @neondatabase/serverless for PostgreSQL connection
- drizzle-orm for database queries
- drizzle-zod for schema-to-validation integration
- drizzle-kit for migrations

**Development Tools**
- tsx for running TypeScript in Node.js during development
- esbuild for production server bundling
- @replit plugins for Replit-specific development features
- PostCSS with Tailwind CSS and Autoprefixer

**Styling**
- Tailwind CSS with custom configuration
- class-variance-authority for variant-based styling
- clsx and tailwind-merge for conditional class composition

### Design System

**Color Scheme**
- Primary: Deep saffron (30 85% 55%) for spiritual/sacred elements
- Secondary: Rich burgundy (350 70% 35%) for devotional depth
- Accents: Golden yellow (45 90% 60%) for CTAs and highlights
- Backgrounds: Warm cream (45 25% 96%) and soft gray (220 10% 95%)
- Dark elements: Deep navy (220 40% 15%) for footers/dark mode

**Component Patterns**
- Card-based layouts with soft shadows and rounded corners
- Consistent spacing using Tailwind's spacing scale (4, 8, 12, 16, 24)
- Generous section padding (py-16, py-24) for breathing room
- Alternating section backgrounds for visual hierarchy

**Imagery**
- Temple deity images for hero sections
- Activity and festival photography for galleries
- Spiritual symbols and lotus motifs for decorative elements
- Warm gradients (saffron to gold) for overlays