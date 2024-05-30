import { loginSchema } from "@/features/auth/components/login-form";
import { api } from "./api-client";
import { z } from "zod";
import { signupSchema } from "@/features/auth/hooks/validations";

const getUser = () => {
  api.get("/auth/me");
};

const login = (data: z.infer<typeof loginSchema>) => {
  api.post("/auth/login", data);
};

const signup = (data: z.infer<typeof signupSchema>) => {
  api.post("/auth/signup", data);
};

const logout = () => {
  api.post("/auth/logout");
};

export { getUser, login, signup, logout };
