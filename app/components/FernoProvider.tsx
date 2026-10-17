import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { initializeFerno, trackCanonicalPage } from "~/lib/ferno";

export function FernoProvider() {
  const { pathname } = useLocation();

  useEffect(() => {
    initializeFerno();
  }, []);

  useEffect(() => {
    trackCanonicalPage(pathname);
  }, [pathname]);

  return <Outlet />;
}
