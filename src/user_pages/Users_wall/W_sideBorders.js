import React from 'react';
import Svg_line from './../../images/svg/wall_line/Line.svg';

const SideBorders = (props) => {
  return (
       <div className={props.position + "_sideBorderDiv " + props.fix}>
         <img
           className={props.position + "_sideBorderImg " + props.fix}
           src={Svg_line}
         />
       </div>
  );
}

export default SideBorders;
