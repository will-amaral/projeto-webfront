import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import store from 'store';
import App from 'App';
import 'utils/mock';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
