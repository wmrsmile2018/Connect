import React from 'react';
import './Circle.css';
import Crown from './Crown';
import Tools_buttons from './Tools_elements';
import img_placeholder from './../../images/placeholder/placeholder.png';

// индикатор онлайна
import img_contour from './../../images/contour.png';

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
