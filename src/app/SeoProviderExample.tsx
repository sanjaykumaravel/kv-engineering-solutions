"use client";

import React from "react";
import Seo from "@/lib/Seo";

export default function SeoProviderExample() {
  return (
    <Seo
      title="KSV Engineering — Detailed Engineering Services"
      description={
        "KSV Engineering provides detailed engineering services for EPC, OEM, and PMC clients worldwide. Precision-driven designs and CAD automation."
      }
      canonical={"https://www.ksvengineering.com"}
    />
  );
}
