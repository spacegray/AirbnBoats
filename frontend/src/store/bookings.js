import { csrfFetch } from "./csrf";

const ADD_BOOKING = "bookings/ADD_BOOKING";
const LOAD = "bookings/LOAD";
const DELETE = "bookings/DELETE";

const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

const load = (bookings) => ({
  type: LOAD,
  bookings,
});

const deleteBooking = (booking) => ({
  type: DELETE,
  booking,
});

export const addNewBooking = (Booking) => async (dispatch) => {
  const response = await csrfFetch("/api/bookings", {
    method: "POST",
    body: JSON.stringify(Booking),
  });
  if (!response.ok) throw response;
  const booking = await response.json();
  dispatch(addNewBooking(booking));
  return booking;
};

export const getUserBookings = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${userId}`);

  if (response.ok) {
    const bookings = await response.json();
    dispatch(load(bookings));
  }
};
export const deleteBooking = (userId) => async (dispatch) => {
  const response = await csrfFetch(`/api/bookings/${userId}`, {
    method: "DELETE",
  });
  if (!response.ok) throw response;
  const booking = await response.json();
  dispatch(deleteOneBooking(booking));
  return booking;
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING: {
      const newState = {
        ...state,
        [action.booking.id]: action.booking,
      };
      return newState;
    }
     case LOAD: {
      const allBookings = {};
      action.bookings.forEach((booking) => {
        allBookings[booking.id] = booking;
      });
      return {
        ...allBookings,
      };
    }
    case DELETE: {
      const newState = {
        ...state,
      };
      delete newState[action.booking];
      return newState;
    }
    default:
      return state;
  }
};

export default bookingsReducer;
