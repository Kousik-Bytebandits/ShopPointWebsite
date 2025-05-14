import  { useState,useEffect } from "react";
import { FaCaretDown, FaCaretUp ,FaSync,FaCalendarAlt} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const transactions = [
  {
    id: 1,
    logo: "card.svg",
    time: "10.05.25, 03:22",
    details: {
      SKU: "10101",
      Method: "Visa",
      Type: "Deposit",
      Status: "Approved",
      Country: "USA",
      Currency: "USD",
      Fee: "$1000.00",
      Tax: "0.1",
      Total: "$999.00",
    },
  },
  {
    id: 2,
    logo: "tv.png",
    time: "28.04.25, 10:32",
    details: {
      SKU: "80050",
      Method: "Visa",
      Type: "Deposit",
      Status: "Approved",
      Country: "Latvia",
      Currency: "AED",
      Fee: "$1797.11",
      Tax: "0.2",
      Total: "$1793.52",
    },
  },
  {
    id: 3,
    logo: "applepay.svg",
    time: "24.02.25, 05:50",
    details: {
      SKU: "90213",
      Method: "Mastercard",
      Type: "Withdrawal",
      Status: "Cancelled",
      Country: "Canada",
      Currency: "CAD",
      Fee: "$1452.00",
      Tax: "0.1",
      Total: "$1447.90",
    },
  },
  {
    id: 4,
    logo: "iphone.png",
    time: "19.02.25, 05:42",
    details: {
      SKU: "72811",
      Method: "PayPal",
      Type: "Deposit",
      Status: "Rejected",
      Country: "India",
      Currency: "INR",
      Fee: "$210.75",
      Tax: "0.05",
      Total: "$200.21",
    },
  },
  {
    id: 5,
    logo: "ps5.png",
    time: "28.11.24, 05:07",
    details: {
      SKU: "67234",
      Method: "Stripe",
      Type: "Deposit",
      Status: "Rejected",
      Country: "USA",
      Currency: "USD",
      Fee: "$980.45",
      Tax: "0.2",
      Total: "$960.84",
    },
  },
  {
    id: 6,
    logo: "game.png",
    time: "08.11.24, 01:08",
    details: {
      SKU: "98123",
      Method: "Bank Transfer",
      Type: "Deposit",
      Status: "Waiting",
      Country: "Germany",
      Currency: "EUR",
      Fee: "$502.10",
      Tax: "0.15",
      Total: "$497.58",
    },
  },
];

const statusColors = {
  Approved: "bg-[#4f89fc]",
  Waiting: "bg-[#00ba9d]",
  Rejected: "bg-[#aeaeae]",
  Cancelled: "bg-[#ff5470]",
};

const Transaction = () => {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = (id) => {
    setOpenId(openId === id ? null : id);
  };
const [currentDate, setCurrentDate] = useState("");

  const [startDate, setStartDate] = useState(new Date("2025-01-01"));
  const [endDate, setEndDate] = useState(new Date("2025-05-13"));
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
    <div className="text-[#d8e9ff] bg-[#001c41] min-h-screen font-archivo  flex flex-col items-center justify-center p-4">
      
      <div className="w-full max-w-sm space-y-4">
         <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
                 <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
                   <h2 className="text-[30px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Transactions</h2>
                   <div className="flex items-center">
                     <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                     <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                     <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                   </div>
                 </div>
               </section>
                <label className="block font-semibold text-xl">Transaction date from:</label>
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
                     className="w-full py-3 pl-3 font-semibold  pr-10 rounded-lg bg-[#001c41] border border-[#375683] text-white placeholder:text-gray-400"
                     placeholderText="Select date range"
                   />
                   <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7da5d6] pointer-events-none" />
                 </div>
                  {/* Product Filter */}
                   <div className="relative w-full">
                     <select className="w-full py-3 pl-3 pr-8 rounded-lg bg-[#001c41] border border-[#375683] text-white appearance-none">
                       <option>Recent</option>
                       <option>Oldest</option>
                     </select>
                     <FaCaretDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#7da5d6] pointer-events-none" />
                   </div>
                     <p className="mb-4 font-normal">View Transactions: <span className="font-bold">6</span>/12</p>
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-[#031123] rounded-md shadow-md overflow-hidden"
          >
            <div
              className="flex items-center justify-between p-4 cursor-pointer"
              onClick={() => toggleDetails(tx.id)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={tx.logo}
                  alt="logo"
                  className="w-10 h-10 bg-white p-1 rounded-md object-contain"
                />
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-white text-sm font-semibold">{tx.time}</span>
                {openId === tx.id ? (
                  <FaCaretUp size={18} className="text-blue-300" />
                ) : (
                  <FaCaretDown size={18} className="text-blue-300" />
                )}
              </div>
            </div>

            {openId === tx.id && tx.details && (
              <div className="text-white  border-t border-[#0B2B50]">
                <table className="w-full text-left border-collapse">
                  <tbody>
                    {Object.entries(tx.details).map(([key, value],) => (
                      <tr
                        key={key}
                        className="border border-[#0B2B50]"
                      >
                        <td className="py-4 px-4 w-1/2 font-bold  border border-[#0B2B50]">
                          {key}
                        </td>
                        <td className="py-4 px-4 border text-sm border-[#0B2B50]">
                          {key === "Status" ? (
                            <span
                              className={` px-3 py-2 rounded-full text-black text-xs font-semibold ${statusColors[value]}`}
                            >
                              {value.toUpperCase()}
                            </span>
                          ) : (
                            value
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;
