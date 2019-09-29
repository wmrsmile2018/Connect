import React from 'react';
import './index.css';
import placeholder from './../../../images/placeholder/placeholder.png';

let photos = [
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder},
  {url: placeholder}
]

let ElementsPhoto = photos.map((photo) =>
    <div className={"w_photos" + photos.indexOf(photo) % 3 + " " + "w_photo" + photos.indexOf(photo)}>
        <img src={placeholder} class={"w_photos_img" + " " + "w_photo_img" + photos.indexOf(photo)}/>
    </div>
);

const W_photos = () => {
  return (
    <div className="W_photos">
      {ElementsPhoto}
    </div>
  );
}

export default W_photos;
