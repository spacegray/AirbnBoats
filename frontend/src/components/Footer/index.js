import React from "react";
import "./Footer.css";

function Footer () {
    return (
      <>
        <div className="footer">
          <div className="footer-content">
            <div className="footer__iconSection">
                <a
                className="footer__icons"
                href="https://www.linkedin.com/in/aylabasha/"
                >
                <i className="fab fa-linkedin"></i>
                </a>
                <a className="footer__icons" href="https://github.com/spacegray">
                <i className="fab fa-github-square"></i>
                </a>
            </div>
            <div className="footer__name"> Developed by Ayla Basha</div>
            <div className="footer__name"> © 2021</div>
          </div>
        </div>
      </>
    );
}
export default Footer;