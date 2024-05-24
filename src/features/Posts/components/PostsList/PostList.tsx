import React from "react";
import PostItem from "../PostItem/PostItem";

interface PostListProps {
  posts: Feed;
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="border border-accent rounded-xl  overflow-hidden  w-full">
      {posts.map((post: Post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
