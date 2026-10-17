type AnalyticsClient = {
  load(settings: unknown, options?: unknown): AnalyticsClient;
  track(name: string, properties?: Record<string, string>): Promise<unknown>;
  page(properties?: Record<string, string>): Promise<unknown>;
};

const writeKey = import.meta.env.VITE_FERNO_WRITE_KEY as string | undefined;
const apiHost =
  (import.meta.env.VITE_FERNO_API_HOST as string | undefined) ??
  "https://data.useferno.com";
const apiPath =
  (import.meta.env.VITE_FERNO_API_PATH as string | undefined) ?? "/events";

let analyticsPromise: Promise<AnalyticsClient | undefined> | undefined;

function loadFerno() {
  if (!writeKey) return Promise.resolve(undefined);

  analyticsPromise ??= import("@fernohq/analytics-next").then(({ AnalyticsBrowser }) => {
    const analytics = new AnalyticsBrowser();
    analytics.load(
      {
        writeKey,
        cdnSettings: {
          integrations: {
            "Segment.io": { apiKey: writeKey, apiHost, apiPath, authMode: "bearer" },
          },
        },
      },
      {
        initialPageview: false,
        instrumentation: {
          autocapture: true,
          rageClicks: true,
          deadClicks: true,
          navigation: { enabled: true, hash: true },
          exceptions: { enabled: true, console: true },
          heatmaps: { enabled: true, flushInterval: 10000 },
        },
        integrations: {
          "Segment.io": { apiHost, apiPath, authMode: "bearer" },
        },
      },
    );
    return analytics as AnalyticsClient;
  });

  return analyticsPromise;
}

export function initializeFerno() {
  void loadFerno();
}

export function trackCanonicalPage(pathname: string) {
  const canonicalUrl = new URL(pathname, "https://applywithiris.com").toString();
  void loadFerno().then((analytics) =>
    analytics?.page({ canonical_url: canonicalUrl, path: pathname }),
  );
}

export function trackCtaClick(type: "app" | "extension") {
  void loadFerno().then((analytics) =>
    analytics?.track("cta_clicked", { cta: type }),
  );
}
