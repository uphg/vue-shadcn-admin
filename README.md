# Vue-Best

**English** | [中文](README.zh-CN.md) 

Modern Vue 3 project best practices template.

## Project Overview

Vue-Best is a carefully designed Vue 3 project foundation template that integrates the most popular frontend technology stack, providing developers with out-of-the-box best practice solutions. This template is particularly suitable for quickly launching enterprise-level applications, admin management systems, and modern web application development.

## Project Structure

The following is the project directory structure convention.

```
src/
├── assets/                    # Static resources
│   ├── icons/                 # SVG icons
│   ├── images/                # Images
│   └── styles/                # CSS styles
├── components/                # Common components
│   ├── features/              # Business components
│   ├── layout/                # Layout components
│   └── ui/                    # UI library components
├── hooks/                     # Vue composition functions
│   ├── use-a-foo.tsx
│   └── use-b-bar.tsx
├── pages/                     # Page components
│   ├── home/
│   │   ├── home-page.tsx
│   │   ├── home-api.tsx
│   │   └── home-store.tsx
│   ├── about/
│   │   ├── about-page.tsx
│   │   ├── about-api.tsx
│   │   └── about-store.tsx
│   └── ...
├── router/                     # Page routing
├── stores/                     # Global state
├── types/                      # TypeScript type files
├── App.vue
└── main.ts
```

## Technology Stack Highlights

- **Vue 3** - Using the latest version of Vue framework, enjoying the development experience brought by Composition API
- **TypeScript** - Complete type support, improving code robustness and development efficiency
- **Tailwind CSS v4** - Next-generation utility-first CSS framework with support for the latest features
- **shadcn-vue** - Beautiful and highly customizable UI component library
- **Vue Router** - Official routing solution with support for dynamic routing and navigation guards
- **unplugin-auto-import** - On-demand automatic API imports with TypeScript support
- **unplugin-icons** - On-demand access to thousands of icon libraries as components, with support for local icon auto-import

## Project Features

- Pre-configured development toolchain (Vite, ESLint, TypeScript, etc.)
- Reasonable project directory structure
- Responsive design support
- Modern UI component encapsulation
- Type-safe development experience
- Excellent development experience and build performance