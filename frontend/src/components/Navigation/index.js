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
  // } else {
  //   sessionLinks = (
  //     <>
  //       <LoginFormModal />
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );

    return (
      <>
        <div className="nav-left" style={{ width: "300px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="airbnboat-logo"
              src={bnbLogo}
              alt="abnb-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "100px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            ></img>
          </NavLink>
        </div>

        <nav
          style={{
            display: "flex",
            backgroundColor: "#F0F0F0",
            height: "110px",
            width: "100%",
            top: "0px",
            position: "fixed",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            decoration: "none",
            listStyle: "none",
            fontSize: "20px",
            zIndex: "1",
          }}
        >
          <li>
            <NavLink
              to="/"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              Listings |
            </NavLink>
          </li>
          <li>
            {/* <LogoutButton /> */}
          </li>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <div className="nav-left" style={{ width: "300px" }}>
          <NavLink to="/" exact={true} activeClassName="active">
            <img
              className="airbnboat-logo"
              src={bnbLogo}
              alt="abnb-logo"
              style={{
                position: "fixed",
                top: "0",
                marginLeft: "10px",
                height: "100px",
                maxHeight: "100%",
                maxWidth: "100%",
                zIndex: "2",
              }}
            ></img>
          </NavLink>
        </div>

        <nav
          style={{
            display: "flex",
            backgroundColor: "#F0F0F0",
            height: "110px",
            width: "100%",
            top: "0px",
            position: "fixed",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            decoration: "none",
            listStyle: "none",
            fontSize: "20px",
            zIndex: "1",
          }}
        >
          <li>
            <NavLink
              to="/login"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              Login |
            </NavLink>
          </li>
          <li>
            <LoginFormModal />
            <NavLink to="/signup">Sign Up</NavLink>
            {/* <NavLink
              to="/sign-up"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              Sign Up |
            </NavLink> */}
          </li>
          {/* <li>
            <NavLink
              to="/listings"
              exact={true}
              activeClassName="active"
              style={{
                display: "flex",
                color: "#763B2D",
                decoration: "none",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              Listings |
            </NavLink>
          </li> */}
          <li>
            {/* <NavLink exact to="/">
             <img className="boatLogo" src={bnbLogo} alt="logo" />
           </NavLink> */}

            <NavLink className="listing__link" to="/listings">
              <button> Listings</button>
            </NavLink>
            {isLoaded && sessionLinks}
          </li>
        </nav>
      </>
    );
  }
};

export default Navigation;

// function Navigation({ isLoaded }) {
//   const sessionUser = useSelector((state) => state.session.user);

//   let sessionLinks;
//   if (sessionUser) {
//     sessionLinks = <ProfileButton user={sessionUser} />;
//   } else {
//     sessionLinks = (
//       <>
//         <LoginFormModal />
//         <NavLink to="/signup">Sign Up</NavLink>
//       </>
//     );
//   }

//   return (
//     <nav className="navbar__container" id="navbar">
//       <div className="inner__nav">
//         <ul>
//           <li className="nav__panel">
//             <div className="airbnBoats__home">
//               <NavLink exact to="/">
//                 <img className="boatLogo" src={bnbLogo} alt="logo" />
//               </NavLink>
//             </div>
//             <div className="nav-right">
//               <NavLink className="listing__link" to="/listings">
//                 <button> Listings</button>
//               </NavLink>
//               {isLoaded && sessionLinks}
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;
