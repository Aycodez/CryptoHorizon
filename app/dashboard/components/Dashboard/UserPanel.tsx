import useToggle from "@/app/dashboard/ToggleProvider";
import { UserDashboardOptions } from "@/lib/constants";
import {
  ArrowLeft,
  ChartCandlestick,
  FileClock,
  FolderClock,
  HandHeart,
  LayoutDashboard,
  ShoppingCart,
  Tickets,
} from "lucide-react";
import Link from "next/link";
const UserPanel = () => {
  const icons = [
    <LayoutDashboard key={Math.random() * 20} />,
    <ChartCandlestick key={Math.random() * 20} />,
    <Tickets key={Math.random() * 20} />,
    <FileClock key={Math.random() * 20} />,
    <ShoppingCart key={Math.random() * 20} />,
    <FolderClock key={Math.random() * 20} />,
    <HandHeart key={Math.random() * 20} />,
  ];
  const { toggle, setToggle } = useToggle();
  return (
    <>
      <div className="shadow-lg text-white hidden lg:flex h-screen w-[20%] mx-auto pr-4 pl-8 py-3">
        <div className="w-full">
          <Link href="/" className="p-2 fl-cen gap-3 w-full mb-5">
            <ArrowLeft />
            <p className="text-sm ">Go to Site</p>
          </Link>
          {UserDashboardOptions.map((options, index) => (
            <div key={index} className="p-2 w-full hover:bg-dark rounded-lg">
              <Link href={options.link} className="fl-cen gap-3">
                {icons[index]}
                <p className="text-sm">{options.option}</p>
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
              <p className="text-xl">Go to Site</p>
            </Link>
            {UserDashboardOptions.map((options, index) => (
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

export default UserPanel;
