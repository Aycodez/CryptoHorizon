import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={id}
      className={cn(
        "h-full mx-auto w-full max-w-[1300px] px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
