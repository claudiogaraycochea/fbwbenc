import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import getRootReducer from "../reducers";

const logger = store => next => action => {
    let result = next(action)
    return result
}

export default function getStore(navReducer) {
    const store = createStore(
        getRootReducer(navReducer),
        undefined,
        applyMiddleware(logger,thunk)
    );

    return store;
}