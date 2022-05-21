import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./store";
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "flag-icon-css/css/flag-icons.min.css";
import "./i18n";

ReactDOM.render(
  <>
    <Suspense fallback="Loading..">
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </>,
  document.getElementById('root')
);

