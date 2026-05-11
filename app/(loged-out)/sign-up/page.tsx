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
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Field } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  email: z.string().email(),
  accountType: z.enum(["company", "personal"]),
  companyName: z.string().optional(),
  numberOfEmployees: z.coerce.number().optional(),
});

export default function sighUpPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      email: "",
      accountType: "personal" , // ← ADD THIS
      
      numberOfEmployees: undefined, // ← ADD THIS
    },
  });

  const handlesubmit = () => {
    console.log("summit ");
  };

const accountType = form.watch("accountType")

  return (
    <Card className="w-full max-w-md m-auto mt-5">
      <CardHeader>
        <CardTitle>Sign up</CardTitle>
        <CardDescription>Sign up to SupportMe account</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handlesubmit)}
          >
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>account Type</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an account type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"personal"}>Personal</SelectItem>
                      <SelectItem value={"company"}>Company</SelectItem>
                      <FormMessage />
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          {accountType === "company" &&
          
          <>
          <FormField
              control={form.control}
              name= "companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="company name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          <FormField
              control={form.control}
              name= "numberOfEmployees"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Employees</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Number of Employees"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
          

            
          </>
          }


            {/* <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="AB1489" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}

            <Button type="submit"> sign up</Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex justify-between">
        <small>Already have an account ?</small>
        <Button asChild variant={"outline"} size={"sm"}>
          <Link href="/sign-up">login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
