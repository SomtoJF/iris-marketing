import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Iris Apply — Automated Job Applications" },
    {
      name: "description",
      content:
        "Find your next role at hyperspeed. Iris Apply automates job applications so you can focus on what matters.",
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
