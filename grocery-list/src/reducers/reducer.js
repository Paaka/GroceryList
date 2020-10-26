import * as types from '../actions/types';

const defualtState = {
    listTitle:'My Grocery list',
    groceryList:[],
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
        default: return state;
    }
}

export default reducer;