import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className=" w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              property="true"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-5">
          {/* TODO اینجا باید دکمه شدسن استفاده بشه  */}
          {/* Button asChild variant="ghost" */}
          <Button asChild variant={"ghost"}>
            <Link href={"/card"}>
              <ShoppingCart /> cart
            </Link>
          </Button>
          <Button asChild className="pb-1">
            <Link href={"/sing-in"}>
              <UserIcon /> sing in
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
