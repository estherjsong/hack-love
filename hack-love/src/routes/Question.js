import React, { useState, useEffect } from 'react';
import '../index.css';
import photo from '../img/photo_1.PNG';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

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

    if (window.innerWidth <= 576) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'horizontal', justifyContent: 'space-between', width: '100%', paddingTop: '3vh' }}>
                    <Link to="/" className='link' style={{ color: '#0D0D0D', textDecoration: 'none', fontWeight: '200', fontSize: '1.8rem', paddingTop: '2vh' }}>
                        <i className="bi bi-arrow-left" />
                        Exit
                    </Link>
                    <h1 style={{ padding: '3vw' }}>{Timer}</h1>
                </div>
                <div className="scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '-80vw' }}>
                    <div className="circle" style={{ width: '45vh', height: '45vh', backgroundColor: '#F3CEA2' }}>
                        <img src={photo} alt="돼지국밥" className="centered-image" />
                    </div>
                </div>
                <h1 style={{ position: 'absolute', padding: '3vw', top: '20vh', right: '10vw' }}>{Options[0]}</h1>

                <div className="scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '-80vw', marginTop: '-10vh' }}>
                    <div className="circle" style={{ width: '45vh', height: '45vh', backgroundColor: '#F3CEA2' }}>
                        <img src={photo} alt="돼지국밥" className="centered-image" />
                    </div>
                </div>
                <h1 style={{ position: 'absolute', padding: '3vw', top: '80vh', left: '10vw' }}>{Options[1]}</h1>
            </div >
        )
    } else {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to="/" className='link' style={{ position: 'absolute', top: '5vh', left: '5vw', color: '#0D0D0D', textDecoration: 'none', fontWeight: '200', fontSize: '1.8rem', paddingLeft: '0' }}>
                    <i className="bi bi-arrow-left" />
                    EXIT
                </Link>
                <h1 style={{ padding: '3vw' }}>{Timer}</h1>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                    <div className="scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="circle" style={{ width: '25vw', height: '25vw', backgroundColor: '#F3CEA2' }}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{ padding: '3vw' }}>{Options[0]}</h1>
                    </div>
                    <div style={{ borderLeft: '1px solid #0D0D0D', height: '25vw' }}></div>
                    <div className="scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="circle" style={{ width: '25vw', height: '25vw', backgroundColor: '#F3CEA2' }}>
                            <img src={photo} alt="돼지국밥" className="centered-image" />
                        </div>
                        <h1 style={{ padding: '3vw' }}>{Options[1]}</h1>
                    </div>

                </div>
            </div >

        );
    }
};

export default Question;