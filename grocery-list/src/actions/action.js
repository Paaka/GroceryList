import * as types from './types';

export const addItem = (value) => {
    return({
        type:types.ADD_ITEM_TO_GROCERY_LIST,
        payload:{
            content:value,
        }
    });
}

export const deleteItemFromGroceryList = (id) => {
    return({
        type:types.DELETE_ITEM_FROM_GROCERY_LIST,
        payload:{
            id,
        }
    });
};