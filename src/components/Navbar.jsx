import {  FaMoon, FaBell,FaBars, FaUser} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between md:justify-start px-4 py-4 md:mt-4 bg-[#001c41] text-white md:gap-40">
    
    
     <div className="relative w-[75%] hidden md:inline">
      
  <input
    type="search"
    placeholder="Search . . ."
    className="w-full pl-5  py-2 rounded-lg bg-[#001c41] border border-[#29396f] font-archivo"
  />
  <FiSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
</div>
    <div >
    <FaBars className="text-2xl text-blue-500 md:hidden  "/><Sidebar/>
    </div>
      <div className="flex gap-5 items-center  ">
   
       
        <FiSearch className="text-2xl md:hidden " />
        <FaMoon className="text-2xl md:text-3xl" />
        
        <FaBell className="text-2xl md:text-3xl" />
      
        <div className="bg-blue-400 p-2 rounded-full">
        <FaUser className="text-md text-black md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
