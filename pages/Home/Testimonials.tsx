import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SliderUtil from "@/components/SliderUtil";
import { TestimonialsItems } from "@/lib/constants";
import React from "react";

const Testimonials = () => {
  return (
    <MaxWidthWrapper className="my-10">
      <h1 className="head-text text-center">What Our Customers Say?</h1>
      <div className="lg:w-full px-5 mx-auto w-[90%]">
        <SliderUtil data={TestimonialsItems} />
      </div>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
