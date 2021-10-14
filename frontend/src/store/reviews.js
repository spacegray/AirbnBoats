import { csrfFetch } from "./csrf";

const ADD_ONE = 'reviews/ADD_ONE';
const DELETE_ONE ='reviews/DELETE_ONE';
const UPDATE = 'reviews/UPDATE'
const LOAD = 'reviews/LOAD';

const addOneReview = review => ({
    type: ADD_ONE,
    review
})

const deleteOneReview = review => ({
    type: DELETE_ONE,
    review
});

const update = review => ({
    type: UPDATE,
    review
})

const load = reviews => ({
    type: LOAD,
    reviews
})

export const addReview = newReview => async dispatch => {
    const res = await csrfFetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify(newReview)
    })
    if (res.ok) {
        const newReview = await res.json();
        dispatch(addOneReview(newReview))
    }
}

export const getReviews = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`);

    if (res.ok) {
        const reviews = await res.json()
        console.log('this is the reviews', reviews)
        dispatch(load(reviews))
    }
    return getReviews;
}
export const updatedReview = (editedRev) => async dispatch => {
    const {id, userId, boatId, review } = editedRev;
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ userId, boatId, review })
    });
    if (res.ok) {
        const editedContent = await res.json();
        dispatch(update(editedContent));
        return editedContent
    }
}

export const deleteReview = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw res;
    const review = await res.json();
    dispatch(deleteOneReview(review));
    return review;
}

export const reviewForm = postReview => async dispatch => {
    const res = await csrfFetch('api/reviews', {
        method: 'POST',
        body: JSON.stringify(postReview)
    })
    if (!res.ok) throw res;
    const review = await res.json();
    dispatch(addOneReview(review));
    return review;
}

const initialState = {};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ONE: {
            if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review 
                }
            }
            return {
                ...state,
                [action.review.id]: {
                    ...state[action.review.id],
                    ...action.review,
                }
            }
        }
        case UPDATE: {
            return {
                ...state, [action.review.updateReview.id]: {
                    ...action.review.updateReview
                }
            }
        }
        case LOAD: {
            const totalReviews = {};
            action.reviews.forEach(review => {
                totalReviews[review.id] = review;
            });
            return {...state, totalReviews}
        };
        case DELETE_ONE: {
            const newState = {
                ...state,
            }
            delete newState[action.review]
            return newState
        }
        default:
            return state;

    }
}

export default reviewsReducer;