import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { ChromeIcon } from "./chrome-icon";

export function AddToChromeButton({
  href,
  appearance = "light",
}: {
  href: string;
  appearance?: "hero" | "light";
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button
        variant={appearance === "hero" ? "ghost" : "default"}
        className={cn(
          "h-12 gap-2.5 rounded-full px-8 text-base font-medium",
          appearance === "hero"
            ? "border border-white/25 text-white hover:bg-white/10 hover:text-white"
            : "bg-purple-700 text-white hover:bg-purple-800"
        )}
      >
        <ChromeIcon className="size-4.5 shrink-0" />
        Add to Chrome
      </Button>
    </a>
  );
}
