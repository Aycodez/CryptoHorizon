import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Avoid mismatch between server and client rendering
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="relative w-16 h-8 fl-cen dark:bg-gray bg-orange-500 cursor-pointer rounded-full p-1"
    >
      <FaMoon className="text-white" size={18} />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <BsSunFill className="ml-auto text-yellow-400" size={18} />
    </div>
  );
};

export default ToggleButton;
