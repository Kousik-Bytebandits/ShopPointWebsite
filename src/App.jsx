import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from "./components/Sidebar";
import SalesAnalytics from "./pages/SalesAnalytics";
import Navbar from './components/Navbar';
import ProductsGrid from './pages/ProductsGrid';
import './App.css';
import ProductEditor from './pages/ProductEditor';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Reviews from './pages/Reviews';
import Transaction from './pages/Transactions';
import ProductsManagement from './pages/ProductsManagement';
import TopProducts from './pages/TopProducts';
import Revenue from './pages/Revenue';
import Login from './pages/Login';
import Signup from './pages/SignUp';

const AppContent = () => {
  const location = useLocation();
   const isAuthPage = location.pathname === '/login' || location.pathname === '/sign-up';

  return (
    <div className="md:flex h-screen bg-[#051937]">
       {!isAuthPage && (
        <div className="md:w-[20%]">
          <Sidebar />
        </div>
      )}
      <div className={`${!isAuthPage ? 'md:w-[80%] md:px-12 overflow-y-auto scrollbar-hidden bg-[#001c41]' : 'w-full'}`}>
        {!isAuthPage && <Navbar />}
        <Routes>
          <Route path="/" element={<SalesAnalytics />} />
          <Route path="/products-grid" element={<ProductsGrid />} />
          <Route path="/product-editor" element={<ProductEditor />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/transactions" element={<Transaction />} />
          <Route path="/products-management" element={<ProductsManagement />} />
          <Route path="/top-products" element={<TopProducts />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/login" element={<Login />} />
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
