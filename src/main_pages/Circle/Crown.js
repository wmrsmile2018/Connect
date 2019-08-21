import React from 'react';
import svg_crown from './../../images/svg/crown/crown.svg';

//элементы для короны на 1й орбите
import img_chat from './../../images/crown/img_chat.png';
import img_community from './../../images/crown/img_community.png';
import img_cooperation from './../../images/crown/img_cooperation.png';
import img_document from './../../images/crown/img_document.png';
import img_notes from './../../images/crown/img_notes.png';
import img_partners from './../../images/crown/img_partners.png';


const crown_elements = [
  {svg_circles_name: "crown_svg", div_name: "div_tool_1", svg_circle_name: "svg_crown_circle_name1",img_elements_name: "crown_img", img_element_name: "img_crown_element_name1", img_src: img_document},
  {svg_circles_name: "crown_svg", div_name: "div_tool_2", svg_circle_name: "svg_crown_circle_name2",img_elements_name: "crown_img", img_element_name: "img_crown_element_name2", img_src: img_notes},
  {svg_circles_name: "crown_svg", div_name: "div_tool_3", svg_circle_name: "svg_crown_circle_name3",img_elements_name: "crown_img", img_element_name: "img_crown_element_name3", img_src: img_community},
  {svg_circles_name: "crown_svg", div_name: "div_tool_4", svg_circle_name: "svg_crown_circle_name4",img_elements_name: "crown_img", img_element_name: "img_crown_element_name4", img_src: img_chat},
  {svg_circles_name: "crown_svg", div_name: "div_tool_5", svg_circle_name: "svg_crown_circle_name5",img_elements_name: "crown_img", img_element_name: "img_crown_element_name5", img_src: img_cooperation},
  {svg_circles_name: "crown_svg", div_name: "div_tool_6", svg_circle_name: "svg_crown_circle_name6",img_elements_name: "crown_img", img_element_name: "img_crown_element_name6", img_src: img_partners}
]

const Crown_buttons = crown_elements.map((crown_element) =>
  <div className={crown_element.div_name}>
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class={crown_element.svg_circles_name + " " + crown_element.svg_circle_name}>
      <circle cx="20" cy="20" r="20"/>
    </svg>
    <img
      className={crown_element.img_elements_name + " " + crown_element.img_element_name}
      src={crown_element.img_src}
    />
  </div>
);

const Crown = () => {
  return (
    <div className ="Crown">
      <img
        src={svg_crown}
        className ="img_crown"
      />
      <div className ="crown_buttons">
        {Crown_buttons}
      </div>
    </div>
  );
}

export default Crown;
