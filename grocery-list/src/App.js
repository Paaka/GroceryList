import React from 'react';
import './App.css';
import AddGroceryForm from './components/molecules/AddGroceryForm';
import Header from './components/organisms/Header';

function App() {
  return (
    <div className="App">
      <Header title="my grocery list">Heelo</Header>
      <AddGroceryForm></AddGroceryForm>
    </div>
  );
}

export default App;
