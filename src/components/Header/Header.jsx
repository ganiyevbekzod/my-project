import "./Header.css"
import header_uty from "../../assets/img/HeaderIcons/image.png"
const Header = () => {
    return (
        <>
            <header className="site-header">
                <nav className="header_navbar">
                    <ul className="header_navbar_list">
                        <li className="header_navbar_item">
                            <div class="header_navigation relative hidden md:flex items-center">
                                <span className="header_span">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        class="lucide lucide-search absolute left-3 h-4 w-4 text-gray-400">
                                        <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </span>
                                <input className="header_input" type="text" placeholder="Qidiruv" width={50} />
                            </div>
                        </li>
                        <li>
                            <div class="dropdown">
                                <button class="dropdown_button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mega Menu
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
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
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_1</a>
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_2</a>
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_3</a>
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_4</a>
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_5</a>
                                            <a href="" className="dropdown_link dropdown-item">Hujjat_6</a>
                                        </li>
                                    </ul>
                                    <img src={header_uty} alt="UTY_logopicture" width={500} height={500} />
                                   </div>
                                </div>
                            </div></li>
                    </ul>
                    <ul className="header_navbar_list_right">
                        <li className="header_navbar_item_right">

                        </li>
                        <li className="header_navbar_item_right">

                        </li>
                        <li className="header_navbar_item_right">

                        </li>
                        <li className="header_navbar_item_right">

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
export default Header