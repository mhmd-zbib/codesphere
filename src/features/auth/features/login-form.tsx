import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/auth-context";
import authConfig from "@/lib/auth-config";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email().nonempty({ message: "Required Field" }),
  password: z.string().nonempty({ message: "Required Field" }),
});

export default function LoginForm() {
  const auth = useAuth();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const mutation = useMutation({
    mutationFn: authConfig.loginFn,
  });

  const handleSubmit = (values: z.infer<typeof loginSchema>) => {
    // mutation.mutate(values);
    auth.login(values);
    navigate("/");
  };

  return (
    <>
      <Card className="mb-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <CardHeader>
              <CardTitle className="font-bold">Login</CardTitle>
              <CardDescription>Glad to see you back, lets go!</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Email Address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="submit w-full">
                Login
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Link className=" flex flex-row gap-2  justify-center" to={"/signup"}>
        <Label className="text-accent">Don't have an account? </Label>
        <Label className=" cursor-pointer underline">SignUp!</Label>
      </Link>
    </>
  );
}
