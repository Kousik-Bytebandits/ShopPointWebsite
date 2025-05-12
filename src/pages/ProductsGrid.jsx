import { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaTv } from "react-icons/fa";


const products = [
  { id: 1, name: "PlayStation 5 Gaming Console", available: 202, sold: 58741, price: 699, salePrice: 599, image: "ps5.png" },
  { id: 2, name: "iPhone 13 Pro ", available: 5221, sold: 36874, price: 1199, salePrice: 1099, image: "iphone.png" },
  { id: 3, name: "SteamDeck ", available: 369, sold: 22841, price: 499, salePrice: 449, image: "game.png" },
  { id: 4, name: "LCD CPU Cooler", available: 641, sold: 20053, price: 600, salePrice: 569, image: "ps5.png" },
  { id: 5, name: "Xbox Series X", available: 1006, sold: 19874, price: 599, salePrice: 579, image: "ps5.png" },
  { id: 6, name: "iPhone 12 Pro ", available: 1152, sold: 10802, price: 1109, salePrice: 1099, image: "iphone11.png" },
  { id: 7, name: "Samsung  ", available: 995, sold: 10452, price: 499, salePrice: 449, image: "tv.png" },
  { id: 8, name: "Quadcopter ", available: 0, sold: 3471, price: 399, salePrice: 389, image: "game.png" },
  { id: 9, name: "AMD Ryzen 7 ", available: 102, sold: 1923, price: 300, salePrice: 289, image: "iphone.png" },
  { id: 10, name: "Acer Laptop ", available: 52, sold: 54, price: 620, salePrice: 589, image: "tv.png" },
  { id: 11, name: "Radeon RX 6750 ", available: 27, sold: 662, price: 620, salePrice: 589, image: "game.png" },
  { id: 12, name: "Naraka  Keyboard", available: 2, sold: 651, price: 139, salePrice: 129, image: "iphone.png" },
];

const ProductGrid = () => {
  const [category, setCategory] = useState("Electronics");
  const [sortOption, setSortOption] = useState("Best Selling");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-GB"); 
      const formattedTime = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentDate(`${formattedDate.replace(/\//g, ".")} ${formattedTime} PM`);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div   >
    <main className="p-4 text-[#d8e9ff] bg-[#001c41] min-h-screen font-archivo ">
      {/* Title and Date */}
      <section className="text-center mb-6 ">
        <div className="bg-[#031123] rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-2">Products Grid</h2>
          <p className="text-sm border rounded-md py-2 bg-[#00193b] border-[#29396f] font-semibold">{currentDate}</p>
        </div>
      </section>

      {/* Category Header */}
      <div className="bg-[#031123] p-5 mb-4 rounded-lg flex items-center gap-2">
        <FaTv className="text-2xl text-blue-400" />
        <h3 className="text-xl font-semibold">Electronics</h3>
      </div>

      {/* Filters */}
      <div className="space-y-4 mb-6">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-md bg-[#00193b] border border-[#29396f] text-white"
        >
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Service</option>
        </select>

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full p-3 rounded-md bg-[#00193b] border border-[#29396f] text-white"
        >
          <option>Best Selling</option>
          <option>Newest First</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
        
      </div>

      {/* View Count */}
      <p className="mb-4 font-medium">View products: <span className="font-medium">12/24</span></p>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-[#031123] p-3 rounded-xl shadow-lg">
            {/* Image */}
            <div className="bg-white rounded-lg mb-10 p-2  ">
              <img
                src={product.image}
                alt={product.name}
                className="w-[100%] h-36 object-contain "
              />
             
            </div>

            {/* Details */}
            <div className="space-y-1">
              <h3 className="text-sm font-bold text-white">{product.name}</h3>
              <p className="text-sm text-[#019783] font-semibold">Available : {product.available}</p>
              <p className="text-sm text-[#4f89fc] font-semibold">Already sold : {product.sold}</p>
              <p className="text-sm text-white font-semibold">Regular price : ${product.price}</p>
              <p className="text-sm font-semibold text-white">Sale price : ${product.salePrice}</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button className="flex-1  py-1 bg-[#031123] border border-[#4f89fc] text-[#4f89fc] rounded-full text-sm">
                <FaEdit className="inline mr-1" /> Edit
              </button>
              <button className="flex-1 ml-1 py-1 bg-[#031123]  text-[#e54d69] border border-[#e54d69] rounded-full text-sm">
                <FaTrash className="inline mr-1" /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
    </div>
  );
};

export default ProductGrid;
