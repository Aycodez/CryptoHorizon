"use client";
import React from "react";
import { FaFacebook, FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { WebsiteName } from "@/lib/constants";

const Footer = () => {
  // const pathName = usePathname();
  // const hide =
  //   pathName != "/sign-in" &&
  //   pathName != "/sign-up" &&
  //   !pathName?.includes("/admin");
  return (
    // hide && (
    <footer className="bg-[#E3E6EC] dark:bg-medium">
      <MaxWidthWrapper className="relative  px-5 lg:flex text-gray-300  py-5 md:py-10">
        <div className="absolute -top-20">
          <Image
            className="w-[200px] h-[300px] 
              object-cover "
            width={300}
            height={300}
            src="/logo2.PNG"
            alt="website logo"
          />
        </div>
        <div className="flex flex-col gap-3 mt-5 pt-16 lg:pt-10 pl-2">
          <p className="italic text-sm w-[75%] py-1 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            est.
          </p>
          <div className="flex text-slate-500 gap-2 mb-5">
            <FaFacebook size={20} />
            <FaTelegram size={20} />
            <FaWhatsapp size={20} />
            <FaTwitter size={20} />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14">
          <div className="text-sm flex flex-col gap-2">
            <h2 className="text-lg font-semibold">COMPANY</h2>
            <p>Features</p>
            <p>How it works</p>
            <p>Contact us</p>
            <p>Investment Plans</p>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <h2 className="text-lg font-semibold">HELP</h2>
            <p>Customer Support</p>

            <p>Privacy Policy</p>
            <p>Contact </p>
            <p>Terms & Conditions</p>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <p>Acccounts</p>
            <p>Withdrawal</p>
            <p>Deposits</p>
            <p>Wallets</p>
          </div>
          <div className="text-sm flex flex-col gap-2">
            <h2 className="text-lg font-semibold">RESOURCES</h2>
            <p>Free eBooks</p>

            <p>How to - Blog</p>
            <p>Youtube video</p>
            <p>Development tutorial</p>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-5">
        <div className="border-t border-white w-full my-3" />
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              {WebsiteName} &nbsp; &copy; {new Date().getFullYear()} All rights
              reserved
            </p>
          </div>

          {/* <div className="flex items-center justify-center">
            <ol className="flex space-x-8">
              <li className="text-sm text-muted-foreground hover:text-gray-600">
                Terms
              </li>
              <li className="text-sm text-muted-foreground hover:text-gray-600">
                Privacy Policy
              </li>
              <li className="text-sm text-muted-foreground hover:text-gray-600">
                Cookie Policy
              </li>
            </ol>
          </div> */}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
