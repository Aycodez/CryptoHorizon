"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { WebsiteName } from "@/lib/constants";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const HeroPage = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <MaxWidthWrapper
      id="heropage"
      className="pt-40 mb-10 w-full relative lg:flex gap-10"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:w-1/2 fl-col gap-5"
      >
        <motion.h1
          variants={itemVariants}
          className="head-text text-center lg:text-left"
        >
          Safe, Secure and Reliable Crypto Trading
        </motion.h1>
        <p className="text-pretty text-center text-sm lg:text-left">
          Welcome to {WebsiteName}, your trusted gateway to the world of
          cryptocurrency. Buy, sell and trade with confidence, leveraging our
          secure and intuitive platform
        </p>
        <div className="flex justify-center items-center lg:justify-start lg:items-start gap-3 font-semibold">
          <Link
            href="/login"
            className={cn(
              buttonVariants({
                size: "lg",
                variant: "ghost",
              }),
              "border-2 border-primcolor "
            )}
          >
            Get started
          </Link>

          <Link
            href="/register"
            className={buttonVariants({
              size: "lg",
              variant: "default",
            })}
          >
            Know More
            <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
        }}
        animate={{ opacity: 1, x: 0, rotate: 360 }}
        transition={{ duration: 0.7 }}
        className="w-[24rem] lg:w-[30rem] lg:absolute right-10 top-24"
      >
        <Image
          width={300}
          height={300}
          className="w-full"
          alt="crypto cover image"
          src="/credit-cards.png"
        />
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default HeroPage;
