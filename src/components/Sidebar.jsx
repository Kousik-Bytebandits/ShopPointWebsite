import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronRight,
  FaInbox,
  FaBoxes,
  FaClipboard,
  FaShoppingCart,
   
} from "react-icons/fa";
import { FaMoneyCheckDollar, FaStarHalfStroke } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 760);
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [pagesOpen,setPagesOpen] = useState(false);
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
      {/* Overlay button on mobile */}
      {!isOpen && window.innerWidth < 760 && (
        <button
          className="text-white p-2 absolute left-2 z-50 py-9 rounded"
          onClick={() => setIsOpen(true)}
        ></button>
      )}

      {isOpen && window.innerWidth < 760 && (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-50"></div>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-[75%] md:w-[20%] bg-[#031123] text-white transition-transform duration-300 z-40 font-archivo ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="p-4 text-[#d8e9ff] text-2xl font-bold flex items-center gap-2 border-b border-[#1e2b4a]">
          <img src="shoplogo.png" className="w-12" alt="logo" />
          ShopPoint
        </div>

        {/* Sidebar Sections */}
        <ul className="p-4 space-y-3 text-sm">
          {/* Dashboard Section */}
          <li>
            <button
              onClick={() => setDashboardOpen(!dashboardOpen)}
              className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]"
            >
              <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaInbox />
                Dashboard
              </span>
              {dashboardOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {dashboardOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-[17px] list-disc px-8">
                <li>
                  <Link
                    to="/"
                    className="block  py-2 rounded hover:bg-[#1c2d4e] font-bold"
                  >
                    Sales Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/revenue"
                    className="block  py-2 rounded hover:bg-[#1c2d4e] font-bold"
                  >
                    Revenue by Period
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Products Section */}
          <li>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]"
            >
              <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaBoxes />
                Products
              </span>
              {productsOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {productsOpen && (
              <ul className=" mt-2 space-y-2 text-[17px] font-bold list-disc px-8 ml-6">
               <li>
                  <Link
                    to="/top-products"
                    className="block  py-2 rounded hover:bg-[#1c2d4e]"
                  >
                   Top Products 
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products-grid"
                    className="block py-2 rounded hover:bg-[#1c2d4e]"
                  >
                    Products Grid
                  </Link>
                </li>
                <li>
                  <Link
                    to="/product-editor"
                    className="block  py-2 rounded hover:bg-[#1c2d4e]"
                  >
                    Product Editor
                  </Link>
                </li>
                  <li>
                  <Link
                    to="/products-management"
                    className="block  py-2 rounded hover:bg-[#1c2d4e]"
                  >
                    Products Management
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {/* Orders Section*/ }
          <li>
            <Link to='/orders'
            className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]">
            <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaShoppingCart />
                 Orders</span>
            </Link>
            </li>
             {/* Customers Section*/ }
          <li>
            <Link to='/customers'
            className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]">
            <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaClipboard />
                 Customers</span>
            </Link>
            </li>
                {/*Reviews Section*/ }
          <li>
            <Link to='/reviews'
            className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]">
            <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaStarHalfStroke />
                 Reviews</span>
            </Link>
            </li>
                 {/*Transactions Section*/ }
          <li>
            <Link to='/transactions'
            className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]">
            <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaMoneyCheckDollar />
                 Transactions</span>
            </Link>
            </li>
            {/*Login Section*/ }
            <li>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex justify-between items-center w-full bg-[#00193b] px-4 py-3 border border-[#29396f] rounded text-white hover:bg-[#122d5c]"
            >
              <span className="flex items-center gap-2 text-[18px] font-bold">
                <FaInbox />
                Pages
              </span>
              {pagesOpen ? <FaChevronDown /> : <FaChevronRight />}
            </button>
            {pagesOpen && (
              <ul className="ml-6 mt-2 space-y-2 text-[17px] list-disc px-8">
                <li>
                  <Link
                    to="/login"
                    className="block  py-2 rounded hover:bg-[#1c2d4e] font-bold"
                  >
                    Login
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
