import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl text-center px-6 py-12">
        <h1 className="text-6xl font-extrabold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Page not found
        </h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-white font-medium hover:brightness-95 transition"
          >
            Go back home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-border px-4 py-2 text-foreground hover:bg-muted transition"
          >
            Browse site
          </Link>
        </div>
      </div>
    </div>
  );
}
