import {getProductRequest,getProductFailed,getProductSuccess} from "@/Actions/product";
import axios from "axios";
import categories from "@/components/Categories";
const api = "http://localhost:8080/api/v1/products/page"


export const fetchProduct = ({id,filter})=>{

    return (dispatch)=>{
        dispatch(getProductRequest())
        axios.get(`${api}/${id}?categories=${filter.category}&subCategories=${filter.subCategory}&division=${filter.division}&price=${filter.price}&sort=${filter.sort}`

        )
            .then(res =>{
                const products = res.data;
                dispatch(getProductSuccess(products))
            })
            .catch(err =>{
                dispatch(getProductFailed(err.message))
            })
    }
}