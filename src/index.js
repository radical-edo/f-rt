import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import 'font-awesome/css/font-awesome.min.css';

import PetsPage from './PetsPage';

const App = () =>
  <MuiThemeProvider>
    <PetsPage />
  </MuiThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
