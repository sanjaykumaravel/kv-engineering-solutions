// src/app/blocked/page.tsx
import Link from "next/link";

// Allow searchParams to be either an object or (for some Next versions) a Promise-ish type
type MaybeSearchParams = { country?: string } | Promise<any> | undefined;

export default function Blocked({ searchParams }: { searchParams?: MaybeSearchParams }) {
  // If searchParams is a promise-like (some Next versions), try to resolve synchronously if possible
  const raw = (searchParams && typeof (searchParams as any).then === "function") ? undefined : (searchParams as { country?: string } | undefined);
  const country = raw?.country || "your country";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-2xl text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4">Content not available</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We're sorry — this site is not available in {country}. If you think this is a mistake, please contact us.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-foreground hover:bg-muted transition"
          >
            Return to home
          </Link>
          <a
            href="mailto:ksvengineeringconsultant@gmail.com"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-medium hover:brightness-95 transition"
          >
            Contact support
          </a>
        </div>
      </div>
    </div>
  );
}
