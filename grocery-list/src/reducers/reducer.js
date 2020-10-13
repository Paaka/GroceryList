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
                        isBought:false,
                        title:action.payload.content
                    }]
                    // listTitle:action.payload,
                }
            }else{
                return state;
            }
        }
        default: return state;
    }
}

export default reducer;