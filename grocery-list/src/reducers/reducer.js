import { act } from '@testing-library/react';
import * as types from '../actions/types';
import colors from '../constants/colors';
import Note from '../models/Note';

const defualtState = {
    listTitle:'My Grocery list',
    groceryList:[],
    notes:[new Note('title','description', colors.cardColors.purlple)],
    user:null,
}

function reducer(state = defualtState, action){
    switch(action.type){
        case "ADD_ITEM_TO_GROCERY_LIST":{
            if(action.payload.content !== ''){
                return{
                    ...state,
                    groceryList:[...state.groceryList, {
                        id:Date.now(),
                        isBought:false,
                        title:action.payload.content
                    }]
                }
            }else{
                return state;
            }
        }
        case types.DELETE_ITEM_FROM_GROCERY_LIST:{
            return{
                ...state,
                groceryList:state.groceryList.filter(item => item.id !== action.payload.id)
            }
        }
        case types.UPDATE_ITEM_TITLE_IN_GROCERY_LIST:{
            return {
                ...state,
                groceryList: state.groceryList.map(item => {
                    if(item.id=== action.payload.id){
                        return {
                            ...item,
                            title: action.payload.newTitle,
                        }
                    }
                    return item;
                })
            }
        }
        case types.UPDATE_ITEM_COMPLETION_IN_GROCERY_LIST:{
            return {
                ...state,
                groceryList: state.groceryList.map(groceryItem => {
                    if(groceryItem.id === action.payload.id){
                        return {
                            ...groceryItem,
                            isBought: !groceryItem.isBought,
                        };
                    }else{
                        return groceryItem;
                    };
                }),
            };
        }
        case types.UPDATE_NOTE_IS_SELECTED:{
            return{
                ...state,
                notes: state.notes.map(note => {
                    if(note.id === action.payload.id){
                        return{
                            ...note,
                            isSelected: action.payload.isSelected,
                        }
                    }else{
                        return note;
                    };
                }),
            };
        }
        case types.ADD_NOTE:{
            return{
                ...state,
                notes:[...state.notes, {...action.payload}],
            }
        }
        case types.UPDATE_NOTE_TITLE :{
            return{
                ...state,
                notes: state.notes.map(note => {
                    if(note.id === action.payload.id){
                        return{
                            ...note, 
                            title:action.payload.newTitle,
                        }
                    }else{
                        return note;
                    }
                })
            }
        }
        case types.UPDATE_NOTE_DESCRIPTION :{
            return{
                ...state,
                notes:state.notes.map(note => {
                    if(note.id === action.payload.id){
                        return {
                            ...note,
                            description: action.payload.newDescription,
                        };
                    }else{
                        return note;
                    };
                }),
            };
        }
        case types.DELETE_NOTE: {
            return{
                ...state,
                notes:state.notes.filter(note => note.id !== action.payload.id),
            };
        }
        case types.LOGIN_USER:{
            return{
                ...state,
                user:action.payload,
            };
        }
        case types.LOGOUT_USER:{
            return{
                ...state,
                user:action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;