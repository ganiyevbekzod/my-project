import "./SideBar.css"
import MenuButton from "../../assets/img/SidebarIcons/menu.svg"
import Dashboard_logo from "../../assets/img/SidebarIcons/Dashboard_logo.png"
import UTY_logo from "../../assets/img/HeaderIcons/image.png"
// import AnalityIcon from "../../assets/img/SidebarIcons/analityicon.svg"
// import InvoiceIcon from "../../assets/img/SidebarIcons/invoisicon.svg"
// import Statistic from "../../assets/img/SidebarIcons/statisticicon.svg"
// import DataIcon from "../../assets/img/SidebarIcons/dataicon.svg"
// import CalendarIcon from "../../assets/img/SidebarIcons/calendaricon.svg"
// import LocationIcon from "../../assets/img/SidebarIcons/location.svg"
import { Link } from "react-router-dom"
import { useSidebar } from "../../Context/SidebarContext"

const Sidebar = () => {
    const {isOpen}=useSidebar()
    const { toggleSidebar } = useSidebar();
    return (
        <div className="sidebar">
            <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
                <button onClick={toggleSidebar} className="toggle-button" width={25} height={25}>
                    <span><img src={MenuButton} alt="menu_toggle_btn" /></span>
                </button>
                <div className="sidebar-content">
                    <div>
                        <div className="sidebar_logocontent">
                            <img src={UTY_logo} alt="" width={50} height={50} />
                        <h2 className={!isOpen ? "hidden" : ""}>UTY</h2>
                        </div>
                        <ul>
                            <li className="sidebar_item">
                                    <Link className="SidebarLogo_link" to="/">
                                    <img src={Dashboard_logo} alt="Dashboard_logo" width={25} height={25} />
                                    </Link>
                                <div className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/">
                                        Dashboard</Link>
                                </div>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Mijozlar">📊</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/Mijozlar">
                                        Mijozlar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Arizalar">🛒</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/Arizalar">Arizalar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/MahalliyTashuvlar">🌍</Link>
                                <span className={!isOpen ? "hidden" : ""}><Link className="navbar_link" to="/MahalliyTashuvlar">Maxalliy tashuvlar</Link></span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/XalqaroTashuvlar">🎨</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/XalqaroTashuvlar">Xalqaro tashuvlar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/PulTushumlari">
                                    <img src={Dashboard_logo} alt="Dashboard_logo" width={25} height={25} /></Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/PulTushumlari">
                                        Pul tushumlari</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Daromadlar">📊</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/Daromadlar">
                                        Daromadlar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/TelegrammaChegirmalar">🛒</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/TelegrammaChegirmalar">Telegrammalar va chegirmalar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/KonvensionTaqiqlar">🌍</Link>
                                <span className={!isOpen ? "hidden" : ""}><Link className="navbar_link" to="/KonvensionTaqiqlar">Konvensiyon taqiqlar</Link></span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Aktlar">🎨</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/Aktlar">Aktlar</Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div style={{ marginTop: "16px" }}>
                        <h2 className={!isOpen ? "hidden" : ""}>EXTRA</h2>
                        <ul>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/VagonlarTuribQolishiJarimalar">📄</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/VagonlarTuribQolishiJarimalar">Vagonlarning turib qolishi va jarimalar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Sug'urtaDaromadlari">📅</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link" to="/Sug'urtaDaromadlari">Sug'urta daromadlari</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Examples">❤️</Link>
                                <span className={!isOpen ? "hidden" : ""}><Link className="navbar_link" to="/Examples">Examples</Link></span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Ekspeditorlar">📄</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link d-flex align-items-center" to="/Ekspeditorlar">Ekspeditorlar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/ShahobchaYo'llari">📅</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link" to="/ShahobchaYo'llari">Shahobcha yo'llari</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/MesplanKelishuvlar">❤️</Link>
                                <span className={!isOpen ? "hidden" : ""}>
                                    <Link className="navbar_link" to="/MesplanKelishuvlar">Mesplan bilan kelishuvlar</Link>
                                </span>
                            </li>
                            <li className="sidebar_item">
                                <Link className="SidebarLogo_link" to="/Poyezdlar">❤️</Link>
                                <span className={!isOpen ? "hidden" : ""}><Link className="navbar_link" to="/Poyezdlar">Poyezdlar</Link></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar
