import React from 'react';

import Friends from './Friends/index';
import { Route } from 'react-router-dom'

const ChFr_Wall = () => {
  return (
    <div className="chFr_wall_wrap1">
      <div className="ChFr_Wall">
        <div className="cfFr_types">
          <div className="cfFr_type1">
            <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg" className="svg_cfFr_type1">
              <circle cx="20" cy="20" r="20" />
            </svg>
          </div>
          <div className="cfFr_type2">
            <svg viewBox="0 0 40 20" xmlns="http://www.w3.org/2000/svg" className="svg_cfFr_type2">
              <circle cx="20" cy="20" r="20" />
            </svg>
          </div>
        </div>
        <div>
          <switch>
            <Route path="/chat" component={Friends}/>
            <Route path="/partners" component={Friends}/>
          </switch>
        </div>
      </div>
    </div>
  );
}

export default ChFr_Wall;
