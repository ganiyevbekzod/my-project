import "./assets/styles/index.css"
import "./i18n/i18n.js"
import { SidebarProvider } from "./Context/SidebarContext.js"
import Sidebar from "./components/SideBar/Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Header from "./components/Header/Header"
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Dashboard from "./pages/Dashboard/Dashboard"
import Arizalar from "./pages/Arizalar/Arizalar"
import MahalliyTashuvlar from "./pages/MahalliyTashuvlar/MahalliyTashuvlar"
import { PulTushumlari } from "./pages/PulTushulari/PulTushumlari"
import DaromadlarDashboard from "./pages/Daromadlar/Daromadlar"
import RevenueDashboard from "./pages/Daromadlar/Daromadlar.jsx"
import { TelegrammalarChegirmalar } from "./pages/TelegrammalarChegirmalar/TelegrammalarChegirmalar"
import  Aktlar  from "./pages/Aktlar/Aktlar"
import Vagon  from "./pages/Vagon/Vagon"
import { useTheme } from "./Context/ThemeContext"
import { useRtl } from "./Context/RtlContext"
import { useCompact } from "./Context/CompactContext"
import { useLayout } from "./Context/LayoutContext"
import { useColorScheme } from "./Context/ColorContext"
import { usePreset } from "./Context/PresetContext"
import { useFont } from "./Context/FontContext"
import { KonvensionTaqiqlar } from "./pages/KonvensionTaqiqlar/KonvensionTaqiqlar"
import { Polis } from "./pages/Sugurta/Sugurta"
import { Ekspeditorlar } from "./pages/Ekspeditorlar/Ekspeditorlar"
import { ShahobchaYollari } from "./pages/ShahobchaYollari/ShahobchaYollari"
import { Poyezdlar } from "./pages/Poyezdlar/Poyezdlar"
import International from "./pages/XalqaroTashuvlar/XalqaroTashuvlar.jsx"
import { HeaderProvider } from "./Context/HeaderContext.js"
import { useContrast } from "./Context/ContrastContext"
import CustomerDashboard from "./pages/Mijozlar/Customer.jsx"

// Component to handle scroll to top on route change
const ScrollToTop = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        // Force scroll to top with multiple approaches
        const forceScrollToTop = () => {
            // Reset scroll position for all possible scrollable elements
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
            
            // Force scroll with instant behavior
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
            
            // Additional force scroll for main content area
            const mainContent = document.querySelector('.item3');
            if (mainContent) {
                mainContent.scrollTop = 0;
            }
        };
        
        // Execute immediately
        forceScrollToTop();
        
        // Execute after a short delay to ensure DOM is ready
        const timer1 = setTimeout(forceScrollToTop, 0);
        const timer2 = setTimeout(forceScrollToTop, 50);
        const timer3 = setTimeout(forceScrollToTop, 100);
        
        // Cleanup timers
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
        
    }, [pathname]);
    
    return null;
};

const App = () => {
    const { theme } = useTheme();
    const { contrastMode } = useContrast();
    const { isRtl } = useRtl();
    const { isCompact } = useCompact();
    const { layout } = useLayout();
    const { colorScheme } = useColorScheme();
    const { preset } = usePreset();
    const { fontFamily, fontSize } = useFont();
    const { isOpen } = require("./Context/SidebarContext").useSidebar();

    const classes = [
        theme === "dark" ? "dark-mode" : "",
        contrastMode ? "contrast-mode" : "",
        isRtl ? "rtl" : "",
        isCompact ? "compact" : "",
        `layout-${layout}`,
        `color-${colorScheme}`,
        `preset-${preset}`,
        `font-${fontFamily.replace(/\s/g, "")}`,
        `font-size-${fontSize}`
    ].join(" ");
    return (
        <div className={classes} style={{ fontFamily, fontSize }}>
            <ScrollToTop />
            <div
                className={`grid-container ${layout === 'sidebar' ? 'grid-sidebar' : layout === 'topbar' ? 'grid-topbar' : ''}`}
                style={
                    layout === "sidebar"
                        ? { gridTemplateColumns: `${isOpen ? 260 : 100}px 1fr` }
                        : undefined
                }
            >
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
                        <Route path="/Mijozlar" element={<CustomerDashboard/>} />
                        <Route path="/Arizalar" element={<Arizalar />} />
                        <Route path="/MahalliyTashuvlar" element={<MahalliyTashuvlar />} />
                        <Route path="/XalqaroTashuvlar" element={<International />} />
                        <Route path="/PulTushumlari" element={<PulTushumlari />} />
                        <Route path="/Daromadlar" element={<RevenueDashboard/>} />
                        <Route path="/TelegrammaChegirmalar" element={<TelegrammalarChegirmalar />} />
                        <Route path="/KonvensionTaqiqlar" element={<KonvensionTaqiqlar />} />
                        <Route path="/Aktlar" element={<Aktlar />} />
                        <Route path="/Vagon" element={<Vagon />} />
                        <Route path="/Sug'urtaDaromadlari" element={<Polis />} />
                        <Route path="/Ekspeditorlar" element={<Ekspeditorlar />} />
                        <Route path="/ShahobchaYo'llari" element={<ShahobchaYollari />} />
                        <Route path="/Poyezdlar" element={<Poyezdlar />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default App 
