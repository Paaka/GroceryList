import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/organisms/Header';
import AddGroceryForm from '../components/molecules/AddGroceryForm';
import GroceryListContainer from '../components/organisms/GroceryListContainer';
import GroceryListItem from '../components/molecules/GroceryListItem';
import MainTemplate from '../templates/MainTemplate';
import Sidebar from '../components/molecules/Sidebar';


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
        <MainTemplate>
            <Sidebar isSidebarOpen={true}/>
            <Header title="my grocery list">Heelo</Header>  
            <AddGroceryForm></AddGroceryForm>
            <GroceryListContainer>
                {returnSelectedItems(false)}
            </GroceryListContainer>
            <GroceryListContainer>
                {returnSelectedItems(true)}
            </GroceryListContainer>
        </MainTemplate>
    );
}

export default ListView;