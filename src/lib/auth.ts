import { loginSchema } from "@/features/auth/features/login-form";
import { api } from "./api-client";
import { z } from "zod";
import { signupSchema } from "@/features/auth/hooks/validations";

const getUser = () => {
  return api.get("/auth/me");
};

const login = (data: z.infer<typeof loginSchema>) => {
  return api.post("/auth/login", data);
};

const signup = (data: z.infer<typeof signupSchema>) => {
  return api.post("/auth/signup", data);
};

const logout = () => {
  return api.post("/auth/logout");
};

export { getUser, login, signup, logout };
