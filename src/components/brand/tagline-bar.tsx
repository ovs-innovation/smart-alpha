import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

function TaglineText({ className }: { className?: string }) {
  const parts = siteConfig.tagline.split("SENTIMENT");
  return (
    <p className={cn("text-center text-[12px] leading-relaxed sm:text-[13px]", className)}>
      {parts[0]}
      <span className="font-semibold tracking-wide text-foreground">SENTIMENT</span>
      {parts[1]}
    </p>
  );
}

/** Full-width strip — best under hero / above footer */
export function TaglineBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-y border-primary/15 bg-primary/[0.06] px-5 py-3 sm:px-8",
        className
      )}
    >
      <div className="mx-auto max-w-[1100px]">
        <TaglineText className="text-muted" />
      </div>
    </div>
  );
}

/** Compact line for cards / CTA */
export function TaglineNote({ className }: { className?: string }) {
  return <TaglineText className={cn("text-muted", className)} />;
}
