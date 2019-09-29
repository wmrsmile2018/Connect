import React, { Component } from 'react';
import PropTypes from 'prop-types';
import placeholder from './../../../images/placeholder/placeholder.png';
import article_svg from './../../../images/svg/submit_post/article.svg';
import document_svg from './../../../images/svg/submit_post/document.svg';
import location_svg from './../../../images/svg/submit_post/location.svg';
import photo_svg from './../../../images/svg/submit_post/photo.svg';
import quiz_svg from './../../../images/svg/submit_post/quiz.svg';
import submitSend_svg from './../../../images/svg/submit_post/submitSend.svg';

const elements = [
  {div_class: "w_submit_window_footer_div_pin_photo", img_class: "w_submit_window_footer_img_pin_photo", svg_class: "w_submit_window_footer_svg_pin_photo", img_src: photo_svg},
  {div_class: "w_submit_window_footer_pin_documents", img_class: "w_submit_window_footer_img_pin_documents", svg_class: "w_submit_window_footer_svg_pin_documents", img_src: document_svg},
  {div_class: "w_submit_window_footer_pin_location", img_class: "w_submit_window_footer_img_pin_location", svg_class: "w_submit_window_footer_svg_pin_location", img_src: location_svg},
  {div_class: "w_submit_window_footer_pin_quiz", img_class: "w_submit_window_footer_img_pin_quiz", svg_class: "w_submit_window_footer_svg_pin_quiz", img_src: quiz_svg},
  {div_class: "w_submit_window_footer_pin_article", img_class: "w_submit_window_footer_img_pin_article", svg_class: "w_submit_window_footer_svg_pin_article", img_src: article_svg}
]

const Pin_buttons = elements.map((element) =>
  <div key={element.objectID} className={element.div_class}>
    <svg
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      className={"pin_buttons_svg" + " " + element.svg_class}>
      <circle cx="20" cy="20" r="20"/>
    </svg>
    <img
      className={"pin_buttons_img" + " " + element.img_class}
      src={element.img_src}
    />
  </div>
);

const Send_button = () => {
  return (
    <div className="w_submit_window_footer_send">
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={"send_button_svg"}>
        <circle cx="20" cy="20" r="20"/>
      </svg>
      <img
        className={"send_buttons_img"}
        src={submitSend_svg}
      />
    </div>
  );
}

class Submit_post extends Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClick = this.handleClick.bind(this);

    const w_submit_window_open = {
      height: "150px",
    }

    const w_submit_window_close = {
      height: "30px",
    }

    const w_submit_window_footer_open = {
      display: "grid",
    }

    const w_submit_window_footer_close = {
      display: "none",
    }

    const open = {
        wsw: w_submit_window_open,
        wswf: w_submit_window_footer_open
    }

    const close = {
      wsw: w_submit_window_close,
      wswf: w_submit_window_footer_close
    }

    this.state = {
      open: open,
      close: close,
      flag: "close",
    }
   }

   componentDidMount() {
     document.addEventListener('mousedown', this.handleClick);
   }

   componentWillUnmount() {
     document.removeEventListener('mousedown', this.handleClick);
   }

   setWrapperRef(node) {
     this.wrapperRef = node;
   }

   handleClick(event) {
     if (this.state.flag == "open" && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
       this.setState((state) => ({
         flag: "close",
       }));
     } else if (this.state.flag == "close" && this.wrapperRef && this.wrapperRef.contains(event.target)) {
       this.setState(state => ({
         flag: "open",
       }));
     }
   }

   check() {
      return (this.state.flag == "close" ? this.state.close : this.state.open);
   }

  render() {
    return (
      <div className="submit_post">
        <div className="w_submit_post_user_photo">
          <img className="post_user_photo" src={placeholder}/>
        </div>
        <div className="w_submit_window" ref={this.setWrapperRef}  style={this.check().wsw}>
          <div className="w_submit_post_placegolder">
            <p className="w_submit_post_p_placegolder">
              New post...
            </p>
          </div>
          <div className="w_submit_post_content">
            <div className="w_submit_post_content_text">

            </div>
            <div className="w_submit_window_content_files"></div>
          </div>
          <div className="w_submit_window_footer" style={this.check().wswf}>
            <div className="w_submit_window_footer_pin">
              {Pin_buttons}
            </div>
            <Send_button />
          </div>
        </div>
      </div>
    )
  }
}

Submit_post.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Submit_post;
