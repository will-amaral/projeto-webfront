import React from 'react';
import { useSelector } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';

import { Auth } from 'components/Auth';
import { useStyles } from './styles';
import { createTheme } from 'utils/theme';
import Routes from 'Routes';

const history = createBrowserHistory();

function App() {
  useStyles();
  const settings = useSelector((state) => state.settings);

  return (
    <ThemeProvider theme={createTheme(settings)}>
      <SnackbarProvider maxSnack={1}>
        <Router history={history}>
          <Auth>
            <Routes />
          </Auth>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
