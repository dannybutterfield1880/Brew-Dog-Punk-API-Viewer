import {BEERS_LOADED, BEERS_LOADING, NEXT_PAGE, PREV_PAGE} from "../types";

const initialState = {
    loading: false,
    currentPage: 1
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
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1
            }
        default:
            return state;
    }
}