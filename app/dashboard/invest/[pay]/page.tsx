"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Payment = ({ params }: { params: paymentQuery }) => {
  const { data } = useQuery<wallets[]>({
    queryKey: ["wallets"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8000/api/wallets");
      return response.json();
    },
  });
  // console.log(data);
  const [payment, setPayment] = useState(data![0].address);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = e.target.value;
    setPayment(data![Number(index)].address);
  };

  return (
    <div className="flex flex-col justify-center text-white mt-10 pt-20 items-center">
      <div className="w-1/2 p-5 fl-col-cen">
        <h1 className="text-lg mb-5">
          Select Payment Method for {params.pay} Plan
        </h1>
        <form className="w-full p-1">
          <label className="font-extralight text-sm">Select Currency</label>
          <select
            name="currency"
            // value={view}
            onChange={handleChange}
            className="border py-3 mb-5 px-2 w-full bg-transparent"
          >
            {data?.map((options, index) => (
              <option className="px-3 py-3 bg-black" key={index} value={index}>
                {options.type}
              </option>
            ))}
          </select>
          <div className="mb-5">
            <label htmlFor="deposit" className="text-sm">
              Amount
            </label>
            <input
              type="number"
              name="wallet"
              className="p-2 text-sm font-light mt-1 border bg-transparent w-full"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="amount" className="text-sm">
              Deposit to this wallet address
            </label>
            <input
              type="text"
              name="wallet"
              className="p-2 mt-1 border text-sm bg-transparent w-full"
              value={payment}
            />
          </div>

          <button
            className="py-3 rounded-lg text-sm px-7 bg-primcolor"
            type="submit"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
