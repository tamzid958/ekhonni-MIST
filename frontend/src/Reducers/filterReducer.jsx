import {
    ADD_CATEGORY_FILTER,
    ADD_DIVISION_FILTER,
    ADD_PRICE_FILTER,
    ADD_SORT_FILTER,
    ADD_SUBCATEGORY_FILTER,
    CLEAR_ALL_FILTER,
    DELETE_INDIVIDUAL_PRODUCT,
    SEARCH_PRODUCT,
    UPDATE_PAGE
} from "@/Actions/constants";


const initialState = {
    pageNumber: 0,
    categories: [],
    startPrice: null,
    endPrice: null,
    search: null,
    division: [],
    sort: null

};


const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_FILTER:
            if (state.categories.some(category => category.name === action.payload)) {
                return state;
            }
            return {
                ...state,
                categories: [...state.categories, {name: action.payload, subCategories: []}]
            };
        case ADD_SUBCATEGORY_FILTER:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (action.trace === category.name && !category.subCategories.includes(action.payload)) {
                        return {
                            ...category,
                            subCategories: [...category.subCategories, action.payload]
                        };
                    }
                    return category;
                })
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
            return {
                ...state,
                startPrice: action.payload[0],
                endPrice: action.payload[1],
            };
        case ADD_SORT_FILTER:
            if (state.sort !== null) {
                return state;
            }
            return {
                ...state,
                sort: action.payload
            };
        case SEARCH_PRODUCT:
            return {
                ...state,
                search: action.payload
            }
        case UPDATE_PAGE:
            return {
                ...state,
                pageNumber: action.payload
            }
        case CLEAR_ALL_FILTER:
            return initialState;
        case DELETE_INDIVIDUAL_PRODUCT:
            const updatedState = {...state};
            for (const key in updatedState) {
                if (Array.isArray(updatedState[key])) {
                    if (key === 'categories') {
                        updatedState[key] = updatedState[key].map(category => {
                            const updatedCategory = {...category};
                            if (updatedCategory.name === action.payload) {
                                return null;
                            } else {
                                updatedCategory.subCategories = updatedCategory.subCategories.filter(subCategory => subCategory !== action.payload);
                                return updatedCategory;
                            }
                        }).filter(category => category !== null);
                    } else {
                        updatedState[key] = updatedState[key].filter(item => item !== action.payload);
                    }


                }
            }
            return updatedState;
        default:
            return state;
    }
};


export default filterReducer;
