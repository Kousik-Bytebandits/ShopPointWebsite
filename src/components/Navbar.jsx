import {  FaMoon, FaBell, FaUser, FaFacebookMessenger } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
  return (
    <div className="flex items-center justify-end px-4 py-4 bg-[#051937] text-white shadow">
     
      <div className="flex gap-4 items-center">
        <FiSearch className="text-2xl" />
        <FaMoon className="text-2xl" />
        <img src="flag.png" alt="Flag" className="w-6 h-6 rounded-xl" />
        <FaBell className="text-2xl" />
        <FaFacebookMessenger className="text-2xl"/>
        <div className="bg-blue-400 p-2 rounded-full">
        <FaUser className="text-md text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
