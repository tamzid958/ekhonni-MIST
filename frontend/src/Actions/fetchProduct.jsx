import {getProductFailed, getProductRequest, getProductSuccess} from "@/Actions/product";
import axios from "axios";



export const fetchProduct = ({filter}) => {
    const api = "http://localhost:8080/api/v1/products/filter"
    return (dispatch) => {
        dispatch(getProductRequest())
        axios.post(api, filter)
            .then(res => {
                const products = res.data;
                dispatch(getProductSuccess(products))
            })
            .catch(err => {
                dispatch(getProductFailed(err.message))
            })
    }
}