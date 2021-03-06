import { Link } from 'react-router-dom';
import './SplashPage.css';
// const splashImage = require('../../images/splash-bkgrnd.jpg')
// import Footer from '../Footer/index'
import ocean from './images/ocean.png'

function SplashPage() {

    return (
      <>
        <div className="splash__container">
          {/* <div
            className="splash__image"
            styles={{ backgroundImage: `url(${ocean})` }}
            >
          </div> */}

          <img
            className="splash__image"
            src="https://res.cloudinary.com/dexkxkrfp/image/upload/v1643094914/airbnboats/UNUSUAL-The-Colour-Of-The-Ocean-Will-Change-In-Eighty-Years-Due-To-Climate-Change_pl1fg7.jpg"
          style={{width: '100vw', height: ''}}></img>
          <div className="site__quote"> Your adventure awaits</div>
        </div>
          
      </>
    );
}

export default SplashPage;