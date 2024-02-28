import {legacy_createStore as createStore,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

import combineReducer from "@/Reducers/combineReducer";

const store = createStore(combineReducer,applyMiddleware(thunk));

export default store;