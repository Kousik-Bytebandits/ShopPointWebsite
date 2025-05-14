import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex h-screen bg-[#051937]">
        {/* Left panel - 30% */}
        <div className="md:w-[20%] ">
          <Sidebar />
        </div>

        {/* Right panel - 70% */}
        <div className="md:w-[80%] md:px-12 overflow-y-auto scrollbar-hidden bg-[#001c41]">
         <Navbar/>
          <Routes>
             <Route path="/" element={<SalesAnalytics />} />
             <Route path='/products-grid' element={<ProductsGrid/>}/>
             <Route path='/product-editor' element={<ProductEditor/>}/>
             <Route path='/orders' element={<Orders/>}/>
             <Route path='/customers' element={<Customers/>}/>
             <Route path='/reviews' element={<Reviews/>}/>
             <Route path='/transactions' element={<Transaction/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
