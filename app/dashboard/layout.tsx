"use client";
import UserNavbar from "./components/Dashboard/UserNavbar";
import UserPanel from "./components/Dashboard/UserPanel";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen min-h-screen flex bg-black">
      <UserPanel />
      <div className="lg:w-[80%] w-full">
        <UserNavbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
