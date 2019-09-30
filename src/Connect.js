import React from 'react';
import './Connect.css';

import { Route } from 'react-router-dom';

import Chats_friend from './chats_friends/index'
import User_pages from './user_pages/index';

const Connect = () => {
  return (
    <div className="App">
      <switch>
        <Route exact path ="/"/>
        <Route path="/test" component={User_pages}/>
        <Route path="/partners" component={Chats_friend}/>
        <Route path="/chat" component={Chats_friend}/>
      </switch>
    </div>
  );
}

export default Connect;




    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
