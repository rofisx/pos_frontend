import debounce from "debounce-promise";
import { getProducts } from "../../api/product";
import { ERROR_FETCHING_PRODUCT, NEXT_PAGE, PREV_PAGE, SET_CATEGORY, SET_KEYWORD, SET_PAGE, SET_TAGS, START_FETCHING_PRODUCT, SUCCESS_FETCHING_PRODUCT, TOGGLE_TAG } from "./constants";

export const startFetchingProduct = () => ({
    type: START_FETCHING_PRODUCT
});

export const errorFetchingProduct = () => ({
    type: ERROR_FETCHING_PRODUCT
});

export const successFetchingProduct = (payload) => ({
    type: SUCCESS_FETCHING_PRODUCT,
    payload
});

let debounceFetchProducts = debounce(getProducts, 1000);

export const fetchProducts = () => {
    return async (dispatch, getState) => {
        dispatch(startFetchingProduct())
        let perPage = getState().products.perPage || 9;
        let currentPage = getState().products.currentPage || 1;
        let tags = getState().products.tags || [];
        let keyword = getState().products.keyword || '';
        let category = getState().products.category || '';
        const params = {
            limit: perPage,
            skip: (currentPage * perPage) - perPage,
            q: keyword,
            tags,
            category
        }

        try{
            let {data: {data, count}} = await debounceFetchProducts(params);
            dispatch(successFetchingProduct({data, count}))
        }catch(err){
            dispatch(errorFetchingProduct());
        }
    }
}

export const setPage = (number = 1) => ({
    type: SET_PAGE,
    payload: { currentPage: number }
});

export const setKeyword = (keyword) => ({
    type: SET_KEYWORD,
    payload: { keyword: keyword }
});

export const setCategory = (category) => ({
    type: SET_CATEGORY,
    payload: { category }
});

export const setTags = (tags) => ({
    type: SET_TAGS,
    payload: { tags }
});

export const toggleTag = (tag) => ({
    type: TOGGLE_TAG,
    payload: { tag }
});

export const gotoNextPage = () => ({
    type: NEXT_PAGE
});

export const gotoPrevPage = () => ({
    type: PREV_PAGE
})