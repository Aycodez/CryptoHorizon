import type { Metadata } from "next";

import { Recursive } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { WebsiteName } from "@/lib/constants";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/lib/queryClient";
import { ToggleProvider } from "./dashboard/ToggleProvider";
// const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "500"] });
const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: WebsiteName,

  description: "Crypto investment website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${recursive.className} bg-back antialiased dark:bg-dark dark:text-white`}
        >
          <QueryClientProvider client={queryClient}>
            <ToggleProvider>{children}</ToggleProvider>
          </QueryClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
