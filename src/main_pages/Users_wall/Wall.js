import React from 'react'
import './Wall.css'
import W_projects from './Wall_Projects/W_projects'

const Instruments = [<W_projects/>, 2];

const Wall = () => {
  return (
    <div className="Wall">
      <div className="void_place"></div>
      <div className="wrap2_Wall">
        <div className="wrap1_Wall">
          {Instruments[0]}
        </div>
      </div>
    </div>
  );
}

export default Wall
