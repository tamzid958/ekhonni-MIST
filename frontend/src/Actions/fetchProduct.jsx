import {getProductFailed, getProductRequest, getProductSuccess} from "@/Actions/product";
import axios from "axios";


const initialState = {
    pageNumber:0,
    categories: [
        {
            name: "Electronics",
            subCategories: ["Smartphones & Tablets"]
        },
        {
            name: "Furniture",
            subCategories: ["Table"]
        },

    ],
    startPrice:2000,
    endPrice: 100000,
    search:null,
    division:["Dhaka","Khulna"],
    sort:"High to low"

};

export const fetchProduct = ({filter})=>{
    const api = "http://localhost:8080/api/v1/products/filter"
    // for (let key in filter) {
    //     console.log(`${key}:`, filter[key]);
    // }
    return (dispatch)=>{
        dispatch(getProductRequest())
        axios.post(api,filter)
            .then(res =>{
                // console.log(res.data);
                const products = res.data;
                dispatch(getProductSuccess(products))
            })
            .catch(err => {
                dispatch(getProductFailed(err.message))
            })
    }
}