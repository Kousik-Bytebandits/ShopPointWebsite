import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaChevronDown,
  FaChevronUp,
  FaInbox,
  
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 760);
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const sidebarRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 760);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        window.innerWidth < 760
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      
      {!isOpen && window.innerWidth < 760 && (
        <button
          className="text-white p-2 absolute  left-2 z-50 py-9 rounded "
          onClick={() => setIsOpen(true)}
        >
          <FaBars className="text-2xl text-blue-500 -mt-20 "/>
        </button>
      )}

      {/* Overlay for mobile close on outside click */}
      {isOpen && window.innerWidth < 760 && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[75%] bg-[#031123] text-white transition-transform duration-300 z-40 font-archivo ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-4 text-[#d8e9ff] text-2xl font-bold flex items-center gap-2 border-b border-[#1e2b4a]">
        <img src="shoplogo.png" className="w-12 "></img>
          ShopPoint
        </div>

        {/* Dashboard Section */}
        <ul className="p-4 space-y-3 text-sm">
          <li>
            <button
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3  border border-[#29396f] rounded text-white hover:bg-[#122d5c]"
            >
              <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaInbox />
              Dashboard
              </span>
              {dashboardOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {dashboardOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-[16px]">
                <li>
                  <Link
                    to="/analytics"
                    className="block px-2 py-1 rounded hover:bg-[#1c2d4e]"
                  >
                    Sales Analytics
                  </Link>
                </li>
                
                
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
