"use client";

import React from "react";
import PostItem from "../PostItem/PostItem";
import Link from "next/link";
import { getPostsQuery } from "../../queries/get-posts";
import PostListLoading from "../PostListLoading";

const PostList = () => {
  const { data, isLoading, isError, error } = getPostsQuery();

  if (isLoading) {
    return <PostListLoading />;
  }

  if (isError) {
    return <div>{error.message} error</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="border border-accent rounded-xl overflow-hidden w-full">
      {data.map((post: Post) => (
        <Link href="/" key={post.id}>
          <PostItem post={post} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
