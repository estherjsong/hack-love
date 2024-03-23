import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Circle.css';
import photoqr from '../img/image.png';
import { Row, Col, Label } from "reactstrap";
import styled from 'styled-components';

export const ScrollDiv = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Waiting = () => {

    const [nameList, setNamelist] = useState(['디자이너 우', '별명짓기 싫어', '별명이 왜 여섯개나', '메롱', '창의력..따위', '마지막', '이 아니었어', '스크롤 보려고 별명 더 만드릭', '몇개나 더 만들어', '이정도면 충분하지 ㅇ낳으까'])

    return (
        <div>
            <div style={{ position: 'absolute', marginLeft: '-45vw', marginTop: '5vh', width: '100%', height: '80vh', zIndex: '-1', display: 'flex', alignItems: 'center', marginBottom: '8vw' }}>
                <div className="circle" style={{ width: '80vh', height: '100%', margin: '0 auto' }}>
                </div>
            </div>
            <Row className="align-items-center mb-5">
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-3">
                    <h4>원하는대로 고르기</h4>
                </Col>
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-2 mb-2">
                    <h1>배고파요</h1>
                </Col>
                <Col lg="12" className="d-flex justify-content-center align-items-center mt-2 mb-5">
                    <h3>{nameList.length}명이 대기 중입니다.</h3>
                </Col>

                <Col xs="12" lg="6" className="d-flex flex-column align-items-center">
                    <img src={photoqr} alt="QR코드" className="centered-image" style={{ width: '35vh', height: '35vh', marginLeft: '10vw' }} />
                    <p className='link' style={{ marginLeft: '10vw', marginTop: '1vw' }}>링크 공유하기</p>
                </Col>
                <Col xs="12" lg="4" style={{ maxWidth: '30vw', maxHeight: '35vh', overflowY: 'auto', marginTop: '-10vh', paddingLeft: '3vw' }}>
                    {nameList.map((name, index) => (
                        <Row key={index} className="align-items-center">
                            <div className="circle" style={{ width: '10px', height: '10px' }} />
                            &nbsp;&nbsp;
                            <h3 className='ms-5'>
                                {name}
                            </h3>
                        </Row>
                    ))}
                </Col>

                <Col lg="12" className="d-flex justify-content-center align-items-center mb-5">
                    <div>
                        <Link to="/result" className='nextBtn' style={{ color: '#0D0D0D', textDecoration: 'none' }}>START</Link>
                    </div>
                </Col>
            </Row>
        </div >

    );
};

export default Waiting;