import Germany from "./germny.svg"
import "./Main.css"
const Main = () => {
    return (
            <div className="main">
                <div className="card">
                    <img className="main_img" src={Germany} alt="germany_flag" width="300" height="180"/>
                    <h5 className="card_title">Germany</h5>
                    <div className="card_texts">
                        <p className="card_text">Population: <m>81,770,900</m></p>
                        <p className="card_text">Region: Europe</p>
                        <p className="card_text">Capital: Berlin</p>
                    </div>
                </div>
            </div>
    )
}
export default Main