import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import beersReducer from "./reducers/beersReducer";
import searchReducer from "./reducers/searchReducer";
import uiReducer from "./reducers/uiReducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
    beers: beersReducer,
    search: searchReducer,
    UI: uiReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
)

export default store;

