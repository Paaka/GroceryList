import { act } from '@testing-library/react';
import * as types from '../actions/types';
import Note from '../models/Note';

const defualtState = {
    listTitle:'My Grocery list',
    groceryList:[],
    notes:[new Note('title','description')],
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
        case types.ADD_NOTE:{
            return{
                ...state,
                notes:[...state.notes, {...action.payload}],
            }
        }
        default: return state;
    }
}

export default reducer;