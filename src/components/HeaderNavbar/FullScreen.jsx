import FullScreen from "../../assets/img/HeaderIcons/fullscreen.svg"
function FullscreenButton() {
    const goFullscreen = () => {
        const el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    };

    return (

        <button onClick={goFullscreen} className="btn fullscreenbtn ">
            <img className="fullscreenicon" src={FullScreen} alt="FullScreen_icon" width={25} height={25} />
        </button>
    );
}

export default FullscreenButton;
