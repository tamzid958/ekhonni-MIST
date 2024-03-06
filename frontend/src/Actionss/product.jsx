import {PRODUCT_FETCH_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESSFULLY_FETCH} from "@/Actionss/constants";

export const getProductRequest = () => {
    return {
        type: PRODUCT_REQUEST
    }
}
export const getProductFailed = (error) => {
    return {
        type: PRODUCT_FETCH_ERROR,
        payload: error
    }
}
export const getProductSuccess = (product) => {
    return {
        type: PRODUCT_SUCCESSFULLY_FETCH,
        payload: product
    }
}