import "./Mijozlar.css"
import "../Dashboard/Dashboard.css"
import Image from "../../assets/img/HeaderIcons/image.png"
import { ApexChart } from "../../components/Diagram/Diagram"
import users from "../../assets/img/HeaderIcons/users.svg"
import React from 'react'
import Mijozlarcharts from "./Mijozlarcharts"

const Mijozlar = () => {
  return (
    <>
      <div className="user" >
        <h3 className='user_title'>Mijozlar</h3>
        <div className="one-column-grid">
          <div className="user_box">
            <div className="user_box_top">
              <h6 className="user_box_title">Umumiy Mijozlar</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">17,582</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt=""width={16} height={16}/>O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
                    <div className="user_box">
            <div className="user_box_top">
              <h6 className="user_box_title">Yuridik shaxslar</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">10,899</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt=""width={16} height={16}/>O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
                    <div className="user_box">
            <div className="user_box_top">
              <h6 className="user_box_title">Jismoniy shaxslar</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">5,657</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt=""width={16} height={16}/>O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
                    <div className="user_box">
            <div className="user_box_top">
              <h6 className="user_box_title">Eng yangi mijozlar</h6>
              <img src={Image} alt="user_box_img" width={50} height={50} />
            </div>
            <p className="user_box_text">1,026</p>
            <span className='user_box_span'>
              <img className="me-2" src={users} alt=""width={16} height={16}/>O'zbekiston Temir yo'llari bo'yicha
            </span>
          </div>
        </div>
        <div className="user_sity_box mt-3">
          <h3 className="user_title">Viloyatlar kesimida mijozlar</h3>
        <div className="pt-3 ">
          <Mijozlarcharts/>
        </div>
        <div className="tue-column-grid">

        </div>
        </div>
      </div>
    </>
  )
}
export default Mijozlar

            // <ApexChart />