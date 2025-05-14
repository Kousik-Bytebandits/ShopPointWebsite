import  { useState,useEffect } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaUsers,
  FaUserPlus,
  FaUserFriends,
  FaEllipsisV,
  FaTimes,
  FaSync,
  
} from "react-icons/fa";
import { TbMessageForward } from "react-icons/tb";
const reviewData = [
  {
    name: "J. Davidson",
    email: "jdavidson@domain...",
    avatar: "https://i.pravatar.cc/150?img=32",
    date: "13/05/2025, 01:10 PM",
    rating: 4,
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    name: "Sam Lincoln",
    email: "sam@domain....",
    avatar: "https://i.pravatar.cc/150?img=33",
    date: "14/05/2025, 02:09 AM",
    rating: 5,
    content:
      "Iusto beatae itaque occaecati deserunt quis. Vitae odit excepturi quia ad deleniti debitis. Exercitationem reiciendis natus.",
  },
  {
    name: "Grace Mitchell",
    email: "mitchell@dom...",
    avatar: "https://i.pravatar.cc/150?img=47",
    date: "13/05/2025, 11:45 AM",
    rating: 3,
    content: "Officiis voluptatum beatae. Tempora blanditiis incidunt modi.",
  },
  {
    name: "Mark Vallance",
    email: "mark@domain...",
    avatar: "https://i.pravatar.cc/150?img=50",
    date: "12/05/2025, 06:15 PM",
    rating: 4,
    content: "Omnis placeat at porro. Inventore voluptatum doloribus error.",
  },
];

const ratingStats = [
  { stars: 5, percent: 31 },
  { stars: 4, percent: 43 },
  { stars: 3, percent: 19 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 7 },
];

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState(null);
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
    <div className="p-4 space-y-4 text-[#d8e9ff] bg-[#001c41] min-h-screen font-archivo relative">
         {/* Header */}
              <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
                <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
                  <h2 className="text-[30px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Reviews</h2>
                  <div className="flex items-center">
                    <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                    <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                    <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
                  </div>
                </div>
              </section>
       {/* Review Score */}
      <div className="bg-[#031123] p-4 rounded-lg">
        <div className="flex items-center space-x-1 mb-2 text-xl gap-4 text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <h2 className="text-2xl font-bold">4.5</h2>
        <p className="text-sm font-semibold text-white mt-1">Review score</p>
      </div>

      {/* Total Customers */}
      <div className="bg-[#031123] p-4 rounded-lg">
        <div className="bg-teal-500 text-black w-10 h-10 flex items-center justify-center rounded-md mb-2">
          <FaUsers className="text-2xl"/>
        </div>
        <h2 className="text-2xl font-bold">348</h2>
        <p className="text-sm font-semibold text-white mt-1">Total Customers</p>
      </div>

      {/* New Customers */}
      <div className="bg-[#031123] p-4 rounded-lg">
        <div className="bg-blue-500 text-black w-10 h-10 flex items-center justify-center rounded-md mb-2">
          <FaUserPlus className="text-2xl" />
        </div>
        <h2 className="text-2xl font-bold">25%</h2>
        <p className="text-sm font-semibold text-white mt-1">New Customers</p>
      </div>

      {/* Regular Customers */}
      <div className="bg-[#031123] p-4 rounded-lg">
        <div className="bg-red-400 text-black w-10 h-10 flex items-center justify-center rounded-md mb-2">
          <FaUserFriends className="text-2xl"/>
        </div>
        <h2 className="text-2xl font-bold">75%</h2>
        <p className="text-sm font-semibold text-white mt-1">Regular Customers</p>
      </div>

      {/* Rating Breakdown */}
      <div className="bg-[#031123] p-4 rounded-lg space-y-4">
        {ratingStats.map((item) => (
          <div key={item.stars} className="flex font-bold items-center space-x-2 ">
            <span className="flex items-center   space-x-1   ">
              <span>{item.stars}</span>
              <FaStar className="text-yellow-400 text-xl" />
            </span>
            <div className="flex-1 h-4 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="bg-yellow-400 h-full"
                style={{ width: `${item.percent}%` }}
              />
            </div>
            <span className="text-sm font-bold w-8 text-right">
              {item.percent}%
            </span>
          </div>
        ))}
      </div>

      {/* Latest Accepted Reviews */}
      <div className="bg-[#031123] rounded-lg">
        <div className="  px-4 py-3 border-b border-[#123]">
          <h3 className="font-semibold mb-4 text-xl">Latest Accepted Reviews</h3>
          <select className="text-sm flex items-center bg-[#031123] gap-1 text-blue-400">
          <option>  Recent </option>
          <option>Old</option>
          </select>
        </div>
        {reviewData.map((user, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-3 border-b border-[#123]"
          >
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-sm">{user.name}</h4>
                <p className="text-xs text-blue-200">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-blue-300">
              <TbMessageForward
                className="cursor-pointer text-xl"
                onClick={() => setSelectedReview(user)}
              />
              <FaEllipsisV className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>

      {/* Review Modal */}
      {selectedReview && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#031123] p-4 rounded-lg w-72 relative text-white">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold mt-5 text-lg">{selectedReview.name}</h4>
                  <p className=" text-blue-300 ">{selectedReview.email}</p>
                </div>
              </div>
             <button
  onClick={() => setSelectedReview(null)}
  className="border border-blue-400 hover:bg-blue-400 p-1 rounded-full -mt-4"
>
  <FaTimes className=" w-2 h-2 text-blue-400   " />
</button>

            </div>

            {/* Date */}
            <p className="mt-5 text-sm">
              <span className="font-bold ">Date:</span> {selectedReview.date}
            </p>

            {/* Rating */}
            <div className="mt-5 text-sm">
              <span className="font-bold">Rate: </span>
              {Array(selectedReview.rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="inline text-yellow-400 mr-1" />
                ))}
            </div>

            {/* Content */}
            <div className="bg-[#011936] mt-5 p-3 rounded border border-blue-400 text-md h-[250px]">
              {selectedReview.content}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
