"use client";
import { CardItems } from "@/lib/constants";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
const Investment = () => {
  const query = useQuery({
    queryKey: ["wallets"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/wallets");
      return response.json();
    },
  });
  console.log(query.data);
  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white mt-10 pt-20">
      {CardItems.map((item, index) => (
        <div
          key={index}
          className="fl-col-cen w-full border-2 gap-2 py-14 px-3 rounded-md"
        >
          <div className="fl-cen gap-2 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h2 className="text-lg mb-5">{item.plan} Plan</h2>
          <p className="text-sm font-semibold ">Interest - {item.interest}%</p>
          <p className="text-[0.7rem] py-2 font-light tracking-wide text-slate-300">
            Minimum Deposit - ${item.min}
          </p>
          <p className="text-[0.7rem] py-2 font-extralight tracking-wide text-slate-300">
            Maximum Deposit - ${item.max}
          </p>
          <Link
            href={`/dashboard/invest/${item.plan}`}
            className="py-3 rounded-xl font-semibold text-white text-sm px-7 bg-primcolor"
          >
            {/* bg-[#ffb32e */}
            Select plan
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Investment;
