     
     //from reviews store

     if (!state[action.review.id]) {
                const newState = {
                    ...state,
                    [action.review.id]: action.review 
                }

                        case LOAD: {
            newState.reviews = action.reviews
            return newState;
        };