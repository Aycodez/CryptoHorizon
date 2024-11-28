import { RiMenu5Fill } from "react-icons/ri";
import { UserButton } from "@clerk/nextjs";
import useToggle from "@/app/dashboard/ToggleProvider";
const UserNavbar = () => {
  const { toggle, setToggle } = useToggle();
  return (
    <nav className="lg:w-4/5 w-full z-[995] fl-cen-j text-white bg-transparent backdrop-blur-lg fixed p-3">
      <div className="fl-cen gap-3">
        <RiMenu5Fill
          onClick={() => setToggle(!toggle)}
          size={30}
          className="cursor-pointer"
        />
        <h1 className="text-2xl tracking-wide font-semibold">Dashboard</h1>
      </div>
      <div className="lg:mr-8">
        <UserButton />
      </div>
    </nav>
  );
};

export default UserNavbar;
