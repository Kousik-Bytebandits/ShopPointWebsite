import { FaUsers, FaUserPlus, FaUserCheck, FaVenus, FaMars, FaGenderless,FaSync, FaCaretUp } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useState,useEffect } from "react";
const pieData = [
  { name: "New Customers", value: 27153, color: "#273241" },
  { name: "Frequent Customers", value: 7587, color: "#4f89fc" },
  { name: "Idle Users", value: 5937, color: "#ff5470" },
  { name: "Cart Abandoners", value: 2309, color: "#f8d518" }
];

const Customers = () => {
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
    <div className="grid grid-cols-1 gap-4 p-4  text-[#d8e9ff] bg-[#001c41]  font-archivo">
         <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
                <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
                  <h2 className="text-[30px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Customers</h2>
                  <div className="flex items-center">
                    <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                    <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                    <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                  </div>
                </div>
              </section>
      {/* Customer Stats */}
      <div className="grid grid-cols-1 gap-4 font-semibold space-y-1">
        <div className="bg-[#031123] rounded p-4 shadow-md text-left ">
          <div className="flex justify-left mb-2">
            <div className="bg-[#00ba9d] p-2 rounded mb-2">
              <FaUsers className="text-black text-3xl " />
            </div>
          </div>
          <div className="text-3xl font-bold ">32,987</div>
          <div className="text-md mt-2">All Customers</div>
        </div>
        <div className="bg-[#031123] rounded p-4 shadow-md text-left">
          <div className="flex justify-left mb-2">
            <div className="bg-[#4f89fc] p-2 rounded mb-2">
              <FaUserPlus className="text-black text-3xl " />
            </div>
          </div>
          <div className="text-3xl font-bold mb-2">17,153</div>
          <div className="text-md">New Customers</div>
        </div>
        <div className="bg-[#031123] rounded p-4 shadow-md text-left">
          <div className="flex justify-left mb-2">
            <div className="bg-[#ff5470] p-2 rounded mb-2">
              <FaUserCheck className="text-black text-3xl" />
            </div>
          </div>
          <div className="text-3xl font-bold mb-2">7,587</div>
          <div className="text-md">Regular Customers</div>
        </div>
      </div>

      {/* Conversion Rate */}
      <div className="bg-[#031123] rounded p-4 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Conversion Rate</h2>
        <table className="w-full text-sm text-center">
          <thead>
            <tr className="text-[#8d8d99] ">
              <th className="py-2 font-light">Year</th>
              <th className="py-2 font-light">Customers</th>
              <th className="py-2 font-light">Trend</th>
              <th className="py-2 font-light">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-600 font-semibold text-lg">
              <td >2022</td>
              <td >3,234</td>
              <td >+10%</td>
              <td >$124k</td>
            </tr>
            <tr className="font-semibold text-lg">
              <td >2023</td>
              <td >12,345</td>
              <td >+35%</td>
              <td >$32k</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 font-semibold space-y-2">
          <div className="text-2xl ">32,547</div>
          <div className="text-lg  "> Regular Customers</div>
          <div className="flex text-[#00ba9d] "><FaCaretUp className="text-2xl "></FaCaretUp><span >+14.08%</span></div>
          <div className="text-2xl">+12,345 </div>
           <div className="text-lg  ">New Customers</div>
          <div className=" text-[#00ba9d] flex"><FaCaretUp className="text-2xl"></FaCaretUp>+23%</div>
        </div>
      </div>

      {/* Retention Pie Chart */}
      <div className="bg-[#031123] rounded p-4 ">
        <h2 className="text-2xl font-semibold mb-8">Customer Retention Rate</h2>
       <div className="focus:outline-none">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={100}
              stroke="none"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        </div>
        <p className="text-lg mt-2">
          <strong>Total Customers - 42,986 in 2023</strong>
        </p>
        <p className="text-md w-[90%] mt-4 text-white">Donec placerat, ipsum et bibendum blandit, ligula lectus ullamcorper lorem, in viverra nisl elit viverra massa. Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis. Vestibulum vitae aliquet felis, at iaculis metus</p>
          <ul className="text-md mt-8 text-white space-y-2 font-semibold space-y-4">
          <li className="flex items-start gap-3">
            <span className="w-6 h-5 rounded-full bg-[#273241] mt-1"></span>
            <span>New Customers - 63%, which is 27,153 visitors</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-6 h-5 rounded-full bg-[#3b82f6] mt-1"></span>
            <span>Frequent Customers - 18%, which is 7,587 visitors</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-5 h-5 rounded-full bg-[#ff5470] mt-1"></span>
            <span>Idle Users - 14%, which is 5,937 visitors</span>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-6 h-5 rounded-full bg-[#facc15] mt-1"></span>
            <span>Cart Abandoners - 5%, which is 2,309 visitors</span>
          </li>
        </ul>
      </div>

      {/* Age & Gender Segmentation */}
      <div className="bg-[#031123] rounded p-4 shadow-md">
       <h2 className="text-xl  font-semibold">Demographic segmentation by Age</h2>
<div className="mt-4 space-y-3 text-md font-semibold">
  <div>
    <div className="flex justify-between  ">
      <span className="">Age 18–25</span>
      <span className="">6,680</span>
    </div>
    <div className="w-full bg-gray-700 h-4 mt-2 rounded-full">
      <div className="bg-[#d8e9ff] h-4 mt-2 rounded-full" style={{ width: "20%" }}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between">
      <span>Age 25–45</span>
      <span className="font-semibold">15,234</span>
    </div>
    <div className="w-full bg-gray-700 h-4 mt-2 rounded-full">
      <div className="bg-[#d8e9ff] h-4 mt-2 rounded-full" style={{ width: "45%" }}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between">
      <span>Age 45–65</span>
      <span className="font-semibold">2,034</span>
    </div>
    <div className="w-full bg-gray-700 h-4 mt-2 rounded-full ">
      <div className="bg-[#d8e9ff] h-4 mt-2 rounded-full " style={{ width: "8%" }}></div>
    </div>
  </div>
  <div>
    <div className="flex justify-between">
      <span>Age over 65</span>
      <span className="font-semibold">792</span>
    </div>
    <div className="w-full bg-gray-700 h-4 mt-2 rounded-full">
      <div className="bg-[#d8e9ff] h-4 mt-2 rounded-full" style={{ width: "5%" }}></div>
    </div>
  </div>
</div>

<h2 className="text-xl font-semibold mt-8">Segmentation by Gender</h2>
<div className="flex justify-left gap-6 items-center mt-4 text-center text-lg">
  <div>
    <div className="bg-blue-500 p-2 rounded-lg inline-block ">
      <FaVenus className="text-black text-2xl" />
    </div>
    <div className=" font-semibold mt-1 ml-2">65%</div>
  </div>
  <div>
    <div className="bg-blue-500 p-2 rounded-lg inline-block">
      <FaMars className="text-black text-2xl" />
    </div>
    <div className=" font-semibold mt-1 ml-2">32%</div>
  </div>
  <div>
    <div className="bg-blue-500 p-2 rounded-lg inline-block">
      <FaGenderless className="text-black  text-2xl" />
    </div>
    <div className=" font-semibold mt-1 ml-2">3%</div>
  </div>
</div>
<p className="text-xs text-gray-300 mt-4">
  Nullam sodales rutrum arcu. Maecenas sed lorem ut dolor tincidunt mattis
</p>
</div>
    </div>
  );
};

export default Customers;
