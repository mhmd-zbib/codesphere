"use client";

import { api } from "@/lib/api-clients";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  return api.get("/posts");
}

export const getPostsQuery = () => {
  return useQuery({
    queryKey: ["get-posts"],
    queryFn: () => fetchPosts(),
    retry: false,
  });
};
