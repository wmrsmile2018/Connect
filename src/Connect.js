import React from 'react';
import './Connect.css';
import Circle from './user_pages/Circle/index';
import Wall from './user_pages/Users_wall/index';

import Chats_friend from './chats_friends/index'

const User_pages = () => {
  return (
    <div className="main_pages">
      <Circle/>
      <Wall />
    </div>
  );
}



const Connect = () => {
  return (
    <div className="App">
      <Chats_friend/>
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
