import {getProductRequest,getProductFailed,getProductSuccess} from "@/Actions/product";
import axios from "axios";
import categories from "@/components/Categories";
const api = "http://localhost:8080/api/v1/products/page"

export const fetchProduct = ({id,filter})=>{
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
    const url = `${api}/${id}?categories=${filter.category.join('&categories=')}&subCategories=${filter.subCategory.join('&subCategories=')}&division=${filter.division.join('&division=')}&price=${filter.price.join('&price=')}&sort=${filter.sort}`;

    return (dispatch)=>{
        dispatch(getProductRequest())
        axios.get(url)
            .then(res =>{
                const products = res.data;
                dispatch(getProductSuccess(products))
            })
            .catch(err =>{
                dispatch(getProductFailed(err.message))
            })
    }
}