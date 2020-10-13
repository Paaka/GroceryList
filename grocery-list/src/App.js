import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import AddGroceryForm from './components/molecules/AddGroceryForm';
import GroceryListItem from './components/molecules/GroceryListItem';
import GroceryListContainer from './components/organisms/GroceryListContainer';
import Header from './components/organisms/Header';

function App() {
  const groceryList = useSelector(state => state.groceryList);

  return (
    <div className="App">
      <Header title="my grocery list">Heelo</Header>
      <AddGroceryForm></AddGroceryForm>
      <GroceryListContainer>
      {groceryList.map((listItem, index) => <GroceryListItem key={index} listItem={listItem} />)}
      </GroceryListContainer>
    </div>
  );
}

export default App;
