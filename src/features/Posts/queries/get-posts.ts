import { api } from "@/lib/api-clients";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts(): Promise<Post[]> {
  return api.get("/posts");
}

export const getPostsQuery = () => {
  return useQuery<Post[], Error>({
    queryKey: ["get-posts"],
    queryFn: fetchPosts,
    retry: false,
  });
};
