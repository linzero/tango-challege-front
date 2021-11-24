import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { fiboReducer } from "../reducers/fiboReducer";
import thunk from 'redux-thunk';
import { uiReducer } from "../reducers/uiReducer";

const win:any = window
const composeEnhancers = (typeof win !== 'undefined' && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    fibo:fiboReducer,
    ui:uiReducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);