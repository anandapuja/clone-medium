import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Articles, DetailArticle, MeArticles, AddArticle, Writer, Home, Clap, PutArticle, PostMessage, Bookmark,Login,Register } from './pages';
import { Header, HeaderNoLogin, Footer, FooterNoLogin } from './components'

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
          <Route exact path="/articles/:id" children={ <DetailArticle /> } />
          <Route path="/me/articles" children={ <MeArticles /> } />
          <Route exact path="/writer/:id" children={ <Writer /> } />
          <Route path="/writer/:id/send-message" component={ PostMessage } />
          <Route path="/add-article" component={ AddArticle } />
          <Route path="/edit-article/:id" component={ PutArticle } />
          <Route path="/clapped" component={ Clap } />
          <Route path="/bookmark"> <Bookmark/> </Route>
          <Route path="/login"> <Login/> </Route>
          <Route path="/register"> <Register/> </Route>
        </Switch>
        {
          localStorage.getItem('access_token') ? <Footer /> : <FooterNoLogin />
        }
      </Router>
    </div>
  );
}

export default App;
