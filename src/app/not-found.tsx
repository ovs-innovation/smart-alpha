import { MagneticButton } from "@/components/ui/magnetic-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 pt-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">404</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="mt-8 flex gap-3">
        <MagneticButton href="/">Back home</MagneticButton>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center rounded-2xl border border-border px-5 text-sm font-semibold"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
