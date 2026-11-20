import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "icrmahin — A. Mahin",
    short_name: "icrmahin",
    description:
      "Independent product engineering, interface design and selected work by A. Mahin.",
    start_url: "/",
    display: "standalone",
    background_color: "#15191B",
    theme_color: "#15191B",
    lang: "en",
  };
}
