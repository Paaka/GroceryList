import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import ListView from './views/ListView';
import LoginView from './views/LoginView';
import SingleNoteView from './views/SingleNoteView';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ListView></ListView>
          </Route>
          <Route path="/Login">
            <LoginView></LoginView>
          </Route>
          <Route path="/note/:id">
            <SingleNoteView></SingleNoteView>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
