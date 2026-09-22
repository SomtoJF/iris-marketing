import { useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { NotFound } from "./components/landing/not-found";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/png", href: "/logo.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://applywithiris.com/#organization",
      name: "Iris Apply",
      url: "https://applywithiris.com",
      logo: "https://applywithiris.com/logo.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://applywithiris.com/#website",
      name: "Iris Apply",
      url: "https://applywithiris.com",
      publisher: { "@id": "https://applywithiris.com/#organization" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Iris Apply",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://app.applywithiris.com",
      description:
        "Iris Apply automates job applications so you can focus on what matters.",
    },
  ],
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useEffect(() => {
    let cancelled = false;
    let scroll: { destroy: () => void } | undefined;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      scroll = new Lenis({
        autoRaf: true,
        anchors: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.16,
        stopInertiaOnNavigate: true,
      });
    });

    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = "Error";
    details = error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
