import React from 'react';

import svg_circle from './../../images/svg/chat_friends/circle.svg';
import svg_smallСircle from './../../images/svg/chat_friends/smallCircle.svg';

import Tools from './tools';
import Search_el from './search';

const Circle = () => {
  return (
    <div className="chFr_header">
      <div className="wrap1_chFr_header">
        <div className="chFr_circle">
          <img src={svg_circle}
            className="svg_circle"
          />
          <img src={svg_smallСircle}
            className="svg_smallCircle"
          />
        </div>
        <div className="chFr_search">
          <Search_el />
        </div>
        <div className="chFr_tools">
          {Tools}
        </div>
      </div>
    </div>

  );
}

export default Circle;
