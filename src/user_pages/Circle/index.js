import React, {Component} from 'react';
import './index.css';
import Crown from './Crown';
import Tools_buttons from './Tools_elements';
import User_tools from './User_tools';
import img_placeholder from './../../images/placeholder/placeholder.png';
import svg_big_circle from './../../images/svg/big_circle/Big_circle.svg';
import svg_tale from './../../images/svg/tale/Tale.svg'
// индикатор онлайна
import img_contour from './../../images/contour.png';

// <div className="tools_background">
//     <svg viewBox="0 0 40 35" xmlns="http://www.w3.org/2000/svg" className="svg_tools_background">
//       <circle cx="20" cy="15" r="20" />
//     </svg>
// </div>

// <svg viewBox="0 0 40 35" xmlns="http://www.w3.org/2000/svg" className="svg_big_circle">
  // <circle cx="20" cy="15" r="20" />
// </svg>

const Big_circle = (props) => {
  return (
    <div className="Big_circle">
      <div className="div_big_circle">
        <img
          className="svg_big_circle"
          src={svg_big_circle}
          />
      </div>
      <div className="tools">
        <div className="tools_wrap1">
          {Tools_buttons}
        </div>
      </div>
    </div>
  );
}

const Medium_circle = () => {
  return (
    <div className="Medium_circle">
      <div className="div_svg_medium_circle">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" className="svg_medium_circle">
          <circle cx="20" cy="20" r="20" />
        </svg>
      </div>
      <Crown />
      <User_tools />
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

const Tale = (props) => {
  return (
    <div className ={"Tale " + props.show}>
      <img
        className="img_tale"
        src={svg_tale}
        />
    </div>
  );
}

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScroll: 0,
      showTale: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop >= 412) {
      this.setState({
        showTale: true,
      });
    } else {
      this.setState({
        showTale: false,
      });
    }
    this.setState(state => ({
      lastScroll: scrollTop
    }));
  }

  toogleClass = () => {
    return (this.state.showTale ? "show" : "");
  }

  render() {
    return (
      <div className="Circle " onScroll={this.handleScroll}>
        <div className="Circle_wrap1">
          <Tale show={this.toogleClass()}/>
          <Big_circle />
          <Medium_circle />
          <Small_circle />
        </div>
      </div>
    )
  }
}

export default Circle;
