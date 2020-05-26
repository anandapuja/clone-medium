import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Articles, DetailArticle, MeArticles, AddArticle, Writer, Home, Clap, PutArticle, PostMessage, Bookmark, Login, Register, Message, ResponseMessage } from './pages';
import { Header, HeaderNoLogin, Footer, FooterNoLogin } from './components'

function App() {

  const [status, setStatus] = useState(false);

  const logStatus = () => {
    setStatus(true);
  }

  const logoutStatus = () => {
    setStatus(false);
  }

  useEffect(() => {
    if(localStorage.getItem('access_token')){
      setStatus(true);
    }
  },[])

  return (
    <div className="App">
      <Router>
        {
          status ? <Header logoutStatus={logoutStatus} /> : <HeaderNoLogin />
        }
        <Switch>
          { localStorage.getItem('access_token') ? <Route exact path="/" component={ Articles } /> : <Route exact path="/"><Home /></Route> }
          <Route exact path="/articles" component={ Articles } logStatus={true} />
          <Route exact path="/articles/:id" children={ <DetailArticle /> } />
          <Route path="/me/articles" children={ <MeArticles /> } />
          <Route exact path="/writer/:id" children={ <Writer /> } />
          <Route path="/writer/:id/send-message" component={ PostMessage } />
          <Route path="/add-article" component={ AddArticle } />
          <Route path="/edit-article/:id" component={ PutArticle } />
          <Route path="/clapped" component={ Clap } />
          <Route path="/bookmark"> <Bookmark/> </Route>
          <Route path="/login"> <Login logStatus={logStatus} /> </Route>
          <Route path="/register"> <Register logStatus={logStatus} /> </Route>
          <Route exact path="/message" component={ Message } />
          <Route path="/message/:id" component={ ResponseMessage } />
        </Switch>
        {
          localStorage.getItem('access_token') ? <Footer /> : <FooterNoLogin />
        }
      </Router>
    </div>
  );
}

export default App;
