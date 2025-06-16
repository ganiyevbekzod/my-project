import "./assets/styles/index.css"
import { SidebarProvider } from "./Context/SidebarContext.js"
import Sidebar from "./components/SideBar/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Arizalar from "./pages/Arizalar/Arizalar"
import MahalliyTashuvlar from "./pages/MahalliyTashuvlar/MahalliyTashuvlar"
import Mijozlar from "./pages/Mijozlar/Mijozlar.jsx"
import { PulTushumlari } from "./pages/PulTushulari/PulTushumlari"
import { Daromadlar } from "./pages/Daromadlar/Daromadlar"
import { TelegrammalarChegirmalar } from "./pages/TelegrammalarChegirmalar/TelegrammalarChegirmalar"
import { Aktlar } from "./pages/Aktlar/Aktlar"
import { Vagon } from "./pages/Vagon/Vagon"
import { KonvensionTaqiqlar } from "./pages/KonvensionTaqiqlar/KonvensionTaqiqlar"
import { Polis } from "./pages/Sugurta/Sugurta"
import { Ekspeditorlar } from "./pages/Ekspeditorlar/Ekspeditorlar"
import { ShahobchaYollari } from "./pages/ShahobchaYollari/ShahobchaYollari"
import { MesplanKelishuvlar } from "./pages/MesplanKelishuvlar/MesplanKelishuvlar"
import { Poyezdlar } from "./pages/Poyezdlar/Poyezdlar"
import International from "./pages/XalqaroTashuvlar/XalqaroTashuvlar.jsx"
import { HeaderProvider } from "./Context/HeaderContext.js"
const App = () => {

    return (
        <>
            <SidebarProvider>
                <div className="grid-container">
                    <div className="item1 ">
                        <Sidebar />
                    </div>
                    <HeaderProvider>
                        <div className="item2">
                            <Header />
                        </div>
                    </HeaderProvider>

                    <div className="item3">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/Mijozlar" element={<Mijozlar />} />
                            <Route path="/Arizalar" element={<Arizalar />} />
                            <Route path="/MahalliyTashuvlar" element={<MahalliyTashuvlar />} />
                            <Route path="/XalqaroTashuvlar" element={<International />} />
                            <Route path="/PulTushumlari" element={<PulTushumlari />} />
                            <Route path="/Daromadlar" element={<Daromadlar />} />
                            <Route path="/TelegrammalarChegirmalar" element={<TelegrammalarChegirmalar />} />
                            <Route path="/KonvensionTaqiqlar" element={<KonvensionTaqiqlar />} />
                            <Route path="/Aktlar" element={<Aktlar />} />
                            <Route path="/Vagon" element={<Vagon />} />
                            <Route path="/Sug'urtaDaromadlari" element={<Polis />} />
                            <Route path="/Ekspeditorlar" element={<Ekspeditorlar />} />
                            <Route path="/ShahobchaYo'llari" element={<ShahobchaYollari />} />
                            <Route path="/MesplanKelishuvlar" element={<MesplanKelishuvlar />} />
                            <Route path="/Poyezdlar" element={<Poyezdlar />} />
                        </Routes>
                    </div>
                </div>
            </SidebarProvider>


        </>
    )
}
export default App 
