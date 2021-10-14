import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getOneBoat } from "../../store/listings";

import "./BoatListingPage.css";

function BoatListingPage() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
const boats = useSelector((state) => Object.values(state.boats));

  const boat = useSelector(state => {
    return state.boats[id]
    
  });
  useEffect(() => {
    dispatch(getOneBoat(id))
  }, [id, dispatch])

  if (!boat) {
    return null;
  }

// console.log(boat)

  return (
    <>
      <div className="boatList__section">
        <div className="nav__panel"></div>
        <div className="boat__details">
          <h2>{boat.name}</h2>
          <div className="boat__address">
            {boat.address},{boat.city}, {boat.state} {boat.country}{" "}
            {boat.zipCode}
          </div>
          <div className="price__section">
            <div className="listing__price">$ {boat.price} /day </div>
          </div>
          <div className="boat__image__section">
            <div className="boat__image">
              <img className="image" src={boat.img} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BoatListingPage;
