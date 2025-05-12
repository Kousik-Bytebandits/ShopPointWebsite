import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import SalesAnalytics from "./pages/SalesAnalytics";
import Navbar from './components/Navbar';
import ProductsGrid from './pages/ProductsGrid';
import './App.css';
import ProductEditor from './pages/ProductEditor';

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
