import {PRODUCT_FETCH_ERROR, PRODUCT_REQUEST, PRODUCT_SUCCESSFULLY_FETCH} from "@/Actions/constants";

const initialState = {
    products: [],
    isLoading: false,
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case PRODUCT_SUCCESSFULLY_FETCH:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                error: null,
            };
        case PRODUCT_FETCH_ERROR:
            return {
                ...state,
                isLoading: false,
                error: true,
            };
        default:
            return state;
    }
}
export default productReducer;