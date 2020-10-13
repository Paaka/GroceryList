const defualtState = {
    listTitle:'My Grocery list',
    groceryList:[],
}

function reducer(state = defualtState, action){
    switch(action.type){
        case "ADD_ITEM_TO_GROCERY_LIST":{
            return{
                ...state,
                groceryList:[...state.groceryList, {
                    isBought:false,
                    title:action.payload.content
                }]
                // listTitle:action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;