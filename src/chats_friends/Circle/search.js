import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

import svg_search from './../../images/svg/chat_friends/circle.svg';

const { Search } = Input;

const Search_el = () => {
  return (
      <Search
       placeholder="Searching..."
       onSearch={value => console.log(value)}
       style={{ width: 200 }}
     />
  );

}

export default Search_el;
