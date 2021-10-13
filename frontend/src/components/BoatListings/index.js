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
        <div className="boatList__section">
            {boats.map(boat => {
                return (
                  <NavLink key={boat.id} to={`/listings/${boat.id}`}>
                    <div className="boat__image__section">
                      <div className="boat__image">
                        <h1> {boat.name} </h1>
                        <img className="image" src={boat.img} alt=""></img>
                      </div>
                    </div>
                  </NavLink>
                );
            })}


        </div>
        </>
    )
}
export default BoatListings;