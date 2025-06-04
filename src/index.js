import ReactDOM from 'react-dom/client'
import App from "./App"
// import "./assets/fonts/Geist-Black.ttf"
// import "./assets/fonts/Geist-Bold.ttf"
// import "./assets/fonts/Geist-ExtraBold.ttf"
// import "./assets/fonts/Geist-ExtraLight.ttf"
// import "./assets/fonts/Geist-Light.ttf"
// import "./assets/fonts/Geist-Medium.ttf"
// import "./assets/fonts/Geist-Regular.ttf"

import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
