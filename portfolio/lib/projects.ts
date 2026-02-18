export interface Project {
  id: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "saas-dashboard",
    year: "2024",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics platform with customisable dashboards, role-based access and live data streaming. Built for scale — handles millions of events per day.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "tRPC"],
    link: "#",
    featured: true,
  },
  {
    id: "ecommerce",
    year: "2024",
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with dynamic product pages, cart management, Stripe checkout and order tracking.",
    tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
    link: "#",
  },
  {
    id: "design-system",
    year: "2023",
    title: "Component Design System",
    description:
      "Themeable component library with 40+ primitives, accessibility-first, documented in Storybook and published on npm.",
    tech: ["React", "TypeScript", "CSS", "Storybook"],
    link: "#",
  },
  {
    id: "mobile-app",
    year: "2023",
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile app for workout logging and progress visualisation, with offline support and push notifications.",
    tech: ["React Native", "Expo", "Supabase"],
    link: "#",
  },
];
