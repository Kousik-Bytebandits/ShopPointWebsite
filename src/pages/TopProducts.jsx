import  { useState,useEffect } from 'react';
import {  FaTshirt,FaSync, FaEllipsisV, FaStar, FaTv, FaHamburger } from 'react-icons/fa';
import { FaUserGear } from 'react-icons/fa6';

const categories = [
  { name: 'Electronics', value: 7.54, color: 'bg-blue-400' },
  { name: 'Fashion', value: 3.90, color: 'bg-rose-500' },
  { name: 'Food & Drinks', value: 9.87, color: 'bg-blue-200' },
  { name: 'Services', value: 6.55, color: 'bg-yellow-400' },
];

const productCards = [
  { category: 'Electronics', value: '$256k', logo: 'electronics.png',icon:FaTv,bgColor:'bg-blue-400' },
  { category: 'Groceries', value: '$87k', logo: 'Groceries.png',icon:FaHamburger ,bgColor:'bg-blue-200'},
  { category: 'Fashion', value: '$142k', logo: 'fashion.png',icon:FaTshirt,bgColor:'bg-rose-500' },
   { category: 'Services', value: '$100k', logo: 'service.png',icon:FaUserGear,bgColor:'bg-yellow-400' },
];

const carouselItems = {
  Electronics: [
    {
      title: 'Oculus Quest 2 VR Headset 64 GB',
      image: 'ps5.png',
      available: 1548,
      sold: 274,
      rating: 4.5,
      
    },
    {
      title: 'Sony WH-1000XM4 Headphones',
      image: 'tv.png',
      available: 890,
      sold: 120,
      rating: 4.8,
      
    },
    {
      title: 'Apple AirPods Pro',
      image: 'game.png',
      available: 1300,
      sold: 400,
      rating: 4.6,
    },
  ],
  Fashion: [
    {
      title: 'Puma Backpack',
      image: 'fashion.png',
      available: 920,
      sold: 186,
      rating: 4.3,
    },
    {
      title: 'Nike Sneakers',
      image: 'iphone.png',
      available: 730,
      sold: 320,
      rating: 4.7,
    },
    {
      title: 'Levi’s Denim Jacket',
      image: 'ps5.png',
      available: 340,
      sold: 98,
      rating: 4.4,
    },
  ],
  Groceries: [
    {
      title: 'Organic Apples - 1kg',
      image: 'Groceries.png',
      available: 470,
      sold: 220,
      rating: 4.2,
    },
    {
      title: 'Almond Milk - 1L',
      image: 'iphone.png',
      available: 580,
      sold: 140,
      rating: 4.5,
    },
    {
      title: 'Fresh Carrots - 1kg',
      image: 'game.png',
      available: 650,
      sold: 200,
      rating: 4.1,
    },
  ],
  Services: [
    {
      title: 'Home Cleaning',
      image: 'service.png',
      available: 100,
      sold: 60,
      rating: 4.9,
    },
    {
      title: 'Plumbing Services',
      image: 'ps5.png',
      available: 90,
      sold: 45,
      rating: 4.7,
    },
    {
      title: 'Electric Repairs',
      image: 'tv.png',
      available: 120,
      sold: 70,
      rating: 4.6,
    },
  ],
};

