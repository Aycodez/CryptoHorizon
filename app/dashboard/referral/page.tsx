import { cryptos } from "@/lib/constants";
import React from "react";

const Referral = () => {
  return (
    <div className="lg:flex px-5 text-white mt-10 pt-14">
      <div className="lg:w-1/2">
        <h1 className="text-xl font-semibold mb-5 text-center">Referrals</h1>

        <div className="w-full p-1">
          <div className="mb-5">
            <label htmlFor="amount" className="text-sm text-opacity-40">
              Share Your referral link
            </label>
            <input
              type="text"
              name="wallet"
              className="p-2 mt-1 border border-ash border-opacity-40 text-sm bg-transparent w-full"
              value="https://cryptohorizontrading/wddlksls"
            />
            <button className="bg-slate-800 my-3 rounded-lg py-2 px-3">
              Copy Link
            </button>
          </div>
          <div className="mb-5">
            <h2 className="text-lg font-semibold pb-3">Total referral</h2>
            <p className="text-muted-foreground text-opacity-40">
              You do not have any active referrals
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 px-2">
        <h1 className="text-xl p-3 text-center mb-5 font-semibold">
          Withdraw Referral Bonus
        </h1>

        <form className="w-full p-1">
          <div className="mb-5">
            <label htmlFor="deposit" className="text-sm">
              Amount
            </label>
            <input
              type="number"
              name="wallet"
              className="p-2 mt-1 border border-ash border-opacity-40 text-sm bg-transparent w-full"
            />
          </div>
          <label className="font-extralight text-sm text-opacity-40">
            Select Currency
          </label>
          <select
            name="currency"
            // value={view}
            // onChange={handleChange}
            className="border border-ash border-opacity-40 py-3 mb-5 px-2 w-full bg-transparent"
          >
            {cryptos.map((options, index) => (
              <option className="px-3 py-3 bg-black" key={index} value={index}>
                {options.crypto}
              </option>
            ))}
          </select>

          <div className="mb-5">
            <label htmlFor="amount" className="text-sm">
              Wallet Address
            </label>
            <input
              type="text"
              name="wallet"
              className="p-2 mt-1 border-ash border-opacity-40 border text-sm bg-transparent w-full"
              placeholder="Your wallet address..."
            />
          </div>

          <button
            className="py-2 rounded-lg text-sm px-5 bg-primcolor"
            type="submit"
          >
            Withdraw
          </button>
        </form>
      </div>
    </div>
  );
};

export default Referral;
