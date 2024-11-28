import { cryptos } from "@/lib/constants";

const Withdrawal = () => {
  return (
    <div className="flex flex-col justify-center text-white mt-10 pt-20 items-center">
      <div className="lg:w-1/2 p-5 fl-col-cen">
        <h1 className="text-lg mb-5">Withdrawal</h1>

        <form className="w-full p-1">
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
          <label className="font-extralight text-sm">Select Currency</label>
          <select
            name="currency"
            // value={view}
            // onChange={handleChange}
            className="border py-3 mb-5 px-2 w-full bg-transparent"
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
              className="p-2 mt-1 border text-sm bg-transparent w-full"
              placeholder="Your wallet address..."
            />
          </div>

          <button
            className="py-3 rounded-lg text-sm px-7 bg-blue-500"
            type="submit"
          >
            Deposit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Withdrawal;
