import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookings, deleteBooking } from "../../store/bookings";
import { NavLink } from "react-router-dom";
// import { useParams } from 'react-router';
import "./Bookings.css";

function Bookings() {
    const sessionUser = useSelector((state) => state.session.user);
    // const userId = sessionUser.id
    const userId = sessionUser.id;
    const dispatch = useDispatch();
    const boat = useSelector((state) => state.boats[id]);
    const bookings = Object.values(useSelector(state => {
        return state.bookings
    }))

    useEffect(() => {
      dispatch(getUserBookings(userId));
    }, [dispatch, userId]);

    if (!sortedBookings) {
        return null;
    }

    const deleteBookingBtn = (id) => {
        dispatch(deleteBooking(id));
    };
    return (
      <>
        <div className="userBookings__section">
          {bookings?.map((booking) => (
            <div key={booking?.id} className="individual__booking">
              <NavLink to={`/listings/${booking?.boatId}`}>
                <img
                  className="bookingImg"
                  src={booking?.boat.img}
                  alt="listing"
                ></img>
              </NavLink>
              <div className="booking__details">
                <div className="bookingName">{booking?.Boat.name}</div>
                <div className="bookingAddress">
                  Address: {booking?.boat.address}
                </div>
                <div className="booking__price">
                  Price: ${booking?.boat.price} / night
                </div>
                <div className="booking__time">
                  Booking was reserved at:{" "}
                  {new Date(booking?.createdAt).toLocaleString()}
                </div>
              </div>
              <button
                className="cancelBtn"
                type="button"
                onClick={() => deleteBtn(booking?.id)}
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      </>
    );

}
export default Bookings