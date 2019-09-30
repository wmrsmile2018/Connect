import React from 'react';
import { Link } from 'react-router-dom';

import svg_business from './../../../images/svg/chat_friends/business.svg';
import svg_personal from './../../../images/svg/chat_friends/personal.svg';
import svg_delete from './../../../images/svg/chat_friends/delete.svg';
import svg_tochat from './../../../images/svg/chat_friends/tochat.svg';
import img_placeholder from './../../../images/users_placeholder.png';

const elements = [
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"},
  {name: "test", img: img_placeholder, online: "false", mobile: "false"}
]

const Fr_elements = elements.map((element) =>
  <div className={"Fr_userId" + elements.indexOf(element) + " Fr_users"}>
    <div className="fr_avatar">
      <img className="fr_img_avatar"
        src={element.img}
      />
    </div>
    <div className="fr_text_field">
      <p>{element.name}</p>
      <Link>
        To write a message
        <img
          className="Fr_tochat"
          src={svg_tochat}
        />
      </Link>
    </div>
    <div className="fr_delete">
      <img
        className="fr_svg_delete"
        src={svg_delete}
      />
    </div>
  </div>
);

export default Fr_elements;
