import React from 'react';
import '../styles/Circle.css';
import photo from '../img/photo_1.PNG';


const Creation = () => {
  return (
    <div>
      <h4>원하는대로 고르기</h4>
      <div className="circle">
        <img src={photo} alt="돼지국밥" className="centered-image" />
      </div>
    </div>
  );
};

export default Creation;
