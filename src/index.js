import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Connect from './Connect';
// import Circle from './main_pages/Circle';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Connect />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
