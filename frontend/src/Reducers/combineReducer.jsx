import {combineReducers} from "redux";
import filterReducer from "@/Reducers/filterReducer";


const combineReducer = combineReducers({
    filter:filterReducer
})
export default combineReducer;