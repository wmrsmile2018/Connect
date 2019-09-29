import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './Connect';
import { BrowserRouter, HashRouter } from 'react-router-dom';
// import {createStore} from 'redux';
// import allReducers from './reducers'
// import Circle from './main_pages/Circle';
import * as serviceWorker from './serviceWorker';
// const state = createStore (allReducers);
ReactDOM.render((
  <HashRouter>
    <Connect />
  </HashRouter>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
