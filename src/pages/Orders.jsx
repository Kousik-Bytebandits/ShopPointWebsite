import { useState,useEffect } from "react";
import {
  FaBan,
  FaUndo,
  FaSync,
  FaCalendarAlt,
  FaChevronDown,
  FaEllipsisV,
  FaCaretDown,
  FaStar,
  FaEdit
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheckToSlot, FaListCheck } from "react-icons/fa6";

const orders = [
  {
    id: "#123456",
    product: {
      name: "Oculus Quest 2 VR Headset 64 GB",
      regularPrice: "$600",
      salePrice: "$559",
      image: "ps5.png",
    },
    sku: "123456FR",
    category: "Electronics",
    payment: "$600",
    status: "Completed",
    rate: 3.5,
  },
  {
    id: "#154844",
    product: {
      name: "Logitech MX Master 3S Mouse",
      regularPrice: "$120",
      salePrice: "$99",
      image: "iphone.png",
    },
    sku: "154844US",
    category: "Accessories",
    payment: "$99",
    status: "Confirmed",
    rate: 5,
  },
  {
    id: "#202587",
    product: {
      name: "Dell Ultrasharp 27 Monitor",
      regularPrice: "$750",
      salePrice: "$699",
      image: "tv.png",
    },
    sku: "202587DE",
    category: "Monitors",
    payment: "$699",
    status: "Refunded",
    rate: 2.5,
  },
  {
    id: "#202587",
    product: {
      name: "Dell Ultrasharp 27 Monitor",
      regularPrice: "$750",
      salePrice: "$699",
      image: "tv.png",
    },
    sku: "202587DE",
    category: "Monitors",
    payment: "$1588",
    status: "Cancelled",
    rate: 0,
  },
];

function Orders() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [startDate, setStartDate] = useState(new Date("2025-01-01"));
  const [endDate, setEndDate] = useState(new Date("2025-05-13"));
 const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setCurrentDate(`${formattedDate} ${formattedTime} PM`);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusColors = {
  Completed: "bg-[#4f89fc]",
  Confirmed: "bg-[#00ba9d]",
  Refunded: "bg-[#aeaeae]",
  Cancelled: "bg-[#ff5470]",
};

  return (
    <div className="p-4  text-[#d8e9ff] bg-[#001c41]  font-archivo space-y-4 min-h-screen">
      <div className="  rounded-md space-y-4">
         <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
                <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
                  <h2 className="text-[32px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Orders</h2>
                  <div className="flex items-center">
                    <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                    <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                    <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                  </div>
                </div>
              </section>
        {/* Sales Period */}
      
<div className="space-y-3 text-white  font-medium w-full">
  {/* Sales Period */}
  <label className="block font-semibold text-xl">Sales period:</label>
  <div className="relative flex flex-col w-full">
    <DatePicker
      selected={startDate}
      onChange={(dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
      }}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      className="w-full py-3 pl-3 font-semibold  pr-10 rounded bg-[#001c41] border border-[#375683] text-white placeholder:text-gray-400"
      placeholderText="Select date range"
    />
    <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7da5d6] pointer-events-none" />
  </div>

  {/* Product Filter */}
  <div className="relative w-full">
    <select className="w-full py-3 pl-3 pr-8 rounded bg-[#001c41] border border-[#375683] text-white appearance-none">
      <option>All Products</option>
      <option>Electronics</option>
    </select>
    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7da5d6] pointer-events-none" />
  </div>

  {/* Sorting Filter */}
  <div className="relative w-full">
    <select className="w-full py-3 pl-3 pr-8 rounded bg-[#001c41] border border-[#375683] text-white appearance-none">
      <option>Default sorting</option>
      <option>Newest</option>
      <option>Oldest</option>
    </select>
    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7da5d6] pointer-events-none" />
  </div>
