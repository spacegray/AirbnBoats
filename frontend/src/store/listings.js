const LOAD = 'listings/LOAD';
const ADD_ONE = 'listings/ADD_ONE';

const load = list => ({
    type: LOAD,
    list,
});

const addOneBoat = (boat) => ({
    type: ADD_ONE,
    boat,
})

export const getBoats = () => async (dispatch) => {
    const res = await fetch(`/api/listings`);

    if (res.ok) {
        const listings = await Response.json();
        dispatch(load(listings))
    }
};

export const getOneBoat = (boatId) => async dispatch => {
    const response = await fetch(`/api/listings/${boatId}`)
    if (!response.ok) throw response;
    let boat = await response.json();
    dispatch(addOneBoat(boat))
}
const initialState = {};

const boatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
            const allBoats = {};
            action.list.forEach(boat => {
                allBoats[boat.id] = boat;
            });
            return {
                ...allBoats,
                ...state,
            }
        }
        case ADD_ONE: {
            if (!state[action.boat.id]) {
                const newState = {
                    ...state,
                    [action.boat.id]: action.boat
                };
                const boatList = newState.list?.map(id => newState[id]);
                boatList?.push(action.boat);
                return newState;
            }
            return {
                ...state,
                [action.boat.id]: {
                    ...state[action.boat.id],
                    ...action.boat
                }
            }

        }
        default: {
            return state;
        }
    }
}
export default boatsReducer;
