import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import placeholder from './../../../images/placeholder/placeholder.png';
import Submit_post from './W_submit_post';
// import {createStore} from 'redux';

// const state = createStore();

let Posts = [
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "В зависимости от количественного соотношения различных углеводородов, составляющих нефть, ее свойства также различаются. Нефть бывает прозрачной и текучей как вода. А бывает черной и настолько вязкой и малоподвижной, что не вытекает из сосуда, даже если его перевернуть. С химической точки зрения обычная (традиционная) нефть состоит из следующих элементов."},
  {w_post_date: "12 july 2019 15:30",
    w_post_userName: "Name Name", count_like: 20, count_repost: 20, count_answer: 20,
  text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  // text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  // text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  // text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  // text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  // text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  //   text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  //   text: "bla bla bla bla bla bla bla bla"},
  // {w_post_date: "28.08.19",
  //   w_post_userName: "someone", count_like: 20, count_repost: 20, count_answer: 20,
  //   text: "bla bla bla bla bla bla bla bla"}
]

const ElementsPosts = Posts.map((post) =>
  <div className={"w_posts " + "w_post" + Posts.indexOf(post)}>
    <div className="w_post_header">
      <div className="wrap1_posts">
        <img className={"w_posts_img " + "w_post_img" + Posts.indexOf(post)} src={placeholder}/>
        <div className="w_post_userName"> {post.w_post_userName} </div>
      </div>
      <div className="w_post_date"> {post.w_post_date} </div>
    </div>
    <div className="w_post_content">
      <div className="w_post_content_text">
        {post.text}
      </div>
      <div className="w_post_content_attechment_files">
        <div className="w_post_content_photos"> </div>
        <div className="w_post_content_documents"> </div>
        <div className="w_post_content_video"> </div>
        <div className="w_post_content_music"> </div>
      </div>
    </div>
    <div className="w_post_footer">
      <div className="w_post_footer_buttons">
        <img className="w_post_footer_buttons_like"/>
        <img className="w_post_footer_buttons_comment"/>
        <img className="w_post_footer_buttons_repost"/>
      </div>
    </div>
  </div>
);

const W_posts = () => {
  return (
    <div className="W_posts">
      <Submit_post/>
      {ElementsPosts}
    </div>
  );
}

export default W_posts;
