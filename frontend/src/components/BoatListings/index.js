import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getBoats } from "../../store/listings";

import './BoatListings.css';

function BoatListings() {
    const dispatch = useDispatch();
    const boats = useSelector((state) => ((Object.values(state.boats))));
    useEffect(() => {
        dispatch(getBoats())
    }, [dispatch])
    
    if (!boats) {
        return null;
    }
    return (
      <>
        <div className="BoatListings__page">
          <div className="boatList__section">
            <div className="nav__panel">
              {boats.map((boat) => {
                return (
                  <NavLink key={boat.id} to={`/listings/${boat.id}`}>
                  <div className="boat__details">
                    <h2>{boat.name}</h2>
                    <div className="boat__address">{boat.address}, 
                    {boat.city}, {boat.state} {boat.country} {boat.zipCode}</div>
                    <div className='price__section'>
                      <div className='listing__price'>$ {boat.price} /day </div>
                   </div>
                    <div className="boat__image__section">
                      <div className="boat__image">
                        <img className="image" src={boat.img} alt=""></img>
                      </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
}
export default BoatListings;