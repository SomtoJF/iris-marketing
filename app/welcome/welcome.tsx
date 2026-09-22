import { useSyncExternalStore } from "react";
import { EditorialHome } from "~/components/landing/editorial-home";
import { NotFound } from "~/components/landing/not-found";

const validSections = new Set([
  "",
  "#top",
  "#routes",
  "#process",
  "#extension",
]);

function subscribeToHashChange(callback: () => void) {
  window.addEventListener("hashchange", callback);
  return () => window.removeEventListener("hashchange", callback);
}

function getHash() {
  return window.location.hash;
}

export function Welcome() {
  // The server never receives URL fragments, so check them after hydration.
  const hash = useSyncExternalStore(subscribeToHashChange, getHash, () => "");
  if (!validSections.has(hash)) return <NotFound />;

  return <EditorialHome />;
}
