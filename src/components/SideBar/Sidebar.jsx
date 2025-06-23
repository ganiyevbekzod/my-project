import "./SideBar.css"
import MenuButton from "../../assets/img/SidebarIcons/menu.svg"
import Dashboard_logo from "../../assets/img/SidebarIcons/dashboard1.png"
import UTY_logo from "../../assets/img/HeaderIcons/image.png"
import Avatar from "../../assets/img/SidebarIcons/Avatar.svg"
import Cash_logo from "../../assets/img/SidebarIcons/cash.svg"
import Request_icon from "../../assets/img/SidebarIcons/document.svg"
import Income_logo from "../../assets/img/SidebarIcons/income.svg"
import discounts from "../../assets/img/SidebarIcons/sale.svg"
import Coach1 from "../../assets/img/SidebarIcons/coach1.svg"

import { Link, useLocation } from "react-router-dom"
import { useSidebar } from "../../Context/SidebarContext"
import { useLayout } from "../../Context/LayoutContext"
import { useRef, useEffect } from "react"

const Sidebar = () => {
    const { isOpen } = useSidebar()
    const { toggleSidebar, sidebarColor } = useSidebar();
    const location = useLocation();
    const { layout } = useLayout();
    ///////////////////
    const sidebarStyle = {
        backgroundColor: sidebarColor.backgroundColor,
        color: sidebarColor.text
    }
    const linkStyle = {
    color: sidebarColor.text,
  };
  ////////////////////////
    const menuItems = [
      { to: "/", icon: Dashboard_logo, label: "Dashboard" },
      { to: "/Mijozlar", icon: Avatar, label: "Mijozlar" },
      { to: "/Arizalar", icon: Request_icon, label: "Arizalar" },
      { to: "/MahalliyTashuvlar", icon: Coach1, label: "Mahalliy tashuvlar" },
      { to: "/XalqaroTashuvlar", icon: Coach1, label: "Xalqaro tashuvlar" },
      { to: "/PulTushumlari", icon: Cash_logo, label: "Pul tushumlari" },
      { to: "/Daromadlar", icon: Income_logo, label: "Daromadlar" },
      { to: "/TelegrammaChegirmalar", icon:discounts , label: "Telegrammalar va chegirmalar" },
      { to: "/KonvensionTaqiqlar", icon: null, label: "Konvensiyon taqiqlar", emoji: "🌍" },
      { to: "/Aktlar", icon: null, label: "Aktlar", emoji: "🛒" },
      { to: "/Vagon", icon: null, label: "Vagon", emoji: "🚂" },
      { to: "/Sug'urtaDaromadlari", icon: null, label: "Sug'urta", emoji: "🛡️" },
      { to: "/Ekspeditorlar", icon: null, label: "Ekspeditorlar", emoji: "🚚" },
      { to: "/ShahobchaYo'llari", icon: null, label: "Shahobcha Yo'llari", emoji: "🛤️" },
      { to: "/MesplanKelishuvlar", icon: null, label: "Mesplan Kelishuvlar", emoji: "📝" },
      { to: "/Poyezdlar", icon: null, label: "Poyezdlar", emoji: "🚆" },
    ];

    // --- Carousel logic for horizontal sidebar ---
    const carouselRef = useRef(null);
    const scrollInterval = useRef(null);
    const isHovered = useRef(false);

    useEffect(() => {
        if (layout !== "topbar") return;
        const carousel = carouselRef.current;
        if (!carousel) return;
        function startScroll() {
            if (scrollInterval.current) return;
            scrollInterval.current = setInterval(() => {
                if (!isHovered.current) {
                    carousel.scrollLeft -= 1;
                    // Reset to end for infinite effect
                    if (carousel.scrollLeft <= 0) {
                        carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
                    }
                }
            }, 16); // ~60fps
        }
        function stopScroll() {
            if (scrollInterval.current) {
                clearInterval(scrollInterval.current);
                scrollInterval.current = null;
            }
        }
        startScroll();
        return () => stopScroll();
    }, [layout]);

    // Pause on hover
    function handleMouseEnter() { isHovered.current = true; }
    function handleMouseLeave() { isHovered.current = false; }
    // --- End carousel logic ---

    return (
        <div
            className={
                layout === "topbar"
                    ? "sidebar sidebar-horizontal"
                    : `sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`
            }
            style={layout === "topbar" ? { ...sidebarStyle, } : sidebarStyle}
        >
            {layout !== "topbar" && (
                <button onClick={toggleSidebar} className="toggle-button" width={25} height={25}>
                    <span><img src={MenuButton} alt="menu_toggle_btn" /></span>
                </button>
            )}
            <div className="sidebar-content" style={layout === "topbar" ? { padding: 0, overflow: "hidden" } : {}}>
                {layout !== "topbar" && (
                    <div className="sidebar_logocontent">
                        <img src={UTY_logo} alt="" width={50} height={50} />
                        <h2 style={linkStyle} className={!isOpen ? "hidden" : ""}>UTY</h2>
                    </div>
                )}
                <ul
                    className={layout === "topbar" ? "sidebar-list-horizontal horizontal-menu" : ""}
                    ref={layout === "topbar" ? carouselRef : undefined}
                    onMouseEnter={layout === "topbar" ? handleMouseEnter : undefined}
                    onMouseLeave={layout === "topbar" ? handleMouseLeave : undefined}
                >
                    {menuItems.map((item, idx) => (
                        <li
                            key={item.to + "-" + idx}
                            className={`sidebar_item${location.pathname === item.to ? " sidebar_item-active" : ""}${idx % menuItems.length === 1 ? " sidebar_item2" : ""}${idx % menuItems.length === 2 ? " sidebar_item3" : ""}`}
                        >
                            <Link className="SidebarLogo_link horizontal-icon" to={item.to} style={{ background: "none", boxShadow: "none", marginRight: layout === "topbar" ? 0 : 8 }}>
                                {item.icon ? (
                                    <img src={item.icon} alt={item.label} width={25} height={25} />
                                ) : (
                                    <span  style={{ fontSize: 22 }}>{item.emoji}</span>
                                )}
                            </Link>
                            <Link to={item.to} className={layout === "topbar" ? "horizontal-label" : (!isOpen ? "hidden" : "") }>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Sidebar
