"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../../queries/get-posts";

const PostList = () => {
  // const { data, isLoading, isError, error } = getPostsQuery();
  // const data = useQuery<Post[]>({
  //   queryKey: ["get-posts"],
  //   queryFn: fetchPosts,
  //   retry: false,
  // });

  const { data } = useQuery({
    queryKey: ["get-posts"],
    queryFn: fetchPosts,
  });

  return <div>hi</div>;

  // if (isLoading) {
  //   return <PostListLoading />;
  // }
  // if (isError) {
  //   return <div>{error.message} error</div>;
  // }
  // if (!data) {
  //   return <div>No data</div>;
  // }
  // return (
  //   <div className="border border-accent rounded-xl overflow-hidden w-full">
  //     {data.map((post: Post) => (
  //       <Link href="/" key={post.id}>
  //         <PostItem post={post} />
  //       </Link>
  //     ))}
  //   </div>
  // );
};

export default PostList;
