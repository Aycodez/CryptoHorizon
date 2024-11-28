import React from "react";
import Card from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CardItems } from "@/lib/constants";
const InvestmentPlans = () => {
  return (
    <MaxWidthWrapper id="plans" className="px-5 py-3 mt-16">
      <div className="wrapper max-w-[1400px] mx-auto h-full">
        <h1 className="md:text-5xl text-3xl font-bold mb-3">
          Investment plans
        </h1>
        <p className="font-light italic text-[0.8rem] mb-6">
          The best and most affordable plan you will see in the market
        </p>
        <div className="card-container mx-3 grid md:grid-cols-3 grid-cols-1 gap-y-10 lg:gap-5 mt-20 h-[80%] mb-10">
          {CardItems.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default InvestmentPlans;
