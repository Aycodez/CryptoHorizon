import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  ChartCandlestick,
  ShoppingCart,
  CircleDollarSign,
  CircleArrowDown,
} from "lucide-react";

const Admin = () => {
  const icons = [
    <Users key={Math.random() * 10} />,
    <CircleDollarSign key={Math.random() * 10} />,
    <CircleArrowDown key={Math.random() * 10} />,
    <ChartCandlestick key={Math.random() * 10} />,
    <ShoppingCart key={Math.random() * 10} />,
  ];
  const show = [
    "Total Investments",
    "Total amount invested",
    "Requested withdrawal",
    "Total Amount withdrawm",
    "Total Amount deposited",
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
      {show.map((item, index) => (
        <Card key={index} className="dark:bg-medium w-full p-2">
          <CardContent className="flex justify-between">
            <div className="fl-col font-semibold">
              <p className="text-sm ">{item}</p>
              <span className="text-3xl justify-self-end items-end pt-2">
                0
              </span>
            </div>
            <div>
              <div className="bg-back rounded-full text-slate-700 p-2 bg-opacity-80 ">
                {icons[index]}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Admin;
