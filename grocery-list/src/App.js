import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import ListView from './views/ListView';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <ListView></ListView>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
