import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/organisms/Header';
import AddGroceryForm from '../components/molecules/AddGroceryForm';
import GroceryListContainer from '../components/organisms/GroceryListContainer';
import GroceryListItem from '../components/molecules/GroceryListItem';


const ListView = () => {
    const groceryList = useSelector(state => state.groceryList);

    const returnSelectedItems = (logicValue) => {
      return groceryList.map((listItem, index) => {
          if(listItem.isBought === logicValue){
            return <GroceryListItem key={listItem.id} listItem={listItem} />
          }
      });
    };
  
    // const returnPurchasedItems = () => {
    //   return groceryList.map((listItem, index) => {
    //       if(listItem.isBought){
    //         return <GroceryListItem key={listItem.id} listItem={listItem} />
    //       }
    //   });
    // };

    return(
        <div>
            <Header title="my grocery list">Heelo</Header>
            <AddGroceryForm></AddGroceryForm>
            <GroceryListContainer>
                {returnSelectedItems(false)}
            </GroceryListContainer>
            <GroceryListContainer>
                {returnSelectedItems(true)}
            </GroceryListContainer>
        </div>
    );
}

export default ListView;