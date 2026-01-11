"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  baseUrl: string;
}

export function Pagination({ totalPages, currentPage, baseUrl }: PaginationProps) {
  const searchParams = useSearchParams();

  // Helper to build URL with existing search params if we had any (though unlikely for just pages)
  const createPageUrl = (pageNode: number | string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNode.toString());
    return `${baseUrl}?${params.toString()}`;
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Logic to show limited page numbers if there are too many
  // visible pages: 1 ... current-1 current current+1 ... last
  const getVisiblePages = () => {
    if (totalPages <= 7) return pages;
    
    if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, "...", totalPages];
    }
    
    if (currentPage >= totalPages - 3) {
        return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center space-x-2 mt-12 mb-8">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage <= 1}
        className={cn("w-10 h-10 rounded-full", currentPage <= 1 && "opacity-50 pointer-events-none")}
      >
        <Link href={createPageUrl(currentPage - 1)} aria-label="Previous Page">
           <ChevronLeft className="w-4 h-4" />
        </Link>
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-1">
          {visiblePages.map((page, idx) => {
              if (page === "...") {
                  return <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">...</span>
              }
              const isCurrent = page === currentPage;
              return (
                <Button
                    key={page}
                    variant={isCurrent ? "default" : "ghost"}
                    size="icon"
                    asChild
                    className={cn("w-10 h-10 rounded-full", isCurrent ? "bg-black text-white hover:bg-gray-800" : "text-gray-600 hover:bg-gray-100")}
                >
                    <Link href={createPageUrl(page)}>
                        {page}
                    </Link>
                </Button>
              )
          })}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        asChild
        disabled={currentPage >= totalPages}
        className={cn("w-10 h-10 rounded-full", currentPage >= totalPages && "opacity-50 pointer-events-none")}
      >
        <Link href={createPageUrl(currentPage + 1)} aria-label="Next Page">
            <ChevronRight className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
}
