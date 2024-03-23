import React, { useState } from 'react';
import '../styles/Circle.css';
import '../styles/Animation.css'
import photo from '../img/photo_1.PNG';

const Result = () => {
  const [position, setPosition] = useState(0); // State to track position, initial position is 1
  const [list, setList] = useState([
    { menu: '돼지국밥', img: photo, des1: '따끈하게 속을 채워주는', des2: ': 국밥은 언제나 맛있다' },
    { menu: '돼지국밥2', img: photo, des1: '따끈하게 속을 채워주는', des2: ': 국밥은 언제나 맛있다22' },
    { menu: '돼지국밥3', img: photo, des1: '따끈하게 속을 채워주는', des2: ': 국밥은 언제나 맛있다333' }
  ]);

const handleLeftArrowClick = () => {
  setPosition(prevPosition => {
    if (prevPosition === 0) {
      return 0;
    } else {
      return prevPosition - 1;
    }
  });
};

const handleRightArrowClick = () => {
  setPosition(prevPosition => {
    if (prevPosition === 2) {
      return 2;
    } else {
      return prevPosition + 1;
    }
  });
};

  let opacityLeft;
  let opacityRight;

  if (position == 0) {
    opacityLeft = 0.3;
    opacityRight = 1;
  }
  else if (position == 1) {
    opacityLeft = 1;
    opacityRight = 1;
  }
  else {
    opacityLeft = 1;
    opacityRight = 0.3;
  }

  return (
    <div>
      <div style={{marginTop: '-30vw', width: '100%', height: '50vw', zIndex: '-1', display:'flex', alignItems: 'center', marginBottom: '8vw'}}>
        <div className="circle" style={{width: '50vw', height: '100%', margin: '0 auto'}}>
        </div>
        <img className="rotating-image" src={list[position].img} alt="돼지국밥" style={{position: 'absolute', width: '20vw', heigth: '20vw', top: '12vw', left: '50%', transform: 'translateX(-50%)'}}/>
      </div>
      <div style={{position: 'absolute', left: '0', top: '8vw', width: '100%'}}>
        <h4 style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>{position + 1}위</h4>
      </div>
      <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" opacity={opacityLeft} onClick={handleLeftArrowClick}>
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1 className='fade-in' style={{margin: '3vh 0'}}>{list[position].des1} <mark style={{backgroundColor: '#54878B', color: 'white'}}>{list[position].menu}</mark></h1>
          <h2 className='fade-in'>{list[position].des2}</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" opacity={opacityRight} onClick={handleRightArrowClick}>
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </div>
    </div>

  );
};

export default Result;  
