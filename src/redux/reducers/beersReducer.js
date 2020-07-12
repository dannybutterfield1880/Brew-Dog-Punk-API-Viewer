import {BEERS_LOADED} from "../types";

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case BEERS_LOADED:
            return action.payload;
        default:
            return state;
    }
}