import { balance } from "@/lib/constants";
import { RiBtcFill } from "react-icons/ri";
import { SiLitecoin } from "react-icons/si";
import { FaEthereum, FaDollarSign } from "react-icons/fa";
import { LiaBtc } from "react-icons/lia";
// import { useQuery } from "@tanstack/react-query";
const UserDashboard = () => {
  // const colors = ["red", "blue", "orange", "pink", "gray"];
  const colors = ["#A95C68", "#FFA500", "#E2AC5A", "#660066", "gray"];
  const icons = [
    <RiBtcFill key={Math.random() * 6} className="text-yellow-500" size={30} />,
    <FaEthereum className="text-slate-300" size={30} key={Math.random() * 6} />,
    <FaDollarSign
      className="text-yellow-400"
      size={30}
      key={Math.random() * 6}
    />,
    <LiaBtc className="text-yellow-500" size={30} key={Math.random() * 6} />,
    <SiLitecoin className="text-blue-600" size={30} key={Math.random() * 6} />,
  ];
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["wallets"],
  //   queryFn: async () => {
  //     const response = await fetch("http://localhost:8000/api/wallets");
  //     return response.json();
  //   },
  // });
  return (
    <div className="px-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white mt-10 pt-10 lg:pt-20">
      {balance.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: colors[index], borderRadius: "10px" }}
          className={`flex w-full justify-between px-3 py-4 }`}
        >
          <div className="fl-col gap-3">
            <h2 className="text-[1.1rem] font-semibold">{item}</h2>
            <p>Balance: $0.00</p>
            <p className="text-[0.5rem] text-slate-400 text-muted-foreground">
              Invest Now
            </p>
          </div>
          {icons[index]}
        </div>
      ))}
    </div>
  );
};

export default UserDashboard;