</div>
        {/* Average Rate Section */}
        <div className="bg-[#031123] p-4 rounded space-y-2">
          <h3 className="font-semibold mb-5 text-xl">Average Rate (%)</h3>
          <div >
            <div className="flex justify-between text-sm font-semibold ">
            <p className="">Product Views</p>
            <p>87%</p>
            </div>
            <div className="w-full bg-gray-700 h-4 mt-2 rounded-full mb-3">
              <div className="bg-[#d8e9ff]  h-4 rounded-full" style={{ width: "87%" }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-sm font-semibold">
            <p className="">Cart Abandonment Rate</p>
            <p>23%</p>
            </div>
            <div className="w-full bg-gray-700 h-4 mt-2 rounded-full">
              <div className="bg-[#d8e9ff] h-4 rounded-full " style={{ width: "23%" }}></div>
            </div>
          </div>
        </div>

        {/* Order Status Boxes */}
         <div className="space-y-4">
      {/* Orders Completed */}
      <div className="bg-[#031123] p-4 rounded flex items-start justify-between shadow-md">
        <div className="flex flex-col ">
          <div className="w-10 h-10 bg-[#4f89fc] mb-6 rounded flex items-center justify-center">
            <FaCheckToSlot className="text-black text-2xl" />
          </div>
          <p className="  font-semibold">Orders Completed</p>
          <p className="text-2xl font-bold ">2,345</p>
        </div>
        <FaEllipsisV className="text-blue-400 text-xl" />
      </div>

      {/* Orders Confirmed */}
      <div className="bg-[#031123] p-4 rounded flex items-start justify-between shadow-md">
        <div className="flex flex-col ">
          <div className="w-10 h-10 bg-[#00ba9d] mb-6 rounded flex items-center justify-center">
            <FaListCheck className="text-black text-2xl " />
          </div>
          <p className="  font-semibold">Orders Confirmed</p>
          <p className="text-2xl font-bold ">323</p>
        </div>
        <FaEllipsisV className="text-blue-400 text-xl" />
      </div>

      {/* Orders Canceled */}
      <div className="bg-[#031123] p-4 rounded flex items-start justify-between shadow-md">
        <div className="flex flex-col ">
          <div className="w-10 h-10 bg-[#ff5470] rounded mb-6 flex items-center justify-center">
            <FaBan className="text-black text-2xl" />
          </div>
          <p className="  font-semibold">Orders Canceled</p>
          <p className="text-2xl font-bold ">17</p>
        </div>
        <FaEllipsisV className="text-blue-400 text-xl" />
      </div>

      {/* Orders Refunded */}
      <div className="bg-[#031123] p-4 rounded flex items-start justify-between shadow-md">
        <div className="flex flex-col ">
          <div className="w-10 h-10 bg-[#aeaeae] mb-6 rounded flex items-center justify-center">
            <FaUndo className="text-black text-2xl" />
          </div>
          <p className="  font-semibold">Orders Refunded</p>
          <p className="text-2xl font-bold ">2</p>
        </div>
        <FaEllipsisV className="text-blue-400 text-xl" />
      </div>
    </div>

        {/* Order Details */}
      {orders.map((order) => (
  <div key={order.id} className="bg-[#031123] p-4 rounded mb-2">
    {/* Header with Order ID and action icons */}
    <div className="flex justify-between items-center text-blue-400">
      <p className="font-semibold">{order.id}</p>
      <div className="flex items-center gap-2">
        <FaCaretDown
          className="cursor-pointer"
          onClick={() =>
            setSelectedOrder(selectedOrder === order.id ? null : order.id)
          }
        />
        <FaEdit className="cursor-pointer" />
        <FaEllipsisV className="cursor-pointer" />
      </div>
    </div>

    {/* Order Details */}
    {selectedOrder === order.id && (
      <div className="mt-2 border border-[#375683] rounded  ">
        {/* Product Section */}
        <div className="border-b border-[#375683] p-3 font-semibold">
          Product
        </div>
        <div className="flex items-center gap-3 p-4 border-b border-[#375683]">
          <img
            src={order.product.image}
            alt="Product"
            className="w-15 h-16 object-cover rounded"
          />
          <div className="px-2">
            <p className="font-bold  mb-1">{order.product.name}</p>
            <p className="font-semibold text-white text-sm">Regular price: {order.product.regularPrice}</p>
            <p className="font-semibold text-white text-sm">Sale price: {order.product.salePrice}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 border-b  border-[#375683]">
          <div className="border-r border-[#375683] p-3 font-semibold">SKU</div>
          <div className="p-3 text-white">{order.sku}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-[#375683]">
          <div className="border-r border-[#375683] p-3 font-semibold">Category</div>
          <div className="p-3 text-white">{order.category}</div>
        </div>
        <div className="grid grid-cols-2 border-b border-[#375683]">
          <div className="border-r border-[#375683] py-5 px-3 font-semibold">Payment</div>
          <div className="p-3 text-white font-semibold border-[#375683]">
            {order.payment} <span className="block text-sm font-normal">Fully paid</span>
          </div>
        </div>
      <div className="grid grid-cols-2 border-b border-[#375683]">
  <div className="border-r border-[#375683] py-5 px-3 font-semibold">Status</div>
  <div className="p-5">
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold text-black uppercase ${
        statusColors[order.status] || 'bg-gray-500'
      }`}
    >
      {order.status}
    </span>
  </div>
</div>
        <div className="grid grid-cols-2">
  <div className="border-r border-[#375683] p-4 font-semibold">Rate</div>
  <div className="p-3 flex items-center gap-1">
    {Array.from({ length: 5 }).map((_, index) => {
      const fillLevel = Math.min(Math.max(order.rate - index, 0), 1) * 100;

      return (
        <div key={index} className="relative w-5 h-5">
          
          <FaStar
            className="text-yellow-400 absolute top-0 left-0 w-full h-full"
            style={{
              clipPath: `inset(0 ${100 - fillLevel}% 0 0)`,
            }}
          />
         
          <FaStar className="text-gray-600 w-full h-full" />
        </div>
      );
    })}
  </div>
</div>

      </div>
    )}
  </div>
))}

      </div>
    </div>
  );
}

export default Orders;
