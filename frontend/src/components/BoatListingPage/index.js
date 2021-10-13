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

  const boat = useSelector(state => {
    return state.boats[id]
  });
  useEffect(() => {
    dispatch(getOneBoat(id))
  }, [id, dispatch])


  return (
    <>
      <div className="boatList__section">
        <h1>{boat.name}</h1>
          <div className='image__section'>
            <img className='boatImage' src={boat.img} alt=''>
              
            </img>
          </div>

      </div>
    </>
  );
}
export default BoatListingPage;
