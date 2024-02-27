import {
    ADD_CATEGORY_FILTER,
    ADD_DIVISION_FILTER,
    ADD_PRICE_FILTER,
    ADD_SORT_FILTER,
    ADD_SUBCATEGORY_FILTER,
    CLEAR_ALL_FILTER,
    DELETE_INDIVIDUAL_PRODUCT
} from "@/Actions/constants";

const initialState = {
    category: [],
    subCategory: [],
    division: [],
    price: [0,100000],
    sort: ""
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_FILTER:
            if (state.category.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                category: [...state.category, action.payload]
            };
        case ADD_SUBCATEGORY_FILTER:
            if (state.subCategory.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                subCategory: [...state.subCategory, action.payload]
            };
        case ADD_DIVISION_FILTER:
            if (state.division.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                division: [...state.division, action.payload]
            };
        case ADD_PRICE_FILTER:
            if (state.price.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                price: action.payload
            };
        case ADD_SORT_FILTER:
            if (state.sort.includes(action.payload)) {
                return state;
            }
            return {
                ...state,
                sort: action.payload
            };
        case CLEAR_ALL_FILTER:
            return initialState;
        case DELETE_INDIVIDUAL_PRODUCT:
            const updatedState = { ...state };
            for (const key in updatedState) {
                if(Array.isArray(updatedState[key])){
                    updatedState[key] = updatedState[key].filter(item => item !== action.payload);
                }
            }
            return updatedState;
        default:
            return state;
    }
};


export default filterReducer;
