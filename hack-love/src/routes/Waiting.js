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
        <Row className="align-items-center mb-5">
            <Col lg="12" className="d-flex justify-content-center align-items-center mt-3">
                <h4>원하는대로 고르기</h4>
            </Col>
            <Col lg="12" className="d-flex justify-content-center align-items-center mt-3 mb-3">
                <h1>배고파요</h1>
            </Col>
            <Col lg="12" className="d-flex justify-content-center align-items-center mt-3 mb-5">
                <h3>6명이 대기 중입니다.</h3>
            </Col>

            <Col xs="12" lg="6" className="d-flex justify-content-center align-items-center mb-5">
                <div className="circle" style={{ width: '20vw', height: '20vw', marginStart: '-10vw' }}>
                    <img src={photoqr} alt="QR코드" className="centered-image" />
                </div>
            </Col>
            <Col xs="12" lg="6" style={{ maxHeight: '20vw', overflowY: 'auto', marginTop: '-3vw' }}>
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

            <Col className="d-flex justify-content-center align-items-center mt-3 mb-5">
                <div>
                    <Link to="/enter_room" className='nextBtn' style={{ color: '#0D0D0D', textDecoration: 'none' }}>START</Link>
                </div>
            </Col>
        </Row>
    );
};

export default Waiting;