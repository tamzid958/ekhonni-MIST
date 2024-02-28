"use client"
import {Provider} from "react-redux";
import store from "@/Store/index";

export const StoreProvider = ({children})=>{
    return <Provider store={store}>{children}</Provider>
}