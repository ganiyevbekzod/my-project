import "./Mijozlar.css"
import "../Dashboard/Dashboard.css"
import Image from "../../assets/img/HeaderIcons/image.png"
import users from "../../assets/img/HeaderIcons/users.svg"
import React from 'react'
import Mijozlarcharts from "./Mijozlarcharts"
import Mijozlarcharts2 from "./Mijozlarcharts2"
import SimpleLineChart from "../../components/Charts/SimpleLineChart"

const Mijozlar = () => {
  return (
    <>
      <div className="user carousel-container " >
        <h3 className='user_title'>Mijozlar</h3>
        <div className="one-column-grid carousel-track ">
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Umumiy mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">17,582</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yuridik shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">10,899</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Jismoniy shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">5,657</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yakka tartibdagi tadbirkor mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">1,026</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Umumiy Mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">17,582</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yuridik shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">10,899</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Jismoniy shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">5,657</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yakka tartibdagi tadbirkor mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">1,026</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Umumiy mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">17,582</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yuridik shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">10,899</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Jismoniy shaxslar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">5,657</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
          <div className="user_box stat-box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yakka tartibdagi tadbirkor mijozlar soni</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">1,026</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt="" width={16} height={16} />O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
        </div>
          <h3 className="user_sity_title">Viloyatlar kesimida mijozlar soni</h3>
        <div className="user_sity_box ">
          <div className="pt-3 ">
            <Mijozlarcharts />
          </div>
        </div>
        <div className="tue-column-grid">
          <div className="user_sity2_box">
            <Mijozlarcharts2 />
          </div>
          <div className="user_sity3_box">
            <SimpleLineChart />
          </div>
        </div>
      </div>
    </>
  )
}
export default Mijozlar

// <ApexChart />