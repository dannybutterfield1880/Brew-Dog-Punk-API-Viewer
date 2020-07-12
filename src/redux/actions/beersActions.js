import axios from 'axios';
import {BEERS_LOADED, TOTAL_BEERS_COUNTED} from "../types";

export const loadBeers = (currentPage) => (dispatch) => {
    dispatch({
        type: TOTAL_BEERS_COUNTED,
        payload: 325
    });

    axios.get(`https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=20`)
        .then(res => {
            dispatch({
                type: BEERS_LOADED,
                payload: res.data
            })
        })
        .catch(err => console.error(err))
}