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
    <div>
     
    <main className="p-4 text-[#d8e9ff] bg-[#001c41] min-h-screen font-archivo md:w-[100%] overflow-x-hidden ">
      
      <section className=" flex flex-col  justify-center md:justify-between  items-center text-center mb-8 ">
        <div className="rounded-xl  w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex  ">
        <h2 className="text-[30px] font-bold  mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Sales Analytics</h2>
        <div className="flex items-center ">
          <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
          <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl " title="Sync" />
          <span className="text-sm text-gray-300 border  mt-5 md:mt-0 w-[100%]  ml-5 mr-5  py-3 rounded-md bg-[#00193b]  border-[#29396f] font-bold">{currentDate}</span>
        </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-6 mb-10">

  <div className="bg-[#031123] rounded-xl shadow-md flex-[0.7] p-4">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between md:justify-start gap-6">
     
      <div className="h-[220px] md:h-[250px] md:w-[22%] w-full border rounded-md bg-[#00193b] border-[#29396f] text-center flex flex-col justify-center items-center">
        <img src="./shoplogo.png" alt="logo" className="w-30 h-20 mb-5" />
        <span className="text-[1.25rem] font-bold">ShopPoint</span>
      </div>

      {/* Title + Description */}
      <div className="md:flex-col">
      <div className="flex-1 ">
        <h2 className="text-[23px] font-bold ">ShopPoint - Retail</h2>
        <p className="text-sm text-gray-400 mt-2">
          Aliquam erat volutpat. Duis molestie ultricies tempus. Mauris sem orci, euismod sit amet.
        </p>
        </div>
        {/* Average Rate */}
        <div className="mt-6 ">
          <h3 className="text-[18px] font-bold">
            Average Rate 2023 <FaInfoCircle className="inline ml-2 text-blue-400" />
          </h3>
       
     
      

    {/* Stats */}
    <div className="grid md:flex gap-4 md:gap-20 mt-6 md:mt-0">
      {/* Income */}
      <div className="bg-[#031123] py-4 rounded-xl flex items-start gap-4">
        <div className="bg-[#00ba9d] p-2 rounded-lg mt-1">
          <FaGem className="text-black text-3xl" />
        </div>
        <div>
          <h3 className="text-[26px] font-bold">
            $<CountUp end={15412} duration={5} separator="," />
          </h3>
          <p className="font-semibold text-[14px]">Income</p>
          <span className="text-[#00af86]">▲ +45.21%</span>
        </div>
      </div>

      {/* Expense */}
      <div className="bg-[#031123] py-4 rounded-xl flex items-start gap-4">
        <div className="bg-[#ff5470] p-2 rounded-lg mt-1">
          <FaMoneyBill className="text-black text-3xl" />
        </div>
        <div>
          <h3 className="text-[26px] font-bold ">
            $<CountUp end={53487} duration={5} separator="," />
          </h3>
          <p className="font-semibold text-[14px]">Expense</p>
          <span className="text-[#ff5470]">▼ -12%</span>
        </div>
      </div>

      {/* Orders */}
      <div className="bg-[#031123] py-4 rounded-xl flex items-start gap-4">
        <div className="bg-[#4f89fc] p-2 rounded-lg mt-1">
          <FaBox className="text-black text-3xl" />
        </div>
        <div>
          <h3 className="text-[26px] font-bold">
            <CountUp end={5412} duration={5} separator="," />
          </h3>
          <p className="font-semibold text-[14px]">New Orders</p>
          <span className="text-[#00af86]">▲ +14.36%</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  {/* Right Image Box */}
  <div className="flex-[0.35] hidden md:block overflow-x-hide">
    <div className="bg-[#031123] rounded-xl h-full ">
      <img src="aaa.png" alt="Balance" className="rounded-xl w-full h-full object-fit" />
    </div>
  </div>
  
</section>
<section className="flex flex-col lg:flex-row gap-6 mb-10 overflow-hidden">
  {/* Sales Statistics */}
  <div className="bg-[#031123] rounded-xl shadow-md md:w-[67%] w-full  md:p-6 flex flex-col justify-between">
    <h2 className="text-xl font-bold md:mb-6 p-6 md:p-0 md:text-[30px]">Sales Statistics 2022</h2>
    <div className="h-[350px] md:h-[400px] -ml-6  ">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
          <XAxis dataKey="month" stroke="#ddd" />
          <YAxis className="hidden md:block" stroke="#ddd" tickFormatter={(v) => `$${v / 1000}k`} />
          <Tooltip contentStyle={{ backgroundColor: "#1c1c3b", border: "none", color: "#fff" }} />
          <Legend iconType="circle" wrapperStyle={{ color: "#ddd" }} />
          <Bar dataKey="Revenue" fill="#c2dfff" barSize={12} radius={[5, 5, 5, 5]} />
          <Bar dataKey="Expense" fill="#8b8d99" barSize={12} radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>

  {/* Total Report */}
  <div className="bg-[#031123] rounded-xl shadow-md lg:w-[32%] w-full p-6 flex flex-col justify-between text-white">
  <div>
    <div className="flex justify-between items-center mb-2">
      <h2 className="text-xl font-bold md:text-[30px]">
        <span>Total</span> <span>Report</span>
      </h2>
      <FaInfoCircle className="text-blue-400" />
    </div>

    <p className="text-sm mb-4">
      <span>All</span> <span>Periods</span> <span>per</span>{" "}
      <span>01/01/2022</span> <span>-</span> <span>08/28/2023</span>
    </p>

    <div className="space-y-4 md:space-y-10 md:mt-10">
      {report.map((item) => (
        <div
          key={item.id}
          className="flex justify-between md:justify-start md:h-[55px] items-center bg-[#00193b] p-3 border border-[#29396f] rounded-lg"
        >
          {/* Icon and Title */}
          <div className="flex items-center gap-3">
            <span className="hidden md:block text-xl">{item.icon}</span>
            <span className="font-bold text-md min-w-[80px] whitespace-nowrap">
              {item.title.split(" ").map((word, i) => (
                <span key={i}>{word} </span>
              ))}
            </span>
          </div>

          {/* Amount and Percentage */}
          <div className="text-right md:flex md:items-center md:gap-5">
            <p className="text-sm font-bold md:px-10 ">
              {item.amount.split(" ").map((part, i) => (
                <span key={i}>{part} </span>
              ))}
            </p>
            <p className={`${item.colorClass} text-xs hidden md:block md:ml-5 md: `}>
              {item.percentage.split(" ").map((word, i) => (
                <span key={i}>{word} </span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <button className="mt-6 w-full bg-[#02c3a5] hover:bg-blue-700 text-white py-3 rounded-full font-semibold">
    <span>More</span> <span>Details</span>
  </button>
</div>

</section>

    </main>
    </div>
  );
};

export default SalesAnalytics;
