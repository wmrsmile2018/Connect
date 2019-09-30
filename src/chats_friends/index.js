import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import ChFr_Wall from './Wall/index';
import Circle from './Circle/index';
//
// const Chats = () => {
//   return (
//
//   );
// }

// const Diolog = () => {
//   return (
//
//   );
// }

const Chats_friends = () => {
  return (
    <div className="Chat_friends">
      <Circle />
      <ChFr_Wall />
    </div>
  );
}

export default Chats_friends;
