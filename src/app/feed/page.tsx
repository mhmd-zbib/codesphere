"use client";

import PostList from "@/features/Posts/components/PostsList/PostList";
import { GET_POSTS } from "@/features/Posts/queries/postQueries";
import { useQuery } from "@apollo/client";

export default function Feed() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <PostList posts={data.getPosts} />;
}
