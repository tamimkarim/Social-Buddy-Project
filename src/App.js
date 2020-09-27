import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";import NoMatch from './NoMatch/NoMatch';
import UserDetail from './components/UserDetail/UserDetail';


function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/home">
           <Home />
        </Route>
        <Route path="/user/:userId">
          <UserDetail></UserDetail>
        </Route>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="*">
           <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
