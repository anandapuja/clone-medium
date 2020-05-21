import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, DetailArticle, MeArticles, AddArticle } from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/articles/:id" children={ <DetailArticle /> } />
          <Route path="/me/articles" children={ <MeArticles /> } />
          <Route path="/add-article" component={ AddArticle } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
