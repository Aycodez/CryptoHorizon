import useToggle from "@/app/dashboard/ToggleProvider";
import { RiMenu5Fill } from "react-icons/ri";
const AdminNavBar = () => {
  const { toggle, setToggle } = useToggle();
  return (
    <nav className="lg:w-4/5 w-full z-[995] bg-transparent backdrop-blur-lg fixed p-4">
      <div className="fl-cen gap-3 ">
        <RiMenu5Fill
          className="cursor-pointer"
          onClick={() => setToggle(!toggle)}
          size={20}
        />
        <h1 className="text-2xl tracking-wide font-semibold">
          Welcome back Admin 🖐
        </h1>
      </div>
    </nav>
  );
};

export default AdminNavBar;
