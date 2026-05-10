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

import Link from "next/link";
import React from "react";
import { email, z } from "zod";

export default function LoginPage() {

  const formSchema = z.object({
    email: z.email() 
  })



  return (
    <Card className="w-full max-w-md m-auto mt-5">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to your SupportMe account</CardDescription>
      </CardHeader>

      <CardContent>


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
