import { FaGem, FaBox, FaInfoCircle, FaMoneyBill, FaSync, FaMoneyBillWave, FaCreditCard, FaPiggyBank,} from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import CountUp from "react-countup";

const data = [
  { month: "Jan", Revenue: 3500, Expense: 7000 },
  { month: "Feb", Revenue: 3000, Expense: 2500 },
  { month: "Mar", Revenue: 2000, Expense: 10000 },
  { month: "Apr", Revenue: 5000, Expense: 4500 },
  { month: "May", Revenue: 8500, Expense: 5200 },
  { month: "Jun", Revenue: 3000, Expense: 7000 },
  { month: "Jul", Revenue: 1500, Expense: 6000 },
  { month: "Aug", Revenue: 4000, Expense: 5000 },
  { month: "Sep", Revenue: 9000, Expense: 7200 },
  { month: "Oct", Revenue: 6000, Expense: 4800 },
  { month: "Nov", Revenue: 8200, Expense: 3000 },
  { month: "Dec", Revenue: 4000, Expense: 5000 },
];

const report = [
  {
    id: 1,
    title: "Revenue",
    amount: "$176,120",
    icon: <FaMoneyBillWave className="text-yellow-400 text-xl" />,
    percentage: "▲ +45%",
    colorClass: "text-green-500",
  },
  {
    id: 2,
    title: "Expense",
    amount: "$310,452",
    icon: <FaCreditCard className="text-blue-400 text-xl" />,
    percentage: "▼ -12%",
    colorClass: "text-red-500",
  },
  {
    id: 3,
    title: "Profit",
    amount: "$342,558",
    icon: <FaPiggyBank className="text-green-400 text-xl" />,
    percentage: "▲ +14%",
    colorClass: "text-green-500",
  },
];

const SalesAnalytics = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "2-digit",
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
    <main className="p-6 text-[#d8e9ff] bg-[#001c41] min-h-screen font-archivo">
      <section className=" flex flex-col md:flex-row justify-center items-center text-center mb-8 ">
        <div className="rounded-xl  w-[100%] h-[150px] bg-[#031123]   ">
        <h2 className="text-[30px] font-bold  mt-4 ">Sales Analytics</h2>
        <div className="flex items-center ">
          <p className="hidden md:inline">Data Refresh</p>
          <FaSync className="hidden md:inline text-gray-400 cursor-pointer" title="Sync" />
          <span className="text-sm text-gray-300 border  mt-5 w-[100%] ml-5 mr-5  py-3 rounded-md bg-[#00193b]  border-[#29396f]">{currentDate}</span>
        </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row gap-6 mb-10">
        <div className="bg-[#031123] rounded-xl shadow-md flex-1 p-4">
          <div className="flex items-center justify-between flex-col">
            <div className="h-[220px] mb-5 border w-[100%] rounded-md bg-[#00193b]  border-[#29396f] text-center flex justify-center items-center flex-col">
            <img src="./shoplogo.png" alt="logo" className="w-30 h-20 mb-5 " />
            <span className="text-[1.25rem]  font-bold">ShopPoint</span>
            </div>
            <div>
              <h2 className="text-[23px] font-bold">ShopPoint - Retail</h2>
              <p >Aliquam erat volutpat. Duis molestie ultricies tempus.</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-[18px] font-bold">
              Average Rate 2023 <FaInfoCircle className="inline ml-2 text-blue-400" />
            </h3>
          </div>

          <div className="grid md:grid-cols-3  ">
            <div className="bg-[#031123] py-4 rounded-xl flex items-start gap-6">
            <div className="bg-[#00ba9d] p-2 rounded-lg mt-3">
            <FaGem className="text-black text-3xl " />
            </div>
              <div>
                <h3 className="text-[26px] font-bold">
                  $<CountUp end={15412} duration={5} separator="," />
                </h3>
                <p className="font-semibold text-[14px]">Income</p>
                <span className="text-[#00af86]">▲ +45.21%</span>
              </div>
            </div>

            <div className="bg-[#031123] py-2 rounded-xl flex items-start gap-6">
            <div className="bg-[#ff5470] p-2 rounded-lg mt-3" >
            <FaMoneyBill className="text-black text-3xl" />
              </div>
              
              <div>
                <h3 className="text-[26px] font-bold">
                  $<CountUp end={53487} duration={5} separator="," />
                </h3>
                <p className="font-semibold text-[14px]">Expense</p>
                <span className="text-[#ff5470]">▼ -12%</span>
              </div>
            </div>

            <div className="bg-[#031123] py-2 rounded-xl flex items-start gap-6">
            <div className="bg-[#4f89fc] p-2 rounded-lg mt-3">
            <FaBox className="text-black text-3xl " />
            </div>
              
              <div>
                <h3 className="text-[26px] font-bold">
                  $<CountUp end={5412} duration={5} separator="," />
                </h3>
                <p className="font-semibold text-[14px]">New Orders</p>
                <span className="text-[#00af86]">▲ +14.36%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 hidden">
          <img src="./aaa.png" alt="Balance" className="rounded-xl w-full object-cover h-full" />
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-[#031123]  rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 p-4">Sales Statistics 2022</h2>
          <div className="h-[300px] font-bold -ml-10 md:ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                <XAxis dataKey="month" stroke="#ddd" />
            <YAxis className="md:inline hidden" stroke="#ddd" tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip contentStyle={{ backgroundColor: "#1c1c3b", border: "none", color: "#fff" }} />
                <Legend iconType="circle" wrapperStyle={{ color: "#ddd" }} />
                <Bar  dataKey="Revenue" fill="#c2dfff" barSize={11} radius={[5, 5, 5, 5]} />
                <Bar dataKey="Expense" fill="#8b8d99" barSize={11} radius={[5, 5, 5, 5]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#031123] p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Total Report</h2>
            <FaInfoCircle className="inline ml-2 text-blue-400" />
          </div>
          <p className="text-sm mb-4">All Periods per 01/01/2022 - 08/28/2023</p>

          <div className="space-y-6">
            {report.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-[#00193b] p-3 border-[#29396f] border rounded-lg">
                <div className="flex items-center gap-4 ">
                  <span className="hidden">{item.icon}</span>
                  <span className="font-bold text-[16px]">{item.title}</span>
                </div>
                <div className="text-right">
                  <p className="text-[14px] font-bold">{item.amount}</p>
                  <p className={`${item.colorClass} text-sm hidden`}>{item.percentage}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full bg-[#02c3a5] hover:bg-blue-700 text-white py-2 rounded-full font-semibold">
            More Details
          </button>
        </div>
      </section>
    </main>
  );
};

export default SalesAnalytics;
