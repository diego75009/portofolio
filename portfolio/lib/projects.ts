export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;       // short — for the card
  longDescription: string;   // detailed — for the project page
  tech: string[];
  link?: string;             // live demo
  github?: string;           // GitHub repo
  images?: string[];         // e.g. ['/projects/saas-dashboard/1.png']
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    year: "2024",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with customisable dashboards, role-based access and live data streaming. Built for scale — handles millions of events per day.",
    longDescription: `A fully-featured analytics platform designed for high-throughput SaaS products. The architecture centers around a real-time event pipeline that ingests, aggregates, and serves metrics with sub-second latency.

Key features include: drag-and-drop dashboard builder, role-based access control (RBAC) with team management, live data streaming via WebSockets, and a flexible query engine backed by Prisma and tRPC. The frontend leverages Next.js Server Components for fast initial loads while WebSocket connections keep widgets live.

The system is designed to handle millions of events per day through a combination of database indexing strategies, caching layers, and incremental static regeneration for non-realtime views.`,
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "tRPC"],
    link: "#",
    github: "#",
    images: [],
    featured: true,
  },
  {
    id: "ecommerce",
    year: "2024",
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with dynamic product pages, cart management, Stripe checkout and order tracking.",
    longDescription: `A modern e-commerce platform built from the ground up with a focus on performance and conversion. Product pages are statically generated at build time with ISR for inventory updates, delivering sub-100ms TTFBs.

The cart is managed client-side with optimistic UI updates and persisted to a PostgreSQL database for cross-device continuity. Stripe integration covers one-time payments, subscription billing, and webhook-based order lifecycle management.

Order tracking pages give customers real-time visibility into fulfilment status, powered by a lightweight event-sourcing pattern on the backend.`,
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
    github: "#",
    images: [],
  },
  {
    id: "design-system",
    year: "2023",
    title: "Component Design System",
    description:
      "Themeable component library with 40+ primitives, accessibility-first, documented in Storybook and published on npm.",
    longDescription: `An accessibility-first component library built with React and TypeScript, covering 40+ UI primitives from buttons and inputs to complex date pickers and data tables.

Every component ships with full keyboard navigation, ARIA attributes, and screen-reader compatibility validated against WCAG 2.1 AA criteria. The theming system uses CSS custom properties so teams can apply brand tokens without forking the library.

Documentation lives in Storybook with interactive controls, accessibility audit panels, and copy-paste code examples. The package is published on npm with tree-shaking support and zero runtime dependencies beyond React.`,
    tech: ["React", "TypeScript", "CSS", "Storybook"],
    link: "#",
    github: "#",
    images: [],
  },
  {
    id: "mobile-app",
    year: "2023",
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile app for workout logging and progress visualisation, with offline support and push notifications.",
    longDescription: `A cross-platform fitness companion built with React Native and Expo, targeting iOS and Android from a single codebase. Users can log workouts, track personal records, and visualise strength and cardio trends over time.

Offline-first architecture powered by a local SQLite database ensures the app remains fully functional without a connection. Changes sync to Supabase in the background when connectivity is restored, with conflict resolution handled via timestamps.

Push notifications remind users of scheduled sessions and celebrate milestones. The progress dashboard uses a custom SVG chart engine for smooth, 60fps animations on both platforms.`,
    tech: ["React Native", "Expo", "Supabase"],
    link: "#",
    github: "#",
    images: [],
  },
];
