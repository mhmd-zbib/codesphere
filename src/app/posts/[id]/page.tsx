"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

export default function page() {
  const params = useParams();
  const search = useSearchParams();

  return (
    <div>
      page {params.id} {search.get("new")}{" "}
    </div>
  );
}
