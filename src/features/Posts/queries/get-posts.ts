import { api } from "@/lib/api-clients";
import { useQuery } from "@tanstack/react-query";

export async function fetchPosts(): Promise<Post[]> {
  return await api.get("/posts");
}

export const getPostsQuery = () => {
  return useQuery<Post[], Error>({
    queryKey: ["get-posts"],
    queryFn: fetchPosts,
    retry: false,
  });
};
