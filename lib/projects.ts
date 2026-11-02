export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  visual: "storefront" | "operations" | "landing" | "editor";
  technologies: readonly string[];
  repository: string;
  overview: string;
  implementation: string;
  highlights: readonly string[];
  workflow: readonly WorkflowStep[];
};

export type WorkflowStep = {
  id: string;
  title: string;
  description: string;
  input: boolean;
  output: boolean;
};

// Project data
export const projects = {
  hibbullah: {
    slug: "hibbullah",
    title: "Hibbullah",
    category: "Mobile commerce",
    description:
      "A pharmacy shopping app with distinct customer and shop-management experiences.",
    visual: "storefront",
    technologies: ["Expo", "React Native", "Supabase"],
    repository: "https://github.com/icrmahin/hibbullah",
    overview:
      "Hibbullah combines a customer shopping flow with separate authentication and administration routes for pharmacy operations.",
    implementation:
      "The mobile app uses Expo Router to separate customer, authentication, and admin areas, with Supabase for backend integration.",
    highlights: [
      "Customer and shop administration routes",
      "Expo Router navigation",
      "Supabase integration",
    ],
    workflow: [
      {
        id: "customer",
        title: "Customer app",
        description: "Browse the pharmacy",
        input: false,
        output: true,
      },
      {
        id: "catalog",
        title: "Product catalog",
        description: "Explore available products",
        input: true,
        output: true,
      },
      {
        id: "backend",
        title: "Supabase",
        description: "App data and services",
        input: true,
        output: true,
      },
      {
        id: "shop",
        title: "Shop admin",
        description: "Manage pharmacy operations",
        input: true,
        output: false,
      },
    ],
  },
  sifaPharma: {
    slug: "sifa-pharma",
    title: "Sifa Pharma",
    category: "Pharmacy operations",
    description:
      "A pharmacy platform for customer ordering, inventory, and shop operations.",
    visual: "operations",
    technologies: ["Expo", "React Native", "Supabase"],
    repository: "https://github.com/icrmahin/Sifa-Pharma",
    overview:
      "Sifa Pharma brings customer ordering and pharmacy administration into one mobile product, with separate customer and admin areas.",
    implementation:
      "The app is built with Expo and React Native, connected to Supabase, and includes stock, invoice, and inventory workflows.",
    highlights: [
      "Customer and admin experiences",
      "Realtime stock workflows",
      "Invoice and inventory tools",
    ],
    workflow: [
      {
        id: "customer",
        title: "Customer",
        description: "Browse and place orders",
        input: false,
        output: true,
      },
      {
        id: "orders",
        title: "Orders",
        description: "Create and track invoices",
        input: true,
        output: true,
      },
      {
        id: "inventory",
        title: "Inventory",
        description: "Update stock status",
        input: true,
        output: true,
      },
      {
        id: "admin",
        title: "Pharmacy admin",
        description: "Manage shop operations",
        input: true,
        output: false,
      },
    ],
  },
  hibbullahLanding: {
    slug: "hibbullah-landing",
    title: "Hibbullah Landing",
    category: "Product website",
    description:
      "A responsive product showcase for the Hibbullah Android pharmacy app.",
    visual: "landing",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    repository: "https://github.com/icrmahin/Hibbullah-landing-page",
    overview:
      "A product landing page introducing Hibbullah, an Android pharmacy shopping application.",
    implementation:
      "Built as a static React and TypeScript app with Vite and Tailwind CSS, organized into focused product, feature, and download sections.",
    highlights: [
      "Responsive product showcase",
      "Reusable page sections",
      "Static-site deployment",
    ],
    workflow: [
      {
        id: "product",
        title: "Hibbullah app",
        description: "Set the product context",
        input: false,
        output: true,
      },
      {
        id: "overview",
        title: "Overview",
        description: "Introduce the service",
        input: true,
        output: true,
      },
      {
        id: "showcase",
        title: "Showcase",
        description: "Present product features",
        input: true,
        output: true,
      },
      {
        id: "download",
        title: "Download",
        description: "Link to the Android app",
        input: true,
        output: false,
      },
    ],
  },
  visqode: {
    slug: "visqode",
    title: "Visqode.nvim",
    category: "Developer tools",
    description:
      "A soft dark theme family for Neovim, adapted from Zed's Voiton theme.",
    visual: "editor",
    technologies: ["Neovim", "Lua", "Treesitter"],
    repository: "https://github.com/icrmahin/visqode.nvim",
    overview:
      "Visqode is a configurable Neovim theme with dark, rose, cyan, and violet variants.",
    implementation:
      "Written in Lua, the theme coordinates editor syntax colors with common Neovim plugin interfaces and terminal colors.",
    highlights: [
      "Four coordinated color variants",
      "Configurable transparency and terminal colors",
      "Highlights for common Neovim plugins",
    ],
    workflow: [
      {
        id: "options",
        title: "Theme options",
        description: "Choose style and settings",
        input: false,
        output: true,
      },
      {
        id: "variants",
        title: "Color variants",
        description: "Dark, rose, cyan, violet",
        input: true,
        output: true,
      },
      {
        id: "syntax",
        title: "Syntax groups",
        description: "Apply editor colors",
        input: true,
        output: true,
      },
      {
        id: "plugins",
        title: "Plugin UI",
        description: "Coordinate Neovim plugins",
        input: true,
        output: false,
      },
    ],
  },
} satisfies Record<string, Project>;

export const featuredProjects = [
  projects.hibbullah,
  projects.sifaPharma,
  projects.hibbullahLanding,
  projects.visqode,
];
