import React from 'react';
import svg_marker from './../../images/svg/user_tools/Marker.svg';
import svg_info from './../../images/svg/user_tools/Info.svg';
import svg_settings from './../../images/svg/user_tools/Settings.svg';
import svg_statics from './../../images/svg/user_tools/Statics.svg';

const elements = [
  {div_name: "div_user_tools_marker", svg_name: "svg_user_tools_marker", img_name: "img_user_tools_marker", img_src: svg_marker},
  {div_name: "div_user_tools_info", svg_name: "svg_user_tools_info", img_name: "img_user_tools_info", img_src: svg_info},
  {div_name: "div_user_tools_settings", svg_name: "svg_user_tools_settings", img_name: "img_user_tools_settings", img_src: svg_settings},
  {div_name: "div_user_tools_statics", svg_name: "svg_user_tools_statics", img_name: "img_user_tools_statics", img_src: svg_statics}
]

const User_tools_buttons = elements.map((element) =>
  <div key={element.objectID} className={element.div_name}>
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={"svg_user_tools " + element.svg_name}>
      <circle cx="20" cy="20" r="20"/>
    </svg>
    <img
      className={"img_user_tools " + element.img_name}
      src={element.img_src}
    />
  </div>
);

const User_tools = () => {
  return (
  <div className="Users_tools">
    {User_tools_buttons}
  </div>
  );
}

export default User_tools;
