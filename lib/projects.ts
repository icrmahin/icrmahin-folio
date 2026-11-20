export type ProjectVisual = "storefront" | "landing" | "editor";

export type ProjectApproach = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  visual: ProjectVisual;
  technologies: readonly string[];
  repository: string;
  contribution: string;
  overview: string;
  context: string;
  approach: readonly ProjectApproach[];
  capabilities: readonly string[];
  engineeringNotes: readonly string[];
};

export const projects = {
  hibbullah: {
    slug: "hibbullah",
    title: "Hibbullah",
    category: "Mobile product / Pharmacy commerce",
    description:
      "One Android-first product connecting a customer pharmacy storefront with the tools that run the shop.",
    visual: "storefront",
    technologies: [
      "Expo",
      "React Native",
      "Expo Router",
      "Supabase",
      "PostgreSQL",
      "Cloudinary",
    ],
    repository: "https://github.com/icrmahin/hibbullah",
    contribution: "Product design and end-to-end engineering",
    overview:
      "Hibbullah is a single-vendor pharmacy product with a customer shopping experience and an operations back office in the same Expo application. The customer side supports product discovery, search, cart, checkout, order tracking and return requests. The admin side supports catalogue, inventory, orders, customers and reporting.",
    context:
      "A pharmacy product needs to serve two very different jobs: help customers find and order medicines, while giving the shop a dependable way to manage stock and fulfil those orders. Those experiences share the same product data and business rules.",
    approach: [
      {
        title: "One application, two workspaces",
        description:
          "Expo Router separates customer, authentication and admin areas while keeping them in one React Native codebase. The customer journey and shop workflows can evolve without becoming disconnected products.",
      },
      {
        title: "Keep critical rules on the backend",
        description:
          "Supabase and PostgreSQL handle core search, order creation, reports and stock movement. The client is not responsible for recalculating inventory or other critical business rules.",
      },
      {
        title: "Model stock as inventory, not a counter",
        description:
          "Inventory is tracked in batches with expiry dates and auditable adjustments. Order lines retain price snapshots, and stock movement is handled through server-side database logic.",
      },
    ],
    capabilities: [
      "Customer catalogue, search, favourites and cart",
      "Checkout, order tracking and return requests",
      "Admin catalogue and inventory-batch management",
      "Order, customer and return workflows",
      "Sales and inventory reporting",
      "Product media stored through Cloudinary",
    ],
    engineeringNotes: [
      "Expo / React Native with Expo Router for customer and admin routes",
      "Supabase PostgreSQL for persistent data and server-side business logic",
      "Batch-aware inventory with expiry dates and auditable stock adjustments",
      "Cloudinary for image storage, keeping media separate from application records",
    ],
  },
  wolfvane: {
    slug: "wolfvane-zed-theme",
    title: "WOLFVANE for Zed",
    category: "Developer tool / Editor theme",
    description:
      "A dark editor theme built around a restrained graphite interface and a deliberate syntax hierarchy.",
    visual: "editor",
    technologies: ["Zed", "Theme JSON", "Color systems"],
    repository: "https://github.com/icrmahin/WOLFVANE-Zed-Theme",
    contribution: "Visual system and theme implementation",
    overview:
      "WOLFVANE is a dark theme for the Zed editor. It uses a graphite base and assigns distinct colors to syntax roles so code structure is easier to scan without turning the editor into a high-saturation palette.",
    context:
      "A theme has to do more than look attractive in a screenshot. Its colors need to create a consistent hierarchy across keywords, properties, functions, types, strings and comments while keeping the editor comfortable for long sessions.",
    approach: [
      {
        title: "Start with a quiet base",
        description:
          "The interface uses restrained graphite surfaces so syntax colors carry the hierarchy instead of competing with the editor chrome.",
      },
      {
        title: "Give syntax roles distinct signals",
        description:
          "Coral keywords, orange properties, purple functions, blue types and constants, light-blue strings and muted italic comments separate code roles without using color indiscriminately.",
      },
      {
        title: "Keep the extension lightweight",
        description:
          "The project is a theme-only Zed extension. The theme is defined in JSON and does not require a Rust or WASM runtime.",
      },
    ],
    capabilities: [
      "Dark graphite editor surfaces",
      "Distinct colors for common syntax roles",
      "Coordinated treatment for strings, comments and constants",
      "Theme-only implementation using Zed's theme schema",
    ],
    engineeringNotes: [
      "Theme configuration authored as JSON",
      "Color hierarchy designed around syntax semantics",
      "Local installation through Zed's themes directory",
    ],
  },
  hibbullahLanding: {
    slug: "hibbullah-landing",
    title: "Hibbullah Landing",
    category: "Product site / Landing page",
    description:
      "A lightweight public-facing product page introducing the Hibbullah Android pharmacy application.",
    visual: "landing",
    technologies: ["Semantic HTML", "Vanilla CSS", "Vanilla JavaScript"],
    repository: "https://github.com/icrmahin/hibbullah-landing",
    contribution: "Product-page design and frontend implementation",
    overview:
      "A responsive, static landing page that introduces Hibbullah outside the mobile application. It is intentionally built without a framework, build tool or runtime dependency.",
    context:
      "The mobile product needed a simple public entry point where people could understand what the app does before opening or installing it. The page had to remain lightweight and easy to host.",
    approach: [
      {
        title: "Use the browser platform directly",
        description:
          "The page is implemented with semantic HTML, vanilla CSS and vanilla JavaScript instead of introducing a framework for a focused static experience.",
      },
      {
        title: "Keep the story focused",
        description:
          "The page is organized around product, feature and download information so visitors can understand the mobile app without navigating a complex marketing site.",
      },
      {
        title: "Design for small screens first",
        description:
          "The layout adapts to mobile and desktop while keeping the core product message and calls to action clear.",
      },
    ],
    capabilities: [
      "Responsive product presentation",
      "Focused product and feature sections",
      "Static hosting without a build pipeline",
      "Direct relationship to the Hibbullah Android product",
    ],
    engineeringNotes: [
      "Semantic HTML for document structure",
      "Vanilla CSS for layout and responsive behavior",
      "Vanilla JavaScript for lightweight interaction",
      "No framework or runtime dependency",
    ],
  },
  sifaPharma: {
    slug: "sifa-pharma",
    title: "Sifa Pharma",
    category: "Pharmacy operations",
    description:
      "A pharmacy platform for customer ordering, inventory and shop operations.",
    visual: "storefront",
    technologies: ["Expo", "React Native", "Supabase"],
    repository: "https://github.com/icrmahin/Sifa-Pharma",
    contribution: "Project details pending source verification",
    overview:
      "This earlier portfolio entry is retained for reference, but its current source repository and project scope have not been verified in this audit.",
    context:
      "The available public repository inventory did not provide enough evidence to write a reliable case study for this project.",
    approach: [],
    capabilities: [],
    engineeringNotes: [],
  },
} satisfies Record<string, Project>;

export const featuredProjects: readonly Project[] = [
  projects.hibbullah,
  projects.wolfvane,
  projects.hibbullahLanding,
];
