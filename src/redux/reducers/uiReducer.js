import {BEERS_LOADED, BEERS_LOADING} from "../types";

const initialState = {
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case BEERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case BEERS_LOADED:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}