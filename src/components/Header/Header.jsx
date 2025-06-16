import "./Header.css"
import FullscreenButton from "../HeaderNavbar/FullScreen";
import FlagSelect from "../HeaderNavbar/FlagSelect";
import header_uty from "../../assets/img/HeaderIcons/image.png"
import View_comfy from "../../assets/img/HeaderIcons/view_comfy.svg"
import Message from "../HeaderNavbar/Message";
import Search_icon from "../../assets/img/HeaderIcons/searchicon.svg"
import AdminIcon from "../../assets/img/HeaderIcons/admin.svg"
import Logout from "../../assets/img/HeaderIcons/logout.svg"
import RightSlideModal from "../RightSlideModal/RightSlideModal";
import { useHeader } from "../../Context/HeaderContext";
const Header = () => {
     const { headerBgColor, headerTextColor } = useHeader();
    return (
        <>
            <header
            className="site-header" >
                <nav style={{ backgroundColor: headerBgColor}} className="header_navbar">
                    <img className="Uty_logo" src={header_uty} alt="UTY_logopicture" width={60} height={60} />
                    <ul className="header_navbar_list">
                        <li className="header_navbar_item ">
                            <div style={{backgroundColor:headerBgColor}}  className="header_navbar_search d-flex align-items-center">
                                <span className="header_span">
                                    <img src={Search_icon} alt="Search_icon" width={25} height={25} />
                                </span>
                                <input  className="header_input" type="text" placeholder="Qidiruv" />
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button  class="dropdown_button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mega Menu
                                </button>
                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton1" >
                                    <div className="dropdown_block">
                                        <ul className="dropdown_list">
                                            <li className="dropdown_item">
                                                <strong class="dropdown-item_strong" href="#">Stansiyalar</strong>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_1</a>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_2</a>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_3</a>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_4</a>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_5</a>
                                                <a href="" className="dropdown_link dropdown-item">Stansiya_6</a>
                                            </li>
                                        </ul>
                                        <ul className="dropdown_list">
                                            <li className="dropdown_item">
                                                <strong class="dropdown-item_strong" href="#">Vagonlar</strong>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_1</a>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_2</a>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_3</a>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_4</a>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_5</a>
                                                <a href="" className="dropdown_link dropdown-item">Vagon_6</a>
                                            </li>
                                        </ul>
                                        <ul className="dropdown_list">
                                            <li className="dropdown_item">
                                                <strong class="dropdown-item_strong" href="#">Hujjatlar</strong>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_1</a>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_2</a>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_3</a>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_4</a>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_5</a>
                                                <a href="#" className="dropdown_link dropdown-item">Hujjat_6</a>
                                            </li>
                                        </ul>
                                        <img src={header_uty} alt="UTY_logopicture" width={200} height={200} />
                                    </div>
                                </div>
                            </div></li>
                    </ul>
                    <div className="header_navbar_right">
                        <FlagSelect />
                        <div class="dropdown_important ">
                            <div class="dropdown">
                                <button  class="important_button btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={View_comfy} alt="Railway_logo" width={24} height={24} />
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <div className="important_block  ">
                                        <ul className="important_list">
                                            <li className="important_item">
                                                <img src={header_uty} alt="UTY_logopicture" width={80} height={80} />
                                            </li>
                                            <li className="important_item">
                                                <a class="dropdown-item_strong" href="#">Xalqaro yuk ortish</a>
                                            </li>
                                        </ul>
                                        <ul className="important_list">
                                            <li className="important_item">
                                                <img src={header_uty} alt="UTY_logopicture" width={80} height={80} />
                                            </li>
                                            <li className="important_item">
                                                <a class="dropdown-item_strong" href="#">Xalqaro yuk bo'shatish</a>
                                            </li>
                                        </ul>
                                        <ul className="important_list">
                                            <li className="important_item">
                                                <img src={header_uty} alt="UTY_logopicture" width={80} height={80} />
                                            </li>
                                            <li className="important_item">
                                                <a class="dropdown-item_strong" href="#">Mahalliy yuk ortish</a>
                                            </li>
                                        </ul>
                                        <ul className="important_list">
                                            <li className="important_item">
                                                <img src={header_uty} alt="UTY_logopicture" width={80} height={80} />
                                            </li>
                                            <li className="important_item"> <a class="dropdown-item_strong" href="#">Mahalliy yuk bo'shatish</a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FullscreenButton />
                        <Message />
                        <div class="dropdown_admin">
                            <div class="dropdown">
                                <button class="btn admin_button" role="button" data-bs-toggle="dropdown" >
                                    <img className="me-1 " src={AdminIcon} alt="admin icon" width={26} height={26} />
                                    <span className="admin_name_span">Admin</span>
                                </button>
                                <ul class="dropdown-menu dropdownadmin_list ">
                                    <li className="admin_item">
                                        <div className="d-flex align-items-center">
                                            <img className="me-1 " src={AdminIcon} alt="admin icon" width={26} height={26} />
                                            <span className="admin_name_span">Admin</span>
                                        </div>
                                        <button className="btn logout_button">
                                            <img src={Logout} alt="log out button" width={25} height={25} />
                                        </button>
                                    </li>
                                    <hr />
                                    <li className="adminItem_link">
                                        <a class="dropdown-item link_edit" href="#">Edit Profile</a></li>
                                    <li className="adminItem_link">
                                        <a class="dropdown-item link_view" href="#">View profile</a></li>
                                    <li className="adminItem_link">
                                        <a class="dropdown-item link_setting" href="#">Setting</a></li>
                                </ul>
                            </div>
                        </div>
                        <RightSlideModal />
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header