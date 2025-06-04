import "./Header.css"
import FullscreenButton from "../HeaderNavbar/FullScreen";
import FlagSelect from "../HeaderNavbar/FlagSelect";
import header_uty from "../../assets/img/HeaderIcons/image.png"
import View_comfy from "../../assets/img/HeaderIcons/view_comfy.svg"
import Message from "../HeaderNavbar/Message";
import RightSlideModal from "../RightSlideModal/RightSlideModal";
const Header = () => {
    return (
        <>
            <header className="site-header"  >
                {/* style={{ width: isSidebarOpen ? '1600px' : '1800px' }} */}
                <nav className="header_navbar">
                    <img className="Uty_logo" src={header_uty} alt="UTY_logopicture" width={60} height={60} />
                    <ul className="header_navbar_list">
                        <li className="header_navbar_item ">
                                <div className="header_navbar_search d-flex align-items-center">
                                    <span className="header_span">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-search absolute left-3 h-4 w-4 text-gray-400">
                                        <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </span>
                                <input className="header_input" type="text" placeholder="Qidiruv"/>
                                </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown_button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mega Menu
                                </button>
                                <div class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
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
                                        <ul>
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
                                        <ul>
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
                                <button class="important_button btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <button class="btn admin_button" role="button" data-bs-toggle="dropdown" ><span className="admin_name_span">Admin</span>
                                </button>
                                <ul class="dropdown-menu dropdownadmin_list ">
                                    <li>
                                        <img src="" alt="" />
                                        <button>
                                            <img src="" alt="" />
                                        </button>
                                    </li>
                                    <li><span>
                                    </span>
                                        <a class="dropdown-item" href="#">Edit Profile</a></li>
                                    <li><span>
                                    </span>
                                        <a class="dropdown-item" href="#">View profile</a></li>
                                    <li><span>
                                    </span>
                                        <a class="dropdown-item" href="#">Setting</a></li>
                                </ul>
                            </div>
                        </div>
                        <RightSlideModal/>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header