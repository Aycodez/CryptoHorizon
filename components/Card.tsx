import { Card } from "@/components/ui/card";
//  CardContent, CardHeader, CardTitle
interface ItemCard {
  plan: string;
  interest: number;
  min: string;
  max: string;
  features: Array<string>;
}
const Plans = ({ item, key }: { item: ItemCard; key: number }) => {
  return (
    <Card
      key={key}
      className="flex rounded-t-3xl -z-40 flex-col dark:bg-transparent items-center justify-between border-primcolor border-opacity-50 shadow-lg border-2 py-5 px-4 mx-6 md:mx-0"
    >
      <div className="relative">
        <div className="absolute -z-10 -top-20 -left-5">
          <div className="hexagon bg-primcolor"></div>
        </div>
        <div className="fl-col-cen -mt-14 mb-21">
          <p className="text-lg font-bold text-white">{item.plan}</p>
          <h1 className="text-2xl font-semibold text-black">
            {item.interest}%
          </h1>
          <p className="text-sm text-center text-white">
            Monthly interest <br /> Rates
          </p>
        </div>
      </div>

      <div className="pt-2">
        <div className="fl-col-cen gap-1 mt-3 pb-2">
          <h2 className="text-2xl">Min - {item.min}$ USD </h2>
          <div className="text-2xl text-primcolor">.</div>
          <h2 className="text-2xl mt-3">Max - {item.max} $ USD</h2>
        </div>
        <hr className="my-2" />
        <h1 className="text-2xl text-center pb-2">Features</h1>
        <ol className="fl-col-cen gap-2 text-sm">
          {item.features.map((feat, index) => (
            <li key={index}>{feat}</li>
          ))}
        </ol>
      </div>
      <button className="bg-primcolor text-white mt-3 w-full py-3 justify-end items-end">
        Invest Now
      </button>
    </Card>
  );
};

export default Plans;
