import { galleryItems } from "@/data/gallery-images";
import Image from "next/image";
import Link from "next/link";
import { Pagination } from "@/components/ui/pagination-custom";
import { SearchInput } from "@/components/ui/search-input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Images & Engineering Diagrams | KV Engineering Solutions",
  description: "Browse our extensive gallery of engineering diagrams, site photos, and technical illustrations.",
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
  const query = typeof params.query === "string" ? params.query.toLowerCase() : "";
  const currentPage = Math.max(1, page);

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

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header Section */}
      <div className="relative bg-gray-50 border-b border-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Engineering Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light mb-8">
            Explore our comprehensive collection of technical site content and engineering solutions in action.
          </p>

          {/* Search Bar */}
          <div className="flex justify-center max-w-lg mx-auto">
            <SearchInput placeholder="Search diagrams, trays, transformers..." />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Empty State */}
        {currentImages.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-lg mb-2">No results found for "{params.query}"</p>
            <p className="text-sm text-gray-400">Try searching for "cable", "transformer" or "layout".</p>
            <Link href="/images" className="text-blue-600 hover:underline mt-6 inline-block font-medium">
              Clear Search
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentImages.map((item, idx) => (
                <article
                  key={item.index}
                  className="group flex flex-col bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  {/* SEO-friendly anchor wrapping the image */}
                  <Link
                    href={`/images/${item.slug}`}
                    aria-label={`View details for ${item.name}`}
                    title={item.name}
                    className="relative aspect-[4/3] bg-gray-100 overflow-hidden block"
                  >
                    <Image
                      src={item.url}
                      alt={`${item.name} - ${item.description?.substring(0, 80) || item.alt?.substring(0, 80) || 'Engineering diagram'}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading={idx < 4 ? "eager" : "lazy"}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECABEhMf/aAAwDAQACEQMRAD8Az6LUbi4022t5Y0SOMPwZQSQWIPvr7pVQpJHNAT/0Up0B2YAnAf/Z"
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </Link>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-auto">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-700 transition-colors">
                        <Link href={`/images/${item.slug}`} className="hover:underline">
                          {item.name}
                        </Link>
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description || item.alt}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        ID: #{item.index}
                      </span>
                      <Link 
                        href={`/images/${item.slug}`}
                        className="text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center"
                      >
                        View <span className="ml-1" aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination - Only show if necessary */}
            {totalPages > 1 && (
                <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                baseUrl="/images"
                />
            )}
          </>
        )}
      </div>
    </div>
  );
}
