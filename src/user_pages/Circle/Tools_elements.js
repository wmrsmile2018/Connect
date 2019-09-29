import React from 'react';
import { Link } from 'react-router-dom';
//элемент на 3 орбите
import img_balance from './../../images/tools/img_balance.png';
import img_main from './../../images/tools/img_news.png';
import img_photos from './../../images/tools/img_photos.png';
import img_products from './../../images/tools/img_products.png';
import img_projects from './../../images/tools/img_projects.png';
import img_vacancies from './../../images/tools/img_vacancies.png';
import img_video from './../../images/tools/img_video.png';

const tools_elements = [
  {link: "/balance", div_name: "div_tools1", svg_circle_name: "svg_tools_circle_name1", img_element_name: "img_tools_element_name1", img_src: img_balance},
  {link: "/projects", div_name: "div_tools2", svg_circle_name: "svg_tools_circle_name2", img_element_name: "img_tools_element_name2", img_src: img_projects},
  {link: "/vacancies", div_name: "div_tools3", svg_circle_name: "svg_tools_circle_name3", img_element_name: "img_tools_element_name3", img_src: img_vacancies},
  {link: "", div_name: "div_tools4", svg_circle_name: "svg_tools_circle_name4", img_element_name: "img_tools_element_name4", img_src: img_main},
  {link: "/products", div_name: "div_tools5", svg_circle_name: "svg_tools_circle_name5", img_element_name: "img_tools_element_name5", img_src: img_products},
  {link: "/photos", div_name: "div_tools6", svg_circle_name: "svg_tools_circle_name6", img_element_name: "img_tools_element_name6", img_src: img_photos},
  {link: "/video", div_name: "div_tools7", svg_circle_name: "svg_tools_circle_name7", img_element_name: "img_tools_element_name7", img_src: img_video}
]

const Tools_buttons = tools_elements.map((tools_element) =>
  <Link to={"/test" + tools_element.link}>
    <div key={tools_element.objectID} className={tools_element.div_name}>
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={"tools_svg" + " " + tools_element.svg_circle_name}>
        <circle cx="20" cy="20" r="20"/>
      </svg>
      <img
        className={"img_tools"+ " " + tools_element.img_element_name}
        src={tools_element.img_src}
      />
    </div>
  </Link>
);

export default Tools_buttons;
