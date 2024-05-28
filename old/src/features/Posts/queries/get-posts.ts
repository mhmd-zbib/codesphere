import { api } from "@/lib/api-clients";

export async function fetchPosts(): Promise<Post[]> {
  return await api.get("/posts");
}
