import MoonLogo from "../components/moon.png"; 
import "./Header.css"
const Header=()=>{
    return(
        <header className="header">
            <div className="container">
        <div className="header_wrapper">
        <h1 className="header_title">Where in the world ?</h1>
             <div className="darkmode">
                <img className="darkmodeimg" src={MoonLogo} alt="logo" width="30" height="30"/>
                <button className="button" type="button">Dark mode</button>
             </div>
        </div>
            </div>
        </header>
    )
}
export default Header