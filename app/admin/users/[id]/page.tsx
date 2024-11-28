import { balance } from "@/lib/constants";

interface Query {
  id: string;
}

const Credit = ({ params }: { params: Query }) => {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="bg-white w-4/5 p-5">
        <h1 className="text-3xl font-semibold mb-5">Credit {params.id}</h1>
        {balance.map((item, index) => (
          <div key={index} className="mb-5">
            <label htmlFor="amount" className="text font-semibold">
              {item}
            </label>
            <input
              type="text"
              name="wallet"
              className="p-2 mt-1 border outline-none border-ash border-opacity-50 text-sm bg-transparent w-full"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Credit;
