import React from 'react';
import './App.css';
import Home from './Components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NoMatch from './NoMatch/NoMatch';
import PostDetails from './Components/PostDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post/:postID">
         <PostDetails> </PostDetails>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NoMatch> </NoMatch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;