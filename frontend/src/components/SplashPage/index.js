import { Link } from 'react-router-dom';
import './SplashPage.css';
const splashImage = require('../../images/splash-bkgrnd.jpg')

function SplashPage() {

    return (
      <>
        <div className="splash__container">
            <img
                className="splash"
                src="https://cdn.pixabay.com/photo/2020/07/29/08/41/sailing-boat-5447438_1280.jpg"
            ></img>
            <div className="site__quote"> Your adventure awaits</div>
            </div>
      </>
    );
}

export default SplashPage;