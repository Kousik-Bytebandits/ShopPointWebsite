import { useEffect, useState } from "react";
import { FaSync } from "react-icons/fa";

const ProductEditor = () => {
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
    <div className="p-4  font-archivo  text-[#d8e9ff] ">
      {/* Header */}
      <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
        <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
          <h2 className="text-[30px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Product Editor</h2>
          <div className="flex items-center">
            <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
            <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
            <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Panel */}
        <div className="flex-1 space-y-4 bg-[#031123] p-4 rounded">
          <h2 className="text-lg font-bold ">Product Settings</h2>

          {/* Product Images */}
          <div>
            <label className="block text-sm text-[#848391] font-bold mb-2">Product Images</label>
            <div className="grid grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center justify-center h-[15vh] border border-dashed border-[#375683] rounded-md bg-[#001933] text-blue-400 text-sm cursor-pointer">
                  <label className="text-center font-bold">
                   
                    Browse image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              ))}
            </div>
            <a href="#" className="text-blue-400 font-bold text-sm mt-3 inline-block">More Gallery Options</a>
            <p className="text-sm  mt-2 font-bold">
              Donec luctus metus nec enim imperdiet, in dignissim risus fringilla. Fusce bibendum
              vulputate scelerisque. Donec in nunc quam. Suspendisse at lorem eleifend
            </p>
            <a href="#" className="text-blue-400 text-sm mt-2 font-bold inline-block">Attachment files 📎</a>
          </div>

          {/* Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <div>
              <label className="block text-sm mb-2 text-[#848391] font-bold">Attributes</label>
              <select className="w-full bg-[#001933] border border-[#375683]  p-2 rounded">
                <option>Simple Product</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-sm mb-2 text-[#848391]">L * W * H, inches</label>
              <input type="text" placeholder="10 * 10 * 10" className="w-full bg-[#001933] border border-[#375683]  p-2 rounded" />
            </div>
            <div>
              <label className="block font-bold text-sm mb-2 text-[#848391]">Weight, kg</label>
              <input type="text" placeholder="0.2" className="w-full bg-[#001933] border border-[#375683]  p-2 rounded" />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm mb-2 font-bold text-[#848391] overflow-auto">Description</label>
            <textarea rows="4" placeholder="Description" className="w-full bg-[#001933] border border-[#375683] p-2 rounded"></textarea>
          </div>
        

        {/* Right Panel */}
<div className="flex-1 space-y-4 bg-[#031123]    ">
  <div>
    <label className="block font-bold mb-2 text-sm text-[#848391]">Product Name</label>
    <input type="text" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="Sport Smart Watch" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Brand Name</label>
      <input type="text" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="Pineapple" />
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Category</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933]">
        <option>Electronics</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Regular Price</label>
      <input type="number" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="1000" />
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Sale Price</label>
      <input type="number" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="800" />
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Schedule</label>
      <input type="text" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="20/04/2025 - 26/04/2025" />
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Promotion</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933] ">
        <option>Category 1</option>
      </select>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Product Type</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933]">
        <option>Simple Product</option>
      </select>
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Stock Status</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933] ">
        <option>In Stock</option>
      </select>
    </div>
  </div>

  <div>
    <label className="block font-bold mb-2 text-sm text-[#848391]">SKU</label>
    <input type="text" className="w-full  border border-[#375683] rounded p-2 bg-[#001933]" placeholder="SKU-123456" />
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Stock Status</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933] ">
        <option>In Stock</option>
      </select>
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Quantity in Stock</label>
      <input type="number" className="w-full  border border-[#375683] rounded p-2 bg-[#001933] " placeholder="100" />
    </div>
    <div>
      <label className="block font-bold mb-2 text-sm text-[#848391]">Unit</label>
      <select className="w-full  border border-[#375683] rounded p-2 bg-[#001933] ">
        <option>Pieces</option>
      </select>
    </div>
  </div>

  {/* Payment Methods */}
  <div>
  <label className="block font-bold text-[#848391]">Payment Methods</label>
  <div className="grid  grid-cols-4 items-center gap-3 mt-2">
    {['card.svg', 'visa.svg', 'gpay.svg', 'applepay.svg', 'paypal.svg'].map((src, index) => (
      <div
        key={index}
        className="w-12 h-12 flex items-center justify-center bg-white rounded-lg border border-gray-300 cursor-pointer hover:border-blue-500 transition"
      >
        <img src={src} alt="Payment" className="h-8 w-8 object-contain" />
      </div>
    ))}

    <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200 text-[#848391] text-xl font-bold border border-dashed border-gray-400 hover:bg-gray-300">
      +
    </button>
  </div>
</div>


  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mt-4">
    <button className="bg-[#035ecf] py-2 px-4 rounded-full font-bold w-full sm:w-auto">Save to Drafts</button>
    <button className="bg-[#00ba9d]  py-2 px-4 rounded-full font-bold w-full sm:w-auto">Publish Product</button>
  </div>
</div>
</div>
      </div>
    </div>
  );
};

export default ProductEditor;
