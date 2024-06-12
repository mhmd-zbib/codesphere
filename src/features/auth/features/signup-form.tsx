"use client";

import FormFieldWrapper from "@/features/auth/components/FormField";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import authConfig from "@/lib/auth-config";
import { useMutation } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import * as z from "zod";
import { useSignupForm } from "../hooks/validations";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();
  const form = useSignupForm();

  const mutation = useMutation({
    mutationFn: authConfig.signupFn,
    onSuccess: () => {
      navigate("/feed");
      return;
    },

    onError: (err: any) => {
      console.log(err);

      if (err.details.email) {
        form.setError("email", {
          type: "email",
          message: err.details.email,
        });
      }

      if (err.details.username) {
        form.setError("username", {
          type: "username",
          message: err.details.username,
        });
      }
    },
  });

  //! look to change later shouldn't be any
  //
  const handleSubmit = (values: z.infer<any>) => {
    const data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    mutation.mutate(data);
  };

  return (
    <>
      <Card className="mb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardHeader>
              <CardTitle className="font-bold">SignUp</CardTitle>
              <CardDescription>Glad to see you back, lets go!</CardDescription>
            </CardHeader>
            <CardContent>
              <FormFieldWrapper
                control={form.control}
                name="username"
                label="Username"
                placeholder="John Doe"
              />
              <FormFieldWrapper
                control={form.control}
                name="email"
                label="Email Address"
                placeholder="Email Address"
              />
              <FormFieldWrapper
                control={form.control}
                name="password"
                label="Password"
                placeholder="Password"
              />
              <FormFieldWrapper
                control={form.control}
                name="passwordConfirm"
                label="Confirm Password"
                placeholder="Confirm Password"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="submit w-full">
                SignUp
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <Link className=" flex flex-row gap-2  justify-center   " to={"/login"}>
        <Label className="   text-secondary">Already a member?</Label>
        <Label className=" cursor-pointer underline">Login!</Label>
      </Link>
    </>
  );
}

export default SignupForm;
