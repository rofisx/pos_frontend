import { ADD_ITEM, CLEAR_ITEMS, REMOVE_ITEM, SET_ITEMS } from "./constants";

export function addItem(item){
    return {
        type: ADD_ITEM,
        payload: {
            item: {
                ...item,
                product: item.product || item
            }
        }
    }
}

export function removeItem(item){
    return {
        type: REMOVE_ITEM,
        payload: {
            item: item
        }
    }
}

export function clearItem(){
    return {
        type: CLEAR_ITEMS
    }
}

export function setItems(items){
    return {
        type: SET_ITEMS,
        payload: {items}
    }
}