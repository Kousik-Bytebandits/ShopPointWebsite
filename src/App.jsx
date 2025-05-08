import { BrowserRouter } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SalesAnalytics from "./pages/SalesAnalytics";

function App() {
 

  return (
    <BrowserRouter>
    <div className="relative bg-[#051937] min-h-screen">
      <Navbar  />
      <Sidebar  />
      <div className="ml-0 md:ml-64 transition-all duration-300">
        <SalesAnalytics />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
