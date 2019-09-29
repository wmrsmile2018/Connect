import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

import svg_circle from './../images/svg/chat_friends/circle.svg';
import svg_smallСircle from './../images/svg/chat_friends/smallCircle.svg';
import svg_business from './../images/svg/chat_friends/business.svg';
import svg_personal from './../images/svg/chat_friends/personal.svg';
import svg_delete from './../images/svg/chat_friends/delete.svg';
import img_placeholder from './../images/users_placeholder.png';

const Circle = () => {
  return (
    <div className="header">
      <div className="circle">
        <img src={svg_circle}
          className="svg_circle"
        />
        <img src={svg_smallСircle}
          className="svg_smallCircle"
        />
      </div>
      <div className="search">
      </div>
      <div className="tools">
      </div>
    </div>
  );
}

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

const elements = [
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"}
]
window.a = elements;

const Fr_elements = elements.map((element) =>
  <div className={"userId" + elements.indexOf(element) + " users"}>
    <div className="fr_avatar">
      <img className="fr_img_avatar"
        src={element.img}
      />
    </div>
    <div className="fr_text_field">
      <p>{element.name}</p>
      <Link>To write a message</Link>
    </div>
    <div className="fr_delete">
      <img
        className="fr_svg_delete"
        src={svg_delete}
      />
    </div>
  </div>
);

const Friends = (props) => {
  return (
    <div className="Friends">
      {Fr_elements}
    </div>
  );
}

const ChFr_Wall = () => {
  return (
    <div className="chFr_wall_wrap1">
      <div className="ChFr_Wall">
        <div className="cfFr_types">
          <div className="cfFr_type1">
            <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg" className="svg_cfFr_type1">
              <circle cx="20" cy="20" r="20" />
            </svg>
          </div>
          <div className="cfFr_type2">
            <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg" className="svg_cfFr_type2">
              <circle cx="20" cy="20" r="20" />
            </svg>
          </div>
        </div>
        <div>
          <Friends/>
        </div>
      </div>
    </div>
  );
}

const Chats_friends = () => {
  return (
    <div className="Chat_friends">
      <Circle />
      <ChFr_Wall />
    </div>
  );
}

export default Chats_friends;
