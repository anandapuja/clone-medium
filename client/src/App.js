import React from 'react';
import './App.css';
import {Bookmark} from './pages'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/Bookmark">Bookmark</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>

        <Route path="/Bookmark">
          <Bookmark/>
        </Route>

      </Switch>

    </Router>

  );
}

export default App;
