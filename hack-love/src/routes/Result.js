import React from 'react';
import '../styles/Circle.css';
import '../styles/Rotation.css'
import photo from '../img/photo_1.PNG';

const Result = () => {
  return (
    <div>
      <div style={{marginTop: '-30vw', width: '100%', height: '50vw', zIndex: '-1', display:'flex', alignItems: 'center', marginBottom: '8vw'}}>
        <div className="circle" style={{width: '50vw', height: '100%', margin: '0 auto'}}>
        </div>
        <img className="rotating-image" src={photo} alt="돼지국밥" style={{position: 'absolute', width: '20vw', heigth: '20vw', top: '12vw', left: '50%', transform: 'translateX(-50%)'}}/>
      </div>
      <div style={{position: 'absolute', left: '0', top: '8vw', width: '100%'}}>
        <h4 style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>1위</h4>
      </div>
      <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" opacity={'0.3'}>
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
        </svg>
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h1 style={{margin: '3vh 0'}}>따끈하게 속을 채워주는 <mark style={{backgroundColor: '#54878B', color: 'white'}}>돼지국밥</mark></h1>
          <h2>:국밥은 언제나 맛있다</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vw" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
        </svg>
      </div>
    </div>

  );
};

export default Result;  
