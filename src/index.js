import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink, HashRouter as Router, Route } from 'react-router-dom';

import ArticlesPage from './Articles/ArticlesPage';
import PetsPage from './PetsPage';
injectTapEventPlugin();
import './index.css';

const App = (props) =>
  <MuiThemeProvider>
    <Router>
      <div>
        <nav className="nav">
          <NavLink className="nav__link" activeClassName="nav__link--active" to="/articles">Articles</NavLink>
          <NavLink className="nav__link" activeClassName="nav__link--active" to="/pets">Pets</NavLink>
        </nav>
        <Route path="/articles" component={ArticlesPage} />
        <Route path="/pets" component={PetsPage} />
      </div>
    </Router>
  </MuiThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
