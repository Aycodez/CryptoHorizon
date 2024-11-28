"use client";
import AdminNavBar from "../dashboard/components/Admin/AdminNavBar";
import { ReactNode } from "react";
import AdminPanel from "../dashboard/components/Admin/AdminPanel";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen flex bg-black">
      <AdminPanel />
      <div className="lg:w-[75%] w-screen min-h-screen bg-back">
        <AdminNavBar />
        <div className="pt-10 mt-10 px-5 w-full">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
