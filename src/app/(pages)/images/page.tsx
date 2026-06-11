import { supabase } from "@/lib/supabaseServer";
import { GalleryItem } from "@/data/gallery-images";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Pagination } from "@/components/ui/pagination-custom";
import { SearchInput } from "@/components/ui/search-input";
import { SortSelect } from "@/components/ui/sort-select";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Images & Engineering Diagrams | KV Engineering Solutions",
  description:
    "Browse our extensive gallery of engineering diagrams, site photos, and technical illustrations.",
};

const ITEMS_PER_PAGE = 12;

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function Gallery({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const page = typeof params.page === "string" ? parseInt(params.page) : 1;
  const query =
    typeof params.query === "string" ? params.query.toLowerCase() : "";
  const sort = typeof params.sort === "string" ? params.sort : "index";
  const currentPage = Math.max(1, page);

  // Fetch items from Supabase
  let queryBuilder = supabase.from("gallery_items").select("*");

  if (sort === "newest") {
    queryBuilder = queryBuilder.order("created_at", { ascending: false });
  } else if (sort === "oldest") {
    queryBuilder = queryBuilder.order("created_at", { ascending: true });
  } else {
    queryBuilder = queryBuilder.order("index", { ascending: true });
  }

  const { data: dbItems, error: dbError } = await queryBuilder;

  if (dbError) {
    console.error(
      "Error fetching gallery items from Supabase:",
      dbError.message,
    );
  }

  const galleryItems: GalleryItem[] = (dbItems || []).map((item) => ({
    index: item.index,
    name: item.name,
    slug: item.slug,
    url: item.url,
    alt: item.alt,
    description: item.description,
    location: item.location || undefined,
    material: item.material || undefined,
    specifications: item.specifications || undefined,
    detailedContent: item.detailed_content || undefined,
  }));

  // Filter items based on search query
  const filteredItems = galleryItems.filter((item) => {
    if (!query) return true;
    return (
      item.name.toLowerCase().includes(query) ||
      (item.description && item.description.toLowerCase().includes(query)) ||
      (item.alt && item.alt.toLowerCase().includes(query))
    );
  });

  const totalItems = filteredItems.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIdx = startIdx + ITEMS_PER_PAGE;
  const currentImages = filteredItems.slice(startIdx, endIdx);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ksvengineering.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Engineering Gallery",
            item: "https://www.ksvengineering.com/images",
          },
        ],
      },
      {
        "@type": "ImageGallery",
        name: "Engineering Gallery",
        description:
          "Comprehensive collection of technical site content and engineering diagrams.",
        url: "https://www.ksvengineering.com/images",
        image: galleryItems.map((item) => ({
          "@type": "ImageObject",
          url: item.url.startsWith("http")
            ? item.url
            : `https://www.ksvengineering.com${item.url}`,
          name: item.name,
          caption: item.alt || item.description,
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Premium Header Section */}
      <div className="relative bg-white dark:bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-dot-pattern">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-teal-500 to-indigo-500" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Engineering Gallery
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light mb-8">
            Explore our comprehensive collection of technical site content and
            engineering solutions in action.
          </p>

          {/* Search & Sort Bar */}
          <Suspense fallback={<div className="h-11 max-w-xl mx-auto bg-slate-100 dark:bg-slate-800 animate-pulse rounded-2xl" />}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto px-4">
              <SearchInput placeholder="Search diagrams, trays, transformers..." />
              <SortSelect />
            </div>
          </Suspense>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Empty State */}
        {currentImages.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] max-w-xl mx-auto p-8">
            <p className="text-slate-900 dark:text-white text-lg font-medium mb-2">
              No results found for &quot;{params.query}&quot;
            </p>
            <p className="text-sm text-slate-400">
              Try searching for &quot;cable&quot;, &quot;transformer&quot; or
              &quot;layout&quot;.
            </p>
            <Link
              href="/images"
              className="text-blue-600 dark:text-blue-400 hover:underline mt-6 inline-block font-semibold"
            >
              Clear Search
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentImages.map((item, idx) => (
                <article
                  key={item.index}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-300 border border-black"
                >
                  {/* SEO-friendly anchor wrapping the image */}
                  <Link
                    href={`/images/${item.slug}`}
                    aria-label={`View details for ${item.name}`}
                    title={item.name}
                    className="relative aspect-[4/3] bg-slate-50 border-b border-black overflow-hidden block"
                  >
                    <Image
                      src={item.url}
                      alt={`${item.name} - ${item.description?.substring(0, 80) || item.alt?.substring(0, 80) || "Engineering diagram"}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={idx < 4 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8Az6LUbi4022t5Y0SOMPwZQSQWIPvr7pVQpJHNAT/0Up0B2YAnAf/Z"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <Link
                          href={`/images/${item.slug}`}
                          className="hover:underline"
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                        {item.description || item.alt}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-black flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        ID: #{item.index}
                      </span>
                      <Link
                        href={`/images/${item.slug}`}
                        className="text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform flex items-center"
                      >
                        View Details{" "}
                        <span className="ml-1" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination - Only show if necessary */}
            {totalPages > 1 && (
              <Suspense fallback={<div className="h-10 w-full bg-slate-100 dark:bg-slate-800 animate-pulse rounded-md" />}>
                <Pagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  baseUrl="/images"
                />
              </Suspense>
            )}
          </>
        )}
      </div>
    </div>
  );
}
