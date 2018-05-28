import { combineReducers } from "redux";
import cars from "./cars";
import opportunitiesConstructor from './opportunities'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        cars: cars,
        opportunitiesConstructor: opportunitiesConstructor
    });
}