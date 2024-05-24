type User = {
  username: string;
  avatar: string;
};

type Post = {
  id: number;
  user: User;
  title: string;
  description: string;
  collaborationType: string;
  requiredSkills: string[];
  projectLink: string;
  comments: number;
};
type Feed = Post[];
