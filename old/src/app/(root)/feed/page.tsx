import PostList from "@/features/Posts/components/PostsList/PostList";
import { fetchPosts } from "@/features/Posts/queries/get-posts";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
export default async function Feed() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["get-posts"],
    queryFn: fetchPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostList />
    </HydrationBoundary>
  );
}
