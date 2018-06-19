import { combineReducers } from "redux";
import opportunitiesConstructor from './opportunities'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        opportunitiesConstructor: opportunitiesConstructor
    });
}