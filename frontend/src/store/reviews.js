import { csrfFetch } from "./csrf";

const ADD_ONE = "reviews/ADD_ONE";
const DELETE = "reviews/DELETE";
const UPDATE = "reviews/UPDATE";
const LOAD = "reviews/LOAD";

const addOneReview = (review) => ({
  type: ADD_ONE,
  review,
});

const deleteOneReview = (id) => ({
  type: DELETE,
  id,
});

// const update = (review) => {
//   return {
//     type: UPDATE,
//     payload: review,

//   }
// };

const update = (review) => ({
  type: UPDATE,
  review,
});

const load = (reviews) => ({
  type: LOAD,
  reviews,
});

export const addReview = (newReview) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(newReview),
  });
  if (res.ok) {
    const newReview = await res.json();
    dispatch(addOneReview(newReview));
  }
};

export const getReviews = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`);

  if (res.ok) {
    const reviews = await res.json();
    console.log("this is the reviews", reviews);
    dispatch(load(reviews));
  }
  return getReviews;
};

// export const updateReview = (editedRev) => async dispatch => {
//    const { id, userId, boatId, review } = editedRev;
//   const res = await csrfFetch(`/api/reviews/${id}`, {
//     method: "PUT",
//     include: 'user',
//     body: JSON.stringify(editedRev),
//   }
//   );
//   const content = await res.json();
//   dispatch(update(content));
// }

export const updateReview = (editedRev) => async (dispatch) => {
  const { id, review } = editedRev;
  console.log("thunk test", editedRev);
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "PUT",
    body: JSON.stringify({ review }),
  });
  if (res.ok) {
    const editedContent = await res.json();
    console.log("edited content test", editedContent);
    dispatch(update(editedContent));
    return editedContent;
  }
};

export const deleteReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw res;
  const review = await res.json();
  dispatch(deleteOneReview(review));
  return review;
};

export const reviewForm = (postReview) => async (dispatch) => {
  const res = await csrfFetch("/api/reviews", {
    method: "POST",
    body: JSON.stringify(postReview),
  });
  if (!res.ok) throw res;
  const review = await res.json();
  dispatch(addOneReview(review));
  return review;
};

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
  // let newState = { ...state };
  // console.log("reducer test", action.review);
  switch (action.type) {
    case ADD_ONE: {
      if (!state[action.review.id]) {
        const newState = {
          ...state,
          [action.review.id]: action.review,
        };
        return newState;
      }
      return {
        ...state,
        [action.review.id]: { ...action.review },
      };
    }
    case UPDATE: {
      // action.payload.review.user = action.payload.user
      let newState = {...state};
      if (action.review.id) {
        newState[action.review.id] = action.review;
      }
      return newState
        // action,
        
    }
    case LOAD: {
      const totalReviews = {};
      action.reviews.forEach((review) => {
        totalReviews[review.id] = review;
      });
      return { ...state, ...totalReviews };
    }
    case DELETE: {
      delete state[action.id];
      return { ...state };
    }
    default:
      return state;
  }
};

export default reviewsReducer;
