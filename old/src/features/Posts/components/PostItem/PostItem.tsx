import Link from "next/link";
import React from "react";
import SkillsPost from "./SkillsPost";
import UserPost from "./UserPost";
import ContentPost from "./ContentPost";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="border-b border-secondary p-4 hover:bg-shadow overflow-hidden gap-4 flex flex-col    transition duration-300 ease-in-out">
      <UserPost user={post.user} collaboration={post.collaborationType} />

      <ContentPost title={post.title} description={post.description} />

      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm text-gray-700">
            Collaboration Type:{" "}
            <span className="font-semibold">{post.collaborationType}</span>
          </p>
          <p className="text-sm text-gray-700">
            Comments: <span className="font-semibold">{post.comments}</span>
          </p>
        </div>
        <div>
          <a
            href={post.projectLink}
            className="text-blue hover:underline"
            target="_blank"
            rel="noopener noreferrer">
            {post.projectLink}
          </a>
        </div>
      </div>
      <SkillsPost skills={post.requiredSkills} />
    </div>
  );
};

export default PostItem;
