import React from "react";

interface SkillsProps {
  skills: string[];
}

export default function SkillsPost({ skills }: SkillsProps) {
  return (
    <div className="flex flex-row gap-4">
      {skills.map((skill) => (
        <div
          className="hover:bg-accent border text-sm border-accent  px-3 py-1 rounded-full"
          key={skill}>
          {skill}
        </div>
      ))}
    </div>
  );
}
