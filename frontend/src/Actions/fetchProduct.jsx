import {getProductRequest,getProductFailed,getProductSuccess} from "@/Actions/product";
import axios from "axios";
import categories from "@/components/Categories";

const initialState = {
    pageNumber:0,
    categories: [
        {
            name: "Electronics",
            subCategories: ["Smartphones & Tablets"]
        }
    ],
    startPrice:2000,
    endPrice: 100000,
    search:null,
    division:["Dhaka","Khulna"],
    sort:"High to low"

};

export const fetchProduct = ({filter})=>{
    // console.log(id)
    // Object.keys(filter).forEach(key => {
    //     if (Array.isArray(filter[key])) {
    //         console.log(`${key}:`);
    //         filter[key].forEach(item => {
    //             console.log(item);
    //         });
    //     } else {
    //         console.log(`${key}: ${filter[key]}`);
    //     }
    // });
//    const url = `${api}/${id}?categories=${filter.category.join('&categories=')}&subCategories=${filter.subCategory.join('&subCategories=')}&division=${filter.division.join('&division=')}&price=${filter.price.join('&price=')}&sort=${filter.sort}`;
    const api = "http://localhost:8080/api/v1/products/filter"

    return (dispatch)=>{
        dispatch(getProductRequest())
        axios.post(api,filter)
            .then(res =>{
                console.log(res.data);
                const products = res.data;
                dispatch(getProductSuccess(products))
            })
            .catch(err =>{
                dispatch(getProductFailed(err.message))
            })
    }
}