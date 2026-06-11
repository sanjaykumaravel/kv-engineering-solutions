import React from "react";
import { Badge } from "@/components/ui/badge";

interface ExpertiseBadgeProps {
  item: string;
  onClick: (item: string) => void;
}

export function ExpertiseBadge({ item, onClick }: ExpertiseBadgeProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(item);
    }
  };

  return (
    <Badge
      variant="outline"
      className="p-3 justify-start cursor-pointer hover:bg-primary/5 select-none w-full"
      onClick={() => onClick(item)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      {item}
    </Badge>
  );
}
