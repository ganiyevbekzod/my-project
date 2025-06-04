import { useState } from 'react';
import { useSidebar } from '../../Context/SidebarContext';
import './RightSlideModal.css';
import "../SideBar/Sidebar"
import Setting_icon from "../../assets/img/HeaderIcons/setting.svg"
const RightSlideModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    const { toggleSidebar } = useSidebar()
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
                            <div class="accordion" id="accordionPanelsStayOpenExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            Theme Layout
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <button onClick={toggleSidebar} className='btn btn-primary mt-2'>click</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Theme Mode
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            Color Sidebar
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            Font Family
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default RightSlideModal;