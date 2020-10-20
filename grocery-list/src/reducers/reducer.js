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
        
        default: return state;
    }
}

export default reducer;