import { api } from "@/lib/api-clients";
import { useQuery } from "@tanstack/react-query";

async function signupUser(): Promise<Post[]> {
  return api.get("/posts");
}

export const signupUserMutation = () => {
  return useQuery<Post[], Error>({
    queryKey: ["get-posts"],
    queryFn: signupUser,
    retry: false,
  });
};
