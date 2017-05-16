import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'font-awesome/css/font-awesome.min.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import ArticlesPage from './Articles/ArticlesPage';
import PetsPage from './PetsPage';
injectTapEventPlugin();

const App = (props) =>
  <MuiThemeProvider>
    <Router>
      <div>
        <nav>
          <Link to="/articles">Articles</Link>
          <Link to="/pets">Pets</Link>
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
