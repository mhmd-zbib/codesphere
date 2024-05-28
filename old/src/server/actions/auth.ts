import { api } from "@/lib/api-clients";

interface SignupData {
  username: string;
  email: string;
  password: string;
}

export async function signup(signupData: SignupData): Promise<void> {
  return await api.post("/auth/signup", signupData);
}
