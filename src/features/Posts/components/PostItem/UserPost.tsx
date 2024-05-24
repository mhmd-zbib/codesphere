import Avatar from "@/components/ui/Avatar";
import React from "react";

interface UserPostProps {
  user: {
    avatar: string;
    username: string;
  };
  collaboration: string;
}

export default function UserPost({ user, collaboration }: UserPostProps) {
  return (
    <div className="flex items-center mt-4 gap-4">
      <Avatar imageUrl={user.avatar} altText="profilePic" />
      <p className="text-lg ">{user.username}</p>

      <p>{collaboration} s</p>
    </div>
  );
}
