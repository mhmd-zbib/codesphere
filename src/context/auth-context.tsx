import authConfig from "@/lib/auth-config";
import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useContext, useState } from "react";

type User = {
  // name: string;
  email: string;
  password: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  // Example useQuery implementation
  // const { data } = useQuery({
  //   queryKey: ["getUser"],
  //   queryFn: authConfig.userFn,
  // });

  const contextValue = { user, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be wrapped ");
  }
  return context;
};