const TopProducts = () => {
  const [activeIndex, setActiveIndex] = useState({
    Electronics: 0,
    Fashion: 0,
    Groceries: 0,
    Services: 0,
  });

  const handleDotClick = (category, index) => {
    setActiveIndex((prev) => ({ ...prev, [category]: index }));
  };


  const icons = {
    Electronics: <FaTv />,
    Fashion: <FaTshirt />,
    Groceries: <FaHamburger />,
    Services: <FaUserGear />,
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
    <div className="p-4 space-y-4  text-[#d8e9ff] bg-[#001c41]  font-archivo min-h-screen ">
     <section className="flex flex-col justify-center md:justify-between items-center text-center mb-4">
            <div className="rounded w-[100%] h-[150px] md:h-[100px] bg-[#031123] md:flex">
              <h2 className="text-[30px] font-bold mt-4 md:text-left md:w-[60%] md:ml-10 md:mt-5 md:text-[38px]">Top Products</h2>
              <div className="flex items-center">
                <p className="hidden md:inline w-[200px] ml-14 font-bold">Data Refresh</p>
                <FaSync className="hidden md:inline text-blue-500 cursor-pointer md:text-3xl" title="Sync" />
                <span className="text-sm   border border-[#375683] mt-5 md:mt-0 w-[100%] ml-5 mr-5 py-3 rounded-md bg-[#00193b]  font-bold">{currentDate}</span>
              </div>
            </div>
          </section>
      {/* Top Sales by Categories */}
      <div className="bg-[#031123] p-4 rounded">
        <h2 className="text-xl font-bold  mb-6">Top Sales by Categories</h2>
        {categories.map((cat, idx) => (
          <div key={idx} className="mb-3">
            <div className="flex justify-between  font-semibold">
              <span >{cat.name}</span>
              <span className="text-sm">${cat.value.toFixed(2)}k</span>
            </div>
            <div className="w-full h-4 bg-gray-700 rounded-full ">
              <div className={`h-full rounded-full ${cat.color}`} style={{ width: `${(cat.value *5) }%` }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Cards */}
     {productCards.map((card, idx) => {
  const Icon = card.icon;

  return (
    <div key={idx} className="bg-[#031123] p-4 rounded-xl">
      <div className="bg-white rounded-md flex items-center justify-center h-40">
        <img src={card.logo} alt={card.category} className="h-16 object-contain" />
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className={`${card.bgColor} p-2 rounded-md`}>
          <Icon size={25} className="text-black" />
        </div>
        <div>
          <p className="text-sm text-white font-semibold leading-4">{card.category}</p>
          <p className="font-bold text-lg">{card.value}</p>
        </div>
      </div>
    </div>
  );
})}


      {/* Category Carousels */}
     
{Object.keys(carouselItems).map((cat) => {
  const activeIdx = activeIndex[cat];

  const iconBgColors = {
    Fashion: 'bg-rose-500',
    Electronics: 'bg-blue-600',
    Services: 'bg-yellow-500',
    Groceries: 'bg-blue-200',
  };


  return (
    <div key={cat} className="mb-10">
      {/* Section Header */}
      <div className="flex px-1 items-center justify-between mb-4 mt-8">
        <div className="flex items-center gap-2">
          <div
            className={`w-10 h-10 ${iconBgColors[cat] || 'bg-gray-500'} rounded-md flex items-center justify-center`}
          >
            <span className="text-black text-[22px]">{icons[cat]}</span>
          </div>
          <h3 className="text-white text-xl font-semibold">{cat}</h3>
        </div>
      </div>

      {/* Carousel Box */}
      <div className="overflow-hidden rounded">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIdx * 100}%)` }}
        >
          {carouselItems[cat].map((item, i) => (
            <div key={i} className="min-w-full px-1">
              <div className="bg-[#061933] p-6 rounded-lg relative">
                {/* Image Box */}
                <div className="bg-white rounded-md p-2 relative">
                  <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto" />
                  <FaEllipsisV className="absolute top-0 -right-5 text-blue-400 text-lg cursor-pointer" />
                </div>

                {/* Info */}
                <div className="text-sm mt-3 px-1">
                  <p className="font-semibold text-lg w-[60%] text-white leading-5">{item.title}</p>
                <div>
                 {Array.from({ length: 5 }).map((_, index) => {
  const fillLevel = Math.min(Math.max(item.rating - index, 0), 1) * 100;

  return (
    <div key={index} className="relative w-5 h-5 inline-block mr-1">
   
      <FaStar className="text-gray-600 w-full h-full absolute top-0 left-0" />
    
      <FaStar
        className="text-yellow-400 w-full h-full absolute top-0 left-0"
        style={{
          clipPath: `inset(0 ${100 - fillLevel}% 0 0)`,
        }}
      />
    </div>
  );
})}

    </div>
                  <p className="text-green-400 mt-1">Available : {item.available}</p>
                  <p className="text-blue-300">Already sold : {item.sold}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-5 space-x-4">
        {carouselItems[cat].map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(cat, i)}
            className={`w-2.5 h-2.5 rounded-full  transition-all duration-300 ${
              i === activeIdx ? 'bg-blue-500 scale-110' : 'bg-blue-900'
            }`}
          />
        ))}
      </div>
    </div>
  );
})}



    </div>
  );
};

export default TopProducts;
