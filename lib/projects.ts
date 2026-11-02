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
  },
} satisfies Record<string, Project>;

export const featuredProjects = [
  projects.hibbullah,
  projects.sifaPharma,
  projects.hibbullahLanding,
  projects.visqode,
];
