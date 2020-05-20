import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, DetailArticle } from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/articles/:id" children={ <DetailArticle /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
