"use client";

import { useState } from "react";

interface SignupData {
  username: string;
  email: string;
  password: string;
}

interface UseSignup {
  signupData: SignupData;
  handleInputChange: (field: keyof SignupData, value: string) => void;
  resetSignupData: () => void;
}

export default function useSignup(): UseSignup {
  const [signupData, setSignupData] = useState<SignupData>({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (field: keyof SignupData, value: string) => {
    setSignupData({ ...signupData, [field]: value });
  };

  const resetSignupData = () => {
    setSignupData({
      username: "",
      email: "",
      password: "",
    });
  };

  return {
    signupData,
    handleInputChange,
    resetSignupData,
  };
}
