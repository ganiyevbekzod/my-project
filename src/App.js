import "./assets/styles/index.css"
import Sidebar from "./components/SideBar/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Analytics from "./pages/Analytics/Analytics"
import Invoice from "./pages/Invoice/Invoice"
import Statistics from "./pages/Statistics/Statistics"
import Data from "./pages/Data/Data"
import Calendar from "./pages/Calendar/Calendar"
import Map from "./pages/Map/Map"
const App = () => {
    return (
        <>
  
                <Sidebar />
            <div className="MainCards">
                          <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Analytics" element={<Analytics />} />
                    <Route path="/Invoice" element={<Invoice />} />
                    <Route path="/Statistics" element={<Statistics />} />
                    <Route path="/Data" element={<Data />} />
                    <Route path="/Calendar" element={<Calendar />} />
                    <Route path="/Map" element={<Map/>} />
                </Routes>
            </div>

        </>
    )
}
export default App 
