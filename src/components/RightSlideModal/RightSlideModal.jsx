import { useState } from 'react';
import { useSidebar } from '../../Context/SidebarContext';
import { useHeader } from '../../Context/HeaderContext';
import './RightSlideModal.css';
import "../SideBar/Sidebar"
import Setting_icon from "../../assets/img/HeaderIcons/setting_link.svg"
const RightSlideModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const { toggleSidebar, setSidebarColor} = useSidebar()
    const { changeHeaderColors } = useHeader();
    return (
        <div className="rs-modal-container">
            <button className="modal_button" onClick={toggleModal}>
                <img src={Setting_icon} alt="Settings icon" width={24} height={24} />
            </button>
            {isOpen && (
                <>
                    <div className="rs-modal-overlay" onClick={toggleModal} />
                    <div className="rs-modal-content">
                        <div className='modal_header'>
                            <button className="rs-modal-close" onClick={toggleModal}>
                                &times;
                            </button>
                            <strong className='modal_title'>Settings</strong>
                        </div>
                        <hr />
                        <div className="rs-modal-body">
                            <div class="layout">
                                <h6 class="layout_title" >
                                    Layouts
                                </h6>
                                <button onClick={toggleSidebar}
                                    className='layout_button '>
                                    Swap sidebar
                                </button>
                            </div>
                            <hr />
                            <div class="layout_theme">
                                <h6 class="layout_theme_title" >
                                    Layouts Mode    
                                </h6>
                                <div className='layout_theme_box'>
                                    <button 
                                        className='layout_theme_button'>
                                        Light
                                    </button>
                                    <button 
                                        className='layout_theme_button'>
                                        Dark
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div class="topbar_theme">
                                <h6 class="topbar_theme_title" >
                                    Topbar theme
                                </h6>
                                <div className='topbar_theme_box'>
                                    <button onClick={() => changeHeaderColors('#fff', '#2A3042')} 
                                        className='topbar_theme_button '>
                                        Light
                                    </button>
                                    <button onClick={() => changeHeaderColors('#2A3042', '#fff')}
                                        className='topbar_theme_button '>
                                        Dark
                                    </button>
                                </div>
                            </div>
                            <hr />
                            
                            <div class="sidebar_theme">
                                <h6 className='sidebar_theme_title' >
                                    Left Sidebar Color Options
                                </h6>
                                <ul className='sidebar_theme_list '>
                                    <li className='sidebar_theme_item'>
                                        <label style={{
                                            backgroundColor: '#2A3042',
                                            color: '#fff'
                                        }} onClick={() => setSidebarColor({
                                            backgroundColor: '#2A3042',
                                            text: '#5F6576'
                                        })} className='sidebar_theme_label   '>
                                        </label>
                                    </li>
                                    <li className='sidebar_theme_item'>
                                        <label style={{
                                            backgroundColor: '#0B1D51',
                                            color: '#fff'
                                        }} onClick={() => setSidebarColor({
                                            backgroundColor: '#0B1D51',
                                            text: '#5F6576'
                                        })} className='sidebar_theme_label  '>

                                        </label>
                                    </li>
                                    <li className='sidebar_theme_item'>
                                        <label style={{
                                            backgroundColor: '#330867',
                                            color: 'white'
                                        }} onClick={() => setSidebarColor({
                                            backgroundColor: '#330867',
                                            text: '#5F6576'
                                        })} className='sidebar_theme_label '>

                                        </label>
                                    </li>
                                    <li className='sidebar_theme_item'>
                                        <label style={{
                                            backgroundColor: '#EFE4D2',
                                            color: '#202124'
                                        }} onClick={() => setSidebarColor({
                                            backgroundColor: '#EFE4D2',
                                            text: '#5F6576'
                                        })} className='sidebar_theme_label  '>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <hr />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RightSlideModal;