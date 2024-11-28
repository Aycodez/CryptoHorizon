"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { containerVariants, FeatureItems, itemVariants } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ChartCandlestick,
  CircleDollarSign,
  ChartNoAxesCombined,
  Users,
  Shield,
  ContactRound,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true,
  });
  const colors = [
    "orange-500",
    "red-500",
    "blue-500",
    "pink-500",
    "teal-500",
    "green-600",
  ];
  const icons = [
    <Shield key={Math.random() * 20} className="text-orange-500" />,
    <ChartCandlestick className="text-red-500" key={Math.random() * 20} />,
    <CircleDollarSign className="text-blue-500" key={Math.random() * 20} />,
    <ChartNoAxesCombined className="text-pink-500" key={Math.random() * 20} />,
    <ContactRound className="text-teal-500" key={Math.random() * 20} />,
    <Users className="text-green-500" key={Math.random() * 20} />,
  ];

  return (
    <MaxWidthWrapper id="features" className="py-3 mt-14 lg:h-screen">
      <motion.h1
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-3xl lg:text-5xl font-bold text-center mb-7 pb-3"
      >
        Why Choose Us?
      </motion.h1>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 gap-3"
      >
        {FeatureItems.map((item, index) => (
          <motion.div variants={itemVariants} key={index}>
            <Card className="dark:bg-medium">
              <CardHeader>
                <div className="pb-2 fl-cen gap-3">
                  <div
                    className={cn(
                      `bg-${colors[index]}`,
                      " p-1 bg-opacity-30 border-ash"
                    )}
                  >
                    {icons[index]}
                  </div>

                  <CardTitle className="text-xl">{item.feature}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  earum eveniet accusantium dolores, assumenda debitis nesciunt
                  quidem rem quam ab.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Features;
