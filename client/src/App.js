import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Articles, DetailArticle, MeArticles, AddArticle, Writer, Home, Clap } from './pages';
import { Header, HeaderNoLogin } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        {
          localStorage.getItem('access_token') ? <Header /> : <HeaderNoLogin />
        }
        <Switch>
          { localStorage.getItem('access_token') ? <Route exact path="/" component={ Articles } /> : <Route exact path="/" component={ Home } /> }
          <Route exact path="/articles" component={ Articles } />
          <Route path="/articles/:id" children={ <DetailArticle /> } />
          <Route path="/me/articles" children={ <MeArticles /> } />
          <Route path="/writer/:id" children={ <Writer /> } />
          <Route path="/add-article" component={ AddArticle } />
          <Route path="/clapped" component={ Clap } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
