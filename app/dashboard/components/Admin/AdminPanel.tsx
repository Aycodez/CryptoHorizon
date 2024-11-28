import useToggle from "@/app/dashboard/ToggleProvider";
import { AdminDashboardOptions } from "@/lib/constants";
import {
  ArrowLeft,
  ChartCandlestick,
  Home,
  Mail,
  Settings,
  ShoppingCart,
  User,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
const AdminPanel = () => {
  const { toggle, setToggle } = useToggle();
  useEffect(() => setToggle(false), []);
  const icons = [
    <Home key={Math.random() * 20} />,
    <User key={Math.random() * 20} />,
    <ChartCandlestick key={Math.random() * 20} />,
    <ShoppingCart key={Math.random() * 20} />,
    <Mail key={Math.random() * 20} />,
    <Settings key={Math.random() * 20} />,
    <User2Icon key={Math.random() * 20} />,
  ];
  return (
    <>
      <div className="shadow-lg text-white hidden lg:flex h-screen w-[25%] mx-auto pr-4 pl-8 py-3">
        <div className="w-full pt-10">
          <Link href="/" className="p-2 fl-cen gap-3 w-full mb-5">
            <ArrowLeft />
            <p className="text-sm ">Go back to Site</p>
          </Link>
          {AdminDashboardOptions.map((options, index) => (
            <div key={index} className="p-2 w-full hover:bg-dark rounded-lg">
              <Link href={options.link} className="fl-cen gap-3">
                {icons[index]}
                <p>{options.option}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {toggle && (
        <div className="shadow-lg z-[999] bg-black/70 backdrop-blur-lg text-white fixed lg:hidden h-3/4 w-[60%] md:w-[40%] px-5 mt-20 pt-5">
          <div className="w-full">
            <Link href="/" className="p-2 fl-cen gap-3 w-full mb-5">
              <ArrowLeft />
              <button onClick={() => setToggle(!toggle)} className="text-xl">
                Go to Site
              </button>
            </Link>
            {AdminDashboardOptions.map((options, index) => (
              <div
                key={index}
                onClick={() => setToggle(!toggle)}
                className="p-2 text-lg w-full hover:text-primcolor rounded-lg"
              >
                <Link href={options.link} className="fl-cen gap-3">
                  {icons[index]}
                  <p className="text-sm">{options.option}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPanel;
