import React from 'react';
import { Link } from 'react-router-dom';

import svg_home from './../../images/svg/chat_friends/home.svg';
import svg_wtf1 from './../../images/svg/chat_friends/wtf1.svg';
import svg_chat from './../../images/svg/chat_friends/chat.svg';
import svg_wtf2 from './../../images/svg/chat_friends/wtf2.svg';
import svg_wtf3 from './../../images/svg/chat_friends/wtf3.svg';


const tools_elements = [
  {link: "/home", div_name: "chFr_tool1", svg_circle_name: "svg_chFr_tool1", img_element_name: "img_chFr_tool1", img_src: svg_home},
  {link: "/", div_name: "chFr_tool2", svg_circle_name: "svg_chFr_tool2", img_element_name: "img_chFr_tool2", img_src: svg_wtf1},
  {link: "/", div_name: "chFr_tool3", svg_circle_name: "svg_chFr_tool3", img_element_name: "img_chFr_tool3", img_src: svg_chat},
  {link: "", div_name: "chFr_tool4", svg_circle_name: "svg_chFr_tool4", img_element_name: "img_chFr_tool4", img_src: svg_wtf2},
  {link: "/", div_name: "chFr_tool5", svg_circle_name: "svg_chFr_tool5", img_element_name: "img_chFr_tool5", img_src: svg_wtf3}
]

const Tools_buttons = tools_elements.map((tools_element) =>
  <Link to={"/chat" + tools_element.link}>
    <div key={tools_element.objectID} className={tools_element.div_name}>
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={"chFr_tools_svg" + " " + tools_element.svg_circle_name}>
        <circle cx="20" cy="20" r="20"/>
      </svg>
      <img
        className={"chFr_tools_img"+ " " + tools_element.img_element_name}
        src={tools_element.img_src}
      />
    </div>
  </Link>
);

export default Tools_buttons;
