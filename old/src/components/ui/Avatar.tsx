// components/Avatar.tsx

import React from "react";

type AvatarProps = {
  imageUrl: string;
  altText: string;
  size?: "sm" | "md" | "lg";
};

const sizeToPixels: Record<"sm" | "md" | "lg", number> = {
  sm: 30,
  md: 50,
  lg: 80,
};

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, size = "md" }) => {
  const avatarSize = sizeToPixels[size];

  return (
    <img
      src={imageUrl}
      alt={altText}
      height={avatarSize}
      width={avatarSize}
      className="rounded-full"
    />
  );
};

export default Avatar;
