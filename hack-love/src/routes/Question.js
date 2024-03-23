import React, { useState, useEffect } from 'react';
import '../index.css';
import photo from '../img/photo_1.PNG';

const Question = () => {

    const [Options, setOptions] = useState(['매움', '안 매움']);
    const [Timer, setTimer] = useState(15);

    // Timer를 1초에 하나씩 감소시키는 함수
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(interval); // 타이머가 0이 되면 clearInterval 호출하여 타이머 멈춤
                    return 0; // 타이머를 0으로 업데이트
                } else {
                    return prevTimer - 1; // 이전 상태를 기반으로 Timer를 업데이트
                }
            });
        }, 1000); // 1000밀리초(1초)마다 실행
        return () => clearInterval(interval); // 컴포넌트가 언마운트되면 interval을 제거하여 메모리 누수를 방지
    }, []); // useEffect의 두 번째 인자가 빈 배열이므로 컴포넌트가 처음 렌더링될 때만 실행

    if (window.innerWidth <= 400) {
        return (
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{padding: '3vw'}}>{Timer}</h1>
                <div style={{display:'flex', justifyContent: 'space-evenly', width: '100%'}}>
                    <div className="scale" style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="circle" style={{width: '25vw', height: '25vw', backgroundColor: '#54878B'}}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{padding: '3vw'}}>{Options[0]}</h1>
                    </div>
                    <div className="scale" style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="circle" style={{width: '25vw', height: '25vw', backgroundColor: '#F1B8C4'}}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{padding: '3vw'}}>{Options[1]}</h1>
                    </div>
    
                </div>
            </div >
        )
    } else {
        return (
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style={{padding: '3vw'}}>{Timer}</h1>
                <div style={{display:'flex', justifyContent: 'space-evenly', width: '100%'}}>
                    <div className="scale" style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="circle" style={{width: '25vw', height: '25vw', backgroundColor: '#F3CEA2'}}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{padding: '3vw'}}>{Options[0]}</h1>
                    </div>
                    <div style={{ borderLeft: '1px solid #0D0D0D', height: '25vw'}}></div>
                    <div className="scale" style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="circle" style={{width: '25vw', height: '25vw', backgroundColor: '#F3CEA2'}}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{padding: '3vw'}}>{Options[1]}</h1>
                    </div>
    
                </div>
            </div >
        );
    }
};

export default Question;