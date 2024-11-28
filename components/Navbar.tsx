"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavItems } from "@/lib/constants";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import ToggleButton from "./ToggleButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const Navbar = () => {
  const { isLoaded, userId } = useAuth();
  const [toggle, setToggle] = useState<boolean>(false);
  const links = [
    "/dashboard",
    "#features",
    "#works",
    "#plans",
    "#testimonials",
    "#contact",
  ];
  return (
    // hide && (
    <nav className="w-screen z-[995] dark:bg-dark/50 dark:text-white bg-white/10 backdrop-blur-lg fixed px-1 py-3 lg:p-4">
      <MaxWidthWrapper className="z-[999] h-10 items-center hidden fl-cen-j">
        <Link href="/">
          <Image
            className="size-[200px] -ml-7 lg:w-[200px] lg:h-[300px] lg:-ml-0 object-cover"
            width={300}
            height={300}
            src="/logo2.PNG"
            alt="website logo"
          />
        </Link>

        <ul className="px-3 hidden lg:flex font-semibold gap-4 text-sm">
          {NavItems.map((item, index) => (
            <li
              key={index}
              className="hover:border-b-2 duration-100 ease-out transition-all pb-2 border-primcolor"
            >
              <Link href={links[index]}>{item}</Link>
            </li>
          ))}
        </ul>
        {!isLoaded || !userId ? (
          <div className="flex gap-3">
            <Link
              href="/sign-in"
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              Sign in
            </Link>

            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
                variant: "default",
              })}
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="fl-cen gap-5">
            <ToggleButton />
            <Link
              href="/dashboard"
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "default",
                }),
                "text-white hidden lg:flex"
              )}
            >
              Dashboard <ArrowRight className="pl-1" />
            </Link>
            <button
              className="pr-5 lg:hidden"
              onClick={() => setToggle(!toggle)}
            >
              <RxHamburgerMenu size={30} />
            </button>
          </div>
        )}
      </MaxWidthWrapper>
      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="h-screen z-[999] lg:hidden backdrop-blur-md fixed text-primcolor w-[70%] py-4 bg-dark/80 transition-all duration-1000 ease-in-out"
        >
          <ul className="px-3 pt-10 lg:hidden font-semibold  text-sm">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="active:text-primcolor duration-100 text-center ease-out transition-all text-2xl py-5 border-b-2"
              >
                <Link href={links[index]}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
