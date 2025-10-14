// src/app/blocked/page.tsx
export default async function Blocked({ searchParams }: { searchParams: Promise<{ country?: string }> }) {
  const params = await searchParams;
  const country = params?.country || "your country";

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-2xl text-center py-12">
        <h1 className="text-5xl font-extrabold mb-4">Content not available</h1>
        <p className="text-lg text-muted-foreground mb-6">
          We're sorry, this site is not available in {country}. If you think this is a mistake, please contact us.
        </p>
      </div>
    </div>
  );
}
