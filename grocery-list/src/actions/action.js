import Note from '../models/Note';
import * as types from './types';

export const addItem = (value) => {
    return({
        type:types.ADD_ITEM_TO_GROCERY_LIST,
        payload:{
            content:value,
        }
    });
};

export const deleteItemFromGroceryList = (id) => {
    return({
        type:types.DELETE_ITEM_FROM_GROCERY_LIST,
        payload:{
            id,
        }
    });
};

export const updateItemTitleInGroceryList = (id, newTitle) => {
    return({
        type: types.UPDATE_ITEM_TITLE_IN_GROCERY_LIST,
        payload:{
            id,
            newTitle,
        },
    });
};

export const updateItemCompletionInGroceryList = (id) => {
    return({
        type : types.UPDATE_ITEM_COMPLETION_IN_GROCERY_LIST,
        payload : {
            id,
        },
    });
};

export const addNote = (title, description) => {
    return({
        type: types.ADD_NOTE,
        payload: new Note(title, description),
    })
}