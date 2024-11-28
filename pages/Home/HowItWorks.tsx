"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  containerVariants,
  HowItWorkItems,
  itemVariants,
} from "@/lib/constants";
import { BaggageClaim, HandCoins, UserPlus } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });
  const icons = [
    <UserPlus size={45} className="text-red-500" key={Math.random() * 20} />,
    <BaggageClaim
      size={45}
      className="text-yellow-500"
      key={Math.random() * 20}
    />,
    <HandCoins size={45} className="text-green-500" key={Math.random() * 20} />,
  ];
  return (
    <MaxWidthWrapper id="works" className="py-3 pl-10 lg:pl-0 mt-5 lg:mt-10">
      <motion.h1
        className="text-5xl font-bold text-center my-3 lg:my-10"
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        How it works
      </motion.h1>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10 pt-10"
      >
        {HowItWorkItems.map((item, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Card className="dark:bg-medium shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg mb-5">{item}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div
                    className="absolute bg-ash/60 dark:bg-dark -left-[70px] -top-10
                 bg-opacity-40 p-3 rounded-full"
                  >
                    {icons[index]}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. E
                    ius officia ducimus harum qui quasi sunt quas esse corporis
                    beatae vero!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default HowItWorks;
