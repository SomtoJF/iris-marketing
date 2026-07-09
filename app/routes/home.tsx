import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

const SITE_URL = "https://applywithiris.com";
const TITLE = "Iris Apply — Automated Job Applications";
const DESCRIPTION =
  "Find your next role at hyperspeed. Iris Apply automates job applications so you can focus on what matters.";
const OG_IMAGE = `${SITE_URL}/logo.png`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/` },
    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:type", content: "website" },
    { property: "og:url", content: `${SITE_URL}/` },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:site_name", content: "Iris Apply" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: TITLE },
    { name: "twitter:description", content: DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

export default function Home() {
  return <Welcome />;
}
