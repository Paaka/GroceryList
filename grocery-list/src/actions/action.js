import * as types from './types';

export const addItem = (value) => {
    return({
        type:types.ADD_ITEM_TO_GROCERY_LIST,
        payload:{
            id:Date.now(),
            content:value,
        }
    });
}