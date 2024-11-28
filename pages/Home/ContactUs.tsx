import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

const ContactUs = () => {
  return (
    <MaxWidthWrapper
      id="contact"
      className="relative fl-col-cen gap-3 py-10 lg:py-20 my-20 justify-center"
    >
      <h1 className="text-5xl font-bold">Our newsletter</h1>
      <p className="text-center lg:w-1/2 text-sm mb-5">
        Lorem iadipisicing elit. Molestiae sed pariatur possimus alias. Animi
        suscipit, aperiam ut rerum recusandae iste.
      </p>
      <div className="hidden lg:flex lg:absolute left-24 -top-12">
        <Image
          src="/paperkite.PNG"
          width={200}
          height={200}
          alt="paperkite image"
        />
      </div>
      <div className="fl-cen">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email here"
          className="p-3 w-[15rem] lg:w-[30rem] outline-none bg-transparent border-2"
        />
        <Link
          className="bg-primcolor fl-cen gap-2 text-white px-3 py-[13px]"
          href="/"
        >
          Subscribe <FaTelegramPlane />
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default ContactUs;
