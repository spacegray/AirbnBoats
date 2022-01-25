import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import bnbLogo from "../../images/AirBnBoats-logo.png";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <nav className="navbar__container" id="navbar">
      <div className="inner__nav">
        <ul>
          <li className="nav__panel">
            <div className="airbnBoats__home">
              <NavLink exact to="/">
                <img className="boatLogo" src={bnbLogo} alt="logo" />
              </NavLink>
            </div>
            <div className="nav-right">
              <NavLink className="listing__link" to="/listings">
                <button> Listings</button>
              </NavLink>
              {isLoaded && sessionLinks}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
