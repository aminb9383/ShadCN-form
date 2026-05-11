"use client";

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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email, z } from "zod";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";

const formSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handlesubmit = () => {
    console.log("summit ");
  };

  return (
    <Card className="w-full max-w-md m-auto mt-5">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your SupportMe account</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form} >
          <form className="flex flex-col gap-4" onSubmit={form.handleSubmit(handlesubmit)}>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="amin.b9383@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription> signed up email </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="AB1489"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit"> login</Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <small>don't have an account ?</small>
        <Button asChild variant={"outline"} size={"sm"}>
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
