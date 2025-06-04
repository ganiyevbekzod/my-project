import "./SideBar.css"
import Sidebaricon from "../../assets/img/SidebarIcons/Sidebar_icon.svg"
import AnalityIcon from "../../assets/img/SidebarIcons/analityicon.svg"
import InvoiceIcon from "../../assets/img/SidebarIcons/invoisicon.svg"
import Statistic from "../../assets/img/SidebarIcons/statisticicon.svg"
import DataIcon from "../../assets/img/SidebarIcons/dataicon.svg"
import CalendarIcon from "../../assets/img/SidebarIcons/calendaricon.svg"
import LocationIcon from "../../assets/img/SidebarIcons/location.svg"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div className="sidebar ">
                <nav className="navbar" >
                     <ul className="navbar_list">
                        <li className="navbar_item">
                            <Link className="navbar_link d-flex align-items-center" to="/">
                            <img className="me-2" src={Sidebaricon} alt="" width={24} height={24} />
                                Dashboard</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link d-flex align-items-center" to="/Analytics">
                            <img className="me-2" src={AnalityIcon} alt="" width={24} height={24} />
                            Analytics</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link d-flex align-items-center" to="/Invoice">
                               <img className="me-2" src={InvoiceIcon} alt="" width={24} height={24} />Invoice</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link d-flex align-items-center" to="/Statistics">
                            <img className="me-2" src={Statistic} alt="" width={24} height={24} />Statistics</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link d-flex align-items-center" to="/Data">
                            <img className="me-2" src={DataIcon} alt="" width={24} height={24} />Data</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link" to="/Calendar">
                             <img className="me-2" src={CalendarIcon} alt="" width={24} height={24} />
                            Calendar</Link>
                        </li>
                        <li className="navbar_item">
                            <Link className="navbar_link" to="/Map">
                             <img className="me-2" src={LocationIcon} alt="" width={24} height={24} />
                            Map</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
export default Sidebar