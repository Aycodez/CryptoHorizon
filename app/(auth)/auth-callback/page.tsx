"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const Page = () => {
  const router = useRouter();
  const { user } = useUser();
  console.log(user?.fullName, user?.emailAddresses[0].emailAddress);
  const { data } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user?.fullName,
          email: user?.emailAddresses[0].emailAddress,
          clerkId: user?.id,
        }),
      });
      return response.json();
    },
    // retry: true,
    // retryDelay: 500,
  });
  //   console.log(data);

  if (data?._id) {
    router.push("/");
  } else {
    alert("Error logging in ");
  }

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
