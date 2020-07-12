import {BEERS_LOADED, TOTAL_BEERS_COUNTED} from "../types";

const initialState = {
    results: [],
    total: 0
};

export default function(state = initialState, action) {
    switch (action.type) {
        case BEERS_LOADED:
            return {
                ...state,
                results: action.payload
            };
        case TOTAL_BEERS_COUNTED:
            return {
                ...state,
                total: action.payload
            }
        default:
            return state;
    }
}