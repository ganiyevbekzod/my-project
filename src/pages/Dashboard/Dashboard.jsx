import Image from "../../assets/img/HeaderIcons/image.png"
import { ApexChart } from "../../components/Diagram/Diagram"
import users from "../../assets/img/HeaderIcons/users.svg"
import "../Dashboard/Dashboard.css"
import { Link } from "react-router-dom"
import PieAnimation from "../../components/Charts/Barcharts"
import BarAnimation from "../../components/Charts/Localcharts"
import International from "../XalqaroTashuvlar/XalqaroTashuvlar"
import ChartsOverviewDemo, { Overview } from "../../components/Charts/Overview"
import FunnelGap from "../../components/Charts/Funel"
import { MoneyCharts } from "../../components/Charts/MoneyCharts"
export const Dashboard = () => (
  <>
    <div className="d12 two-column-grid">
      <div className='Dashboard_box '>
        <h3 className='users_title'>Mijozlar</h3>
        <div className='dashboard_users'>
          <div className='users_box'>
            <div className='users_minibox'>
              <div className='users_main'>
                <h6 className="user_main_title">Yuridik shaxslar</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='users_text'>10,899</p>
              <span className='users_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
            <div className='users_minibox'>
              <div className='users_main'>
                <h6 className="user_main_title">Jismoniy shaxslar</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='users_text'>5,657</p>
              <span className='users_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
          </div>
          <div className='users_diagramma'>
            <PieAnimation />
          </div>
        </div>
        <Link className="Users_to" to="/Mijozlar">Batafsil</Link>
      </div>
      <div className='Dashboard_box'>
        <h3 className='appeal_title'>Arizalar</h3>
        <div className='dashboard_appeal'>
          <div className='appeal_box'>
            <div className='appeal_minibox'>
              <div className='appeal_main'>
                <h6 className="appeal_main_title">Bo'sh vagonlar</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='appeal_text'>899</p>
              <span className='appeal_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
            <div className='appeal_minibox'>
              <div className='appeal_main'>
                <h6 className="appeal_main_title">Yukli vagonlar</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='appeal_text'>657</p>
              <span className='appeal_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
          </div>
          <div className="appeal_box2">
            <div className='appeal_minibox'>
              <div className='appeal_main'>
                <h6 className="appeal_main_title">Konteynerlar</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='appeal_text'>843</p>
              <span className='appeal_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
            <div className='appeal_minibox'>
              <div className='appeal_main'>
                <h6 className="appeal_main_title">Qayta manzillashtirish</h6>
                <img src={Image} alt="" width={50} height={50} />
              </div>
              <p className='appeal_text'>944</p>
              <span className='appeal_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
            </div>
          </div>
          <Link className="Users_to" to="/Arizalar">Batafsil</Link>
        </div>
      </div>
    </div>
    <div className="Dashboard_box">
      <h3 className='local_title'>Mahalliy tashuvlar</h3>
      <div className="local">
        <BarAnimation />
        <Link className="Users_to" to="/MahalliyTashuvlar">Batafsil</Link>
      </div>
    </div>
    <div className="Dashboard_box">
      <h3 className='internetional_title'>Xalqaro tashuvlar</h3>
      <div className="International">
        <International />
      </div>
      <Link className="Users_to" to="/XalqaroTashuvlar">Batafsil</Link>
    </div>

      <div className="d12 two-column-grid">
        <div className="Dashboard_box">
      <h3 className="money_title">Pul tushumlari</h3>
      <ChartsOverviewDemo/>
      <Link className="Users_to" to="/PulTushumlari">Batafsil</Link>
    </div>
    <div className="Dashboard_box">
      <h3 className="restrictions_title">Konvension cheklovlar</h3>
      <Overview />
      <Link className="Users_to" to="/KonvensionTaqiqlar">Batafsil</Link>
    </div>
      </div>
    <div className="Dashboard_box">
      <h3 className="money_title">Daromadlar</h3>
      <MoneyCharts/>
      <Link className="Users_to" to="/Daromadlar">Batafsil</Link>
    </div>
  </>
)
export default Dashboard
