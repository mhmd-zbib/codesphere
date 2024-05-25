"use client";

import React from "react";
import PostItem from "../PostItem/PostItem";
import Link from "next/link";
import { getPostsQuery } from "../../queries/get-posts";

const PostList = () => {
  const { data: posts, isLoading, isError } = getPostsQuery();

  console.log(posts?.data);

  return (
    <div className="border border-accent rounded-xl  overflow-hidden  w-full">
      {/* {posts.map((post: Post) => (
        <Link href="/">
          <PostItem post={post} key={post.id} />
        </Link>
      ))} */}
    </div>
  );
};

export default PostList;
