import React, { Component } from 'react';
import './index.css';
import W_projects from './Wall_projects/index';
import W_photos from './Wall_photos/index';
import W_posts from './Wall_posts/index';

import Svg_line from './../../images/svg/wall_line/Line.svg';
import SideBorders from './W_sideBorders'

import { Route } from 'react-router-dom';

// import W_video from './Wall_video/W_video';

class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastScroll: 0,
      fixed: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    if (scrollTop >= 476) {
      this.setState({
        fixed: true,
      });
    } else {
      this.setState({
        fixed: false,
      });
    }
    this.setState({
      lastScroll: scrollTop
    });
  }

  toogleClass = () => {
    return (this.state.fixed ? "fix" : "");
  }

  render() {
    return (
      <div className="Wall">
        <SideBorders position="left" fix={this.toogleClass()}/>
        <SideBorders position="right" fix={this.toogleClass()}/>
        <div className="wrap2_Wall">
          <div className="wrap1_Wall">
            <switch>
              <Route exact path ="/test" component={W_posts}/>
              <Route path="/test/projects" component={W_projects}/>
              <Route path="/test/photos" component={W_photos}/>
            </switch>
          </div>
        </div>
      </div>
    )
  }
}
// {Instruments[2]}

export default Wall
