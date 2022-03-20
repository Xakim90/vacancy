import React from 'react';
import './index.css';
import './App.less'
import App from './App';
import store from './redux/redux-store';
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);
