import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Table from './Table';

const App = () =>
  <MuiThemeProvider>
    <Table />
  </MuiThemeProvider>

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
