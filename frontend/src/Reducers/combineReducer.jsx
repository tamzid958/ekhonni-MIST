import {combineReducers} from "redux";
import filterReducer from "@/Reducers/filterReducer";
import productReducer from "@/Reducers/productReducer";


const combineReducer = combineReducers({
    filter:filterReducer,
    product:productReducer
})
export default combineReducer;