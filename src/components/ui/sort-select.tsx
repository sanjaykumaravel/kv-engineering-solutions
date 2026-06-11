"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SortSelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentSort = searchParams.get("sort") || "newest";

  const handleSortChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", "1"); // Reset to page 1 on sort change
    if (value && value !== "newest") {
      params.set("sort", value);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full sm:w-48 shrink-0">
      <Select value={currentSort} onValueChange={handleSortChange}>
        <SelectTrigger className="w-full h-11 px-4 border border-black rounded-2xl focus:ring-0 focus:ring-offset-0 text-base font-semibold bg-background text-foreground shadow-sm hover:bg-slate-50 transition-colors">
          <SelectValue placeholder="Sort Order" />
        </SelectTrigger>
        <SelectContent className="border border-black rounded-xl bg-background text-foreground shadow-lg">
          <SelectItem value="newest" className="font-semibold cursor-pointer">Newest First</SelectItem>
          <SelectItem value="oldest" className="font-semibold cursor-pointer">Oldest First</SelectItem>
          <SelectItem value="index" className="font-semibold cursor-pointer">Default (Index)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
