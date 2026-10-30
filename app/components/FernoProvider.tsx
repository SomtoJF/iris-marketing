import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import {
  initializeFerno,
  trackCanonicalPage,
  trackMarketingLinks,
} from "~/lib/ferno";

export function FernoProvider() {
  const { pathname } = useLocation();

  useEffect(() => {
    initializeFerno();
  }, []);

  useEffect(() => {
    trackCanonicalPage(pathname);
    trackMarketingLinks();
  }, [pathname]);

  return <Outlet />;
}
