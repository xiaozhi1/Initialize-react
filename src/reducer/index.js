import {combineReducers} from "redux";
import dalibaoReducer from "./dalibaoReducer.js";
import paramsSetReducer from "./paramsSetReducer.js";
export default combineReducers({
    dalibaoReducer,
    paramsSetReducer
})