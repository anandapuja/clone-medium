import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Articles, DetailArticle, MeArticles, AddArticle } from './pages';
import { Header } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/articles" component={ Articles } />
          <Route path="/articles/:id" children={ <DetailArticle /> } />
          <Route path="/me/articles" children={ <MeArticles /> } />
          <Route path="/add-article" component={ AddArticle } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
