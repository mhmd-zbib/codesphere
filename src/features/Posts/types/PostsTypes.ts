type User = {
  username: string;
  avatar: string;
};

type Post = {
  // map(arg0: (post: any) => React.JSX.Element): React.ReactNode;
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
