import "./Mijozlar.css"
import "../Dashboard/Dashboard.css"
import Image from "../../assets/img/HeaderIcons/image.png"
import { ApexChart } from "../../components/Diagram/Diagram"
import users from "../../assets/img/HeaderIcons/users.svg"
import React from 'react'

const Mijozlar = () => {
  return (
    <>
    <div className="d12 one-column-grid">
        <div div className='Dashboard_box'>
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
                  <h6 className="user_main_title">Yuridik shaxslar</h6>
                  <img src={Image} alt="" width={50} height={50} />
                </div>
                <p className='users_text'>10,899</p>
                <span className='users_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
              </div>
            </div>
            <div className='users_diagramma'>
              <ApexChart />
            </div>
          </div>
          <div></div>
        </div>
        <div div className='Dashboard_box'>
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
                  <h6 className="user_main_title">Yuridik shaxslar</h6>
                  <img src={Image} alt="" width={50} height={50} />
                </div>
                <p className='users_text'>10,899</p>
                <span className='users_span'><img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha</span>
              </div>
            </div>
            <div className='users_diagramma'>
              <ApexChart />
            </div>
          </div>
          <div></div>
        </div>
      </div></>
  )
}
export default Mijozlar

