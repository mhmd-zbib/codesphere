import { login, logout, signup } from "./auth";

interface AuthConfig {
  userFn: () => Promise<any>;
  loginFn: (data: Record<string, any>) => Promise<any>;
  signupFn: (data: Record<string, any>) => Promise<any>;
  logoutFn: () => Promise<any>;
}

const authConfig: AuthConfig = {
  userFn: async () => {
    const user = null
    ;
    return user;
  },
  loginFn: async (data: any) => {
    const res = await login(data);
    return res;
  },
  signupFn: async (data: any) => {
    return await signup(data);
  },
  logoutFn: async () => {
    const res = await logout();
    return res;
  },
};

export default authConfig;
