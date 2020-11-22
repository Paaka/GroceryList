import Note from '../models/Note';
import User from '../models/User';
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

export const updateNoteTitle = (id, newTitle) => {
    return({
        type:types.UPDATE_NOTE_TITLE,
        payload:{
            id,
            newTitle,
        },
    });
};

export const updateNoteDescription = (id, newDescription) =>{
    return({
        type: types.UPDATE_NOTE_DESCRIPTION,
        payload:{
            id,
            newDescription
        }
    })
}

export const deleteNote = (id) => {
    return({
        type: types.DELETE_NOTE,
        payload:{
            id,
        },
    });
}

export const loginUser = (uid, email) => {
    return({
        type: types.LOGIN_USER,
        payload: new User(email,uid),
    });
};