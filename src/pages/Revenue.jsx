
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { useState,useEffect } from "react";
import {  FaGem,FaCoins,FaWallet,FaSync,FaCalendarAlt,  FaMoneyBill, FaCaretDown, FaCaretUp, FaInfoCircle } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";

import { PiCreditCard } from "react-icons/pi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const lineData = [
  { name: "Q1", "2022": 11000, "2023": 6000 },
  { name: "Q2", "2022": 8500, "2023": 9000 },
  { name: "Q3", "2022": 16500, "2023": 7800 },
  { name: "Q4", "2022": 10500, "2023": 12500 },
];

const pieData = [
  { name: "Profit 2022", value: 60 },
  { name: "Profit 2023", value: 40 },
];

const COLORS = ["white", "#14b8a6"];

function formatDollar(value) {
  return `$${(value / 10).toFixed(1)}k`;
}

const statCards = [
  {
    icon: <FaMoneyBill className="text-black w-8 h-8" />, bg: "bg-[#f8d518]",
    label: "Income 2022", value: "$96.1k", change: "+10%", positive: true
  },
  {
    icon: <FaGem className="text-black w-8 h-8" />, bg: "bg-[#ff5470]",
    label: "Profit 2022", value: "$2.1k", change: "+78%", positive: true
  },
  {
        icon: <FaMoneyBill className="text-black w-8 h-8" />, bg: "bg-[#4f89fc]",
    label: "Income 2023", value: "$396.1k", change: "-12%", positive: false
  },
  {
    icon: <FaGem className="text-black w-8 h-8" />, bg: "bg-[#00ba9d]",
    label: "Profit 2022", value: "$80.1k", change: "+65%", positive: true
  }
];
const progressData = [
  { label: "Referral Program Budget", value: 27 },
  { label: "Referral Rate by 100 Purchased", value: 67 },
  { label: "Referral Rate by Campaign", value: 52 },
];

const financeStats = [
  { icon: <FaCoins className="text-yellow-400 w-6 h-6" />, label: "Total Balance", value: "$176.2k" },
  { icon: <PiCreditCard className="text-blue-400 w-6 h-6" />, label: "Total Expense", value: "$32.1k" },
  { icon: <FaWallet className="text-green-400 w-6 h-6" />, label: "Total Profit", value: "$144.1k" },
];



export default function Revenue() {
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
  return (
    <div className="min-h-screen text-[#d8e9ff] bg-[#001c41]  font-archivo p-4 space-y-6">
          <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
                        <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
                          <h2 className="text-[32px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Revenue By Period</h2>
                          <div className="flex items-center">
                            <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                            <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                            <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                          </div>
                        </div>
                      </section>
                {/* Sales Period */}
              
        <div className="space-y-3   font-medium w-full">
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
        </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Popular Tags:</h2>
        <div className="flex flex-wrap gap-4">
          {['Top Rated', 'New In', 'Best Sellers', 'A-Z', 'Reviews'].map(tag => (
            <button
              key={tag}
              className="px-3 py-1.5 rounded-full border-2 border-blue-600 text-blue-600 text-sm font-bold"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Line Chart */}
      <div className="bg-[#031123] p-6 rounded">
        <h2 className="text-2xl font-bold mb-4">Sales Volume</h2>
        <div className="flex space-x-4  mb-4">
          <div className="flex items-center space-x-1">
            <div className="w-6 h-2 rounded bg-slate-100" />
            <span>2022</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-6 h-2 rounded bg-teal-400" />
            <span>2023</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData} margin={{ top: 0, right: 5, bottom: 0, left: -16 }}>
            <CartesianGrid stroke="#0f1e3a" vertical={false} />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" tickFormatter={formatDollar} className="text-xs " />
            <Tooltip 
              contentStyle={{ backgroundColor: "#1a2a47", border: "none" }} 
              labelStyle={{ color: '#fff' }} 
              formatter={(value) => formatDollar(value)}
            />
            <Line type="monotone" dataKey="2022" stroke="#e4f1ff" strokeWidth={6} dot={false} />
            <Line type="monotone" dataKey="2023" stroke="#2dd4bf" strokeWidth={6} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {statCards.map((card, idx) => (
          <div key={idx} className="bg-[#031123] rounded p-4 flex justify-between ">
            <div className="flex flex-col justify-center items-left">
              <div className={`w-12 h-11 rounded-md flex items-center justify-center ${card.bg}`}>
            {card.icon} 
              </div>
              <div className="font-bold">
                <div className=" mt-4 mb-3">{card.label}</div>
                <div className="text-2xl ">{card.value}</div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-10">
              <FiMoreVertical className="text-blue-400 text-2xl " />
              <div className={`flex items-center text-sm font-bold ${card.positive ? 'text-[#00ba9d]' : 'text-red-400'}`}>
                {card.positive ? <FaCaretUp className="w-4 h-5 mr-1" /> : <FaCaretDown className="w-4 h-5 mr-1" />}
                {card.change}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pie Chart and Conversion Rate */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-[#031123] rounded p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Profit Performance</h2>
            <FaInfoCircle className="text-blue-400 w-4 h-4" />
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={0}
                outerRadius={110}
                dataKey="value"
                startAngle={220}
                endAngle={-270}
                 stroke="#031123" 
              strokeWidth={10}
                
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "white", border: "none" }}
                labelStyle={{ color: "#fff" }}
                formatter={(value) => formatDollar(value)}
              />
              <Legend iconType="circle" formatter={(value) => <span className="text-white font-bold  ">{value}</span>} />
            </PieChart>
          </ResponsiveContainer>
        </div>

 {/* Conversion Rate */}
      <div className="bg-[#031123] rounded p-4 shadow-md ">
        <div className="flex justify-between ">
        <h2 className="text-2xl font-semibold mb-4 ">Conversion Rate</h2>
        <FaInfoCircle className="text-blue-400 mt-2"/>
        </div>
        <table className="w-full text-sm text-center">
          <thead>
            <tr className="text-[#8d8d99] uppercase font-bold text-xs">
              <th className="py-2 ">Year</th>
              <th className="py-2 ">Customers</th>
              <th className="py-2 ">Trend</th>
              <th className="py-2 ">Revenue</th>
            </tr>
          </thead>
          <tbody >
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
        <div className="mt-4 font-semibold  flex justify-between">
            <div>
          <div className="text-2xl ">32,547</div>
          <div className="text-lg  "> Regular Customers</div>
          <div className="flex text-[#00ba9d] "><FaCaretUp className="text-2xl "></FaCaretUp><span >+14.08%</span></div>
          </div>
          <div >
          <div className="text-2xl">+12,345 </div>
           <div className="text-lg  ">New Customers</div>
          <div className=" text-[#00ba9d] flex"><FaCaretUp className="text-2xl"></FaCaretUp>+23%</div>
          </div>
        </div>
      </div>
      </div>

       {/* Referral Progress and Finance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="bg-[#031123] rounded p-4">
          <h2 className="text-2xl font-semibold mb-4">Average Referral Rate</h2>
          <div className="space-y-7">
            {progressData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2 font-bold ">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full" style={{ width: `${item.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {financeStats.map((stat, idx) => (
            <div key={idx} className="bg-[#031123] rounded p-4 flex items-center justify-between">
              <div className="flex items-center space-x-20">
                {stat.icon}
                <span className="text-white/80 font-semibold text-lg">{stat.label}</span>
              </div>
              <span className="text-xl font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
