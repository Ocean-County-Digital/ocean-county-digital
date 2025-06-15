# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (port 3000)
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint code quality checks
- `pnpm format` - Format code with Prettier

## Project Architecture

This is a Next.js 15 web application for Ocean County Digital, built with TypeScript and Bootstrap for styling.

### Key Architecture Notes

- **Routing**: Uses Next.js App Router exclusively
- **Styling Strategy**: Combination of Bootstrap classes, CSS modules, and global CSS with custom properties
- **Package Manager**: Uses pnpm (version pinned to 10.7.0)
- **Font Strategy**: Uses `next/font` for optimized Google Fonts loading (Barlow, Roboto)

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `src/styles/` - Global and component-specific styles
- `public/assets/` - Static assets

### Development Notes

- TypeScript path mapping configured: `@/*` maps to `./src/*`
- ESLint configured with React, Next.js, and TypeScript rules
- Bootstrap 5.3.5 included but consider if fully utilized
- No testing framework currently configured