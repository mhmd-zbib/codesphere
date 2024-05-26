"use client";

import React from "react";
import PostItem from "../PostItem/PostItem";
import Link from "next/link";
import { getPostsQuery } from "../../queries/get-posts";

const PostList = () => {
  const { data, isLoading, isError } = getPostsQuery();

  if (!data) {
    return <div>Loading...</div>;
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
