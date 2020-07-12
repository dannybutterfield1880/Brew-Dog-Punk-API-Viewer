import axios from 'axios';
import {BEERS_LOADED} from "../types";

export const loadBeers = () => (dispatch) => {
    axios.get('https://api.punkapi.com/v2/beers')
        .then(response => {
            dispatch({
                type: BEERS_LOADED,
                payload: response.data
            })
        })
        .catch(err => console.error(err))
}