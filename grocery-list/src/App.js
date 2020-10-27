import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddGroceryForm from './components/molecules/AddGroceryForm';
import GroceryListItem from './components/molecules/GroceryListItem';
import GroceryListContainer from './components/organisms/GroceryListContainer';
import Header from './components/organisms/Header';

function App() {
  const groceryList = useSelector(state => state.groceryList);

  const returnUnpurchasedItems = () => {
    return groceryList.map((listItem, index) => {
        if(!listItem.isBought){
          return <GroceryListItem key={listItem.id} listItem={listItem} />
        }
    });
  };

  const returnPurchasedItems = () => {
    return groceryList.map((listItem, index) => {
        if(listItem.isBought){
          return <GroceryListItem key={listItem.id} listItem={listItem} />
        }
    });
  };

  return (
    <div className="App">
      <Header title="my grocery list">Heelo</Header>
      <AddGroceryForm></AddGroceryForm>
      <GroceryListContainer>
        {returnUnpurchasedItems()}
      </GroceryListContainer>
      <GroceryListContainer>
        {returnPurchasedItems()}
      </GroceryListContainer>
    </div>
  );
}

export default App;
