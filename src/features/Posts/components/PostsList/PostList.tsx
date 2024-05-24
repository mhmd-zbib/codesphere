import React from "react";
import PostItem from "../PostItem/PostItem";
import Link from "next/link";

interface PostListProps {
  posts: Feed;
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="border border-accent rounded-xl  overflow-hidden  w-full">
      {posts.map((post: Post) => (
        <Link href="/">
          <PostItem post={post} key={post.id} />
        </Link>
      ))}
    </div>
  );
};

export default PostList;
