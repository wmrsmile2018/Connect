import React from 'react';
import './Circle.css';
import img_placeholder from './../images/placeholder/placeholder.png';

// индикатор онлайна
import img_contour from './../images/contour.png';

//элементы для короны
import svg_crown from './../images/svg/crown/crown.svg';
import img_chat from './../images/crown/img_chat.png';
import img_community from './../images/crown/img_community.png';
import img_cooperation from './../images/crown/img_cooperation.png';
import img_document from './../images/crown/img_document.png';
import img_notes from './../images/crown/img_notes.png';
import img_partners from './../images/crown/img_partners.png';

// элементы для инструментов
import img_balance from './../images/tools/img_balance.png';
import img_news from './../images/tools/img_news.png';
import img_photos from './../images/tools/img_photos.png';
import img_products from './../images/tools/img_products.png';
import img_projects from './../images/tools/img_projects.png';
import img_vacancies from './../images/tools/img_vacancies.png';
import img_video from './../images/tools/img_video.png';



const crown_elements = [
  {svg_circles_name: "crown_svg", div_name: "div_tool_1", svg_circle_name: "svg_crown_circle_name1",img_elements_name: "crown_img", img_element_name: "img_crown_element_name1", img_src: img_document},
  {svg_circles_name: "crown_svg", div_name: "div_tool_2", svg_circle_name: "svg_crown_circle_name2",img_elements_name: "crown_img", img_element_name: "img_crown_element_name2", img_src: img_notes},
  {svg_circles_name: "crown_svg", div_name: "div_tool_3", svg_circle_name: "svg_crown_circle_name3",img_elements_name: "crown_img", img_element_name: "img_crown_element_name3", img_src: img_community},
  {svg_circles_name: "crown_svg", div_name: "div_tool_4", svg_circle_name: "svg_crown_circle_name4",img_elements_name: "crown_img", img_element_name: "img_crown_element_name4", img_src: img_chat},
  {svg_circles_name: "crown_svg", div_name: "div_tool_5", svg_circle_name: "svg_crown_circle_name5",img_elements_name: "crown_img", img_element_name: "img_crown_element_name5", img_src: img_cooperation},
  {svg_circles_name: "crown_svg", div_name: "div_tool_6", svg_circle_name: "svg_crown_circle_name6",img_elements_name: "crown_img", img_element_name: "img_crown_element_name6", img_src: img_partners}
]

const tools_elements = [
  {svg_circles_name: "tools_svg", div_name: "div_tools1", svg_circle_name: "svg_tools_circle_name1", img_elements_name: "img_tools", img_element_name: "img_tools_element_name1", img_src: img_balance},
  {svg_circles_name: "tools_svg", div_name: "div_tools2", svg_circle_name: "svg_tools_circle_name2", img_elements_name: "img_tools", img_element_name: "img_tools_element_name2", img_src: img_projects},
  {svg_circles_name: "tools_svg", div_name: "div_tools3", svg_circle_name: "svg_tools_circle_name3", img_elements_name: "img_tools", img_element_name: "img_tools_element_name3", img_src: img_vacancies},
  {svg_circles_name: "tools_svg", div_name: "div_tools4", svg_circle_name: "svg_tools_circle_name4", img_elements_name: "img_tools", img_element_name: "img_tools_element_name4", img_src: img_news},
  {svg_circles_name: "tools_svg", div_name: "div_tools5", svg_circle_name: "svg_tools_circle_name5", img_elements_name: "img_tools", img_element_name: "img_tools_element_name5", img_src: img_products},
  {svg_circles_name: "tools_svg", div_name: "div_tools6", svg_circle_name: "svg_tools_circle_name6", img_elements_name: "img_tools", img_element_name: "img_tools_element_name6", img_src: img_photos},
  {svg_circles_name: "tools_svg", div_name: "div_tools7", svg_circle_name: "svg_tools_circle_name7", img_elements_name: "img_tools", img_element_name: "img_tools_element_name7", img_src: img_video}
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

const Tools_buttons = tools_elements.map((tools_element) =>
  <div className={tools_element.div_name}>
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      class={tools_element.svg_circles_name + " " + tools_element.svg_circle_name}>
      <circle cx="20" cy="20" r="20"/>
    </svg>
    <img
      className={tools_element.img_elements_name + " " + tools_element.img_element_name}
      src={tools_element.img_src}
    />
  </div>
);

const Big_circle = () => {
  return (
    <div className="Big_circle">
      <div className="div_big_circle">
        <svg viewBox="0 0 40 35" xmlns="http://www.w3.org/2000/svg" class="svg_big_circle">
          <circle cx="20" cy="15" r="20" />
        </svg>
      </div>
      <div className="tools">
        {Tools_buttons}
      </div>
    </div>
  );
}

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

const Medium_circle = () => {
  return (
    <div className="Medium_circle">
      <div className="div_svg_medium_circle">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" class="svg_medium_circle">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
      <Crown />
    </div>
  );
}

const Small_circle = () => {
  return (
    <div className="Small_circle">
      <div className="contour">
        <img
          src = {img_contour}
          className = "img_contour"
        />
      </div>
      <div className ="avatar">
        <img
          src= {img_placeholder}
          className ="img_avatar"
        />
      </div>
    </div>
  );
}


const Circle = () => {
  return (
    <div className = "Circle">
      <Big_circle />
      <Medium_circle />
      <Small_circle />
    </div>
  );
}

export default Circle;
