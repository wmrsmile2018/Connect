import React from 'react';

import Circle from './Circle/index';
import Wall from './Users_wall/index';

const User_pages = () => {
  return (
    <div className="main_pages">
      <Circle/>
      <Wall />
    </div>
  );
}

export default User_pages;
