import  { useState,useEffect } from "react";
import {
  FaSearch,
  FaPlusCircle,
  FaFileDownload,
  FaEdit,
  FaEllipsisV,
  FaSync,
  FaCaretDown,
  
} from "react-icons/fa";

const initialProducts = [
  {
    id: "TR-001",
    name: "Xiaomi WiFi Repeater Pro",
    sku: "TR-001",
    stock: 120,
    price: "$254",
    category: "Electronics",
    status: "In stock",
    image: "game.png",
    expanded: false,
  },
  {
    id: "TR-002",
    name: "HP Wireless Mouse",
    sku: "TR-002",
    stock: 60,
    price: "$89",
    category: "Accessories",
    status: "In stock",
    image: "tv.png",
    expanded: false,
  },
  {
    id: "TR-003",
    name: "Logitech K380 Keyboard",
    sku: "TR-003",
    stock: 30,
    price: "$120",
    category: "Peripherals",
    status: "Limited",
    image: "ps5.png",
    expanded: false,
  },
  {
    id: "TR-004",
    name: "TP-Link WiFi Router",
    sku: "TR-004",
    stock: 0,
    price: "$140",
    category: "Networking",
    status: "Out of stock",
    image: "iphone.png",
    expanded: false,
  },
];

export default function ProductFilterPanel() {
  const [products, setProducts] = useState(initialProducts);

  const toggleExpand = (index) => {
    const updated = [...products];
    updated[index].expanded = !updated[index].expanded;
    setProducts(updated);
  };

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
  return (
    <div className="w-full text-[#d8e9ff] bg-[#001c41]  font-archivo space-y-4 min-h-screen p-4">
     <section className="flex flex-col  justify-center md:justify-between items-center  text-center mb-6">
                 <div className="rounded w-[100%] h-[160px] md:h-[100px] bg-[#031123] md:flex">
                   <h2 className="mt-1 text-[30px] font-bold  md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Products<span className="flex items-center justify-center  -mt-4 md:inline"> Management</span> </h2>
                  
                   <div className="flex items-center">
                     <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                     <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                     <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                   </div>
                 </div>
               </section>
      {/* Search */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search Product"
          className="w-full bg-[#072142] border border-[#29396f] text-sm placeholder-white/70 px-4 py-3 rounded-lg pr-10 focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-3.5 h-4 w-4 text-blue-400" />
      </div>

      {/* Add New Product */}
      <button className="w-full bg-[#00ba9d] hover:bg-[#00dfa3]  font-semibold py-2 rounded-full flex items-center justify-center gap-2">
      Add new product   <FaPlusCircle className="h-4 w-5" /> 
      </button>

      {/* Export CSV */}
      <button className=" w-full border-2 border-blue-500 bg-[#031123] font-bold text-blue-500  py-2 rounded-full flex items-center justify-center gap-2">
         Export CSV<FaFileDownload className="h-5 w-5" />
      </button>

      {/* Heading */}
      <div className="text-white  text-md">Products:</div>

      {/* Product Tabs */}
      <div className="text-sm text-white space-x-4  pb-1">
        <span className="font-bold">All <span className="font-normal">(16)</span> </span>
        <span className="text-white/50">|</span>
        <span className="text-blue-400 cursor-pointer font-bold">Published <span className="text-white">(7)</span> </span>
        <span className="text-white/50">|</span>
        <span className="text-blue-400 cursor-pointer font-bold">Drafts  <span  className="text-white">(5)</span></span>
        <span className="text-white/50">|</span>
        <span className="text-blue-400 cursor-pointer font-bold">Trash  <span  className="text-white">(4)</span> </span>
      </div>

      {/* Dropdowns */}
      {[
        "Stock Status",
        "Product Category",
        "Product Seller",
        "Product Type",
        "Additional Options",
      ].map((label, idx) => (
        <div
          key={idx}
          className="bg-[#072142] rounded text-gray-400 px-4 py-3 border border-[#29396f] flex justify-between items-center cursor-pointer hover:bg-[#0b294d]"
        >
          {label} <FaCaretDown className="text-blue-400  h-4 w-3" />
        </div>
      ))}

      {/* Buttons */}
      <div className="flex gap-2 font-bold">
        <button className="flex-1 bg-[#4f89fc]  py-2 rounded-full ">
          Apply 
        </button>
        <button className="flex-1 border-2 border-blue-500 bg-[#031123] text-blue-400 hover:bg-white/10 py-2 rounded-full">
          Clear
        </button>
      </div>

      {/* Select Action */}
      <div className="bg-[#072142] text-gray-400 border border-[#29396f] rounded px-4 py-3  flex justify-between items-center cursor-pointer hover:bg-[#0b294d]">
        Select Action <FaCaretDown className="h-4 w-3 text-blue-400" />
      </div>

 {/* View Products */}
      <div className=" text-white pt-2">View products: {products.length}/16</div>
      
      {/* Product Cards */}
      <div className="space-y-4 pt-2">
        {products.map((product, index) => (
          <div key={index} className="bg-[#031123] rounded p-4 py-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                <img src={product.image} alt={product.id} className="w-6 h-6 rounded" />
                <span className="font-semibold text-white text-sm">{product.id}</span>
              </div>
              <div className="flex items-center gap-3 text-blue-400">
                <FaCaretDown
                  className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${
                    product.expanded ? "rotate-180" : ""
                  }`}
                  onClick={() => toggleExpand(index)}
                />
                <FaEdit className="w-4 h-4 cursor-pointer" />
                <FaEllipsisV className="w-4 h-4 cursor-pointer" />
               
              </div>
            </div>

            {/* Expanded Content */}
            {product.expanded && (
              <div className="bg-[#02142b] border border-[#29396f] rounded overflow-hidden">
                <div className="border-b border-[#29396f] p-3 font-semibold">Product</div>
                <div className="flex items-center gap-3 border-b border-[#29396f] p-3">
                  <img src={product.image} className="w-10 h-10" />
                  <div className="font-semibold">{product.name}</div>
                </div>
                <div className="border-b border-[#29396f] p-3 font-semibold">SKU: {product.sku}</div>
                <div className="border-b border-[#29396f] p-3 font-semibold">
                  Stock status:{" "}
                  <span className={product.status === "In stock" ? "text-green-400" : product.status === "Limited" ? "text-yellow-400" : "text-red-400"}>
                    {product.status}
                  </span>{" "}
                  ({product.stock})
                </div>
                <div className="border-b border-[#29396f] p-3 font-semibold">Price: {product.price}</div>
                <div className="p-3 font-semibold">
                  Category: <span className="text-blue-400 font-semibold">{product.category}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

     
    </div>
  );
}
